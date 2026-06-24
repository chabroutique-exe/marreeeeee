const COMMUNES = {
  bordeaux: {
    label: "Bordeaux (33000)",
    city: "Bordeaux",
    citycode: "33063",
    postcode: "33000",
    population: 261804,
    surface: 49.36,
    establishments: 47820,
    avgPriceSqm: 4870,
    transactionCount: 842,
    latestMutation: "2025-12-18",
    rentPrime: 265,
    vacancyOffice: 7.8,
    liquidity: "forte",
  },
  pessac: {
    label: "Pessac (33600)",
    city: "Pessac",
    citycode: "33318",
    postcode: "33600",
    population: 66920,
    surface: 38.82,
    establishments: 9080,
    avgPriceSqm: 3740,
    transactionCount: 316,
    latestMutation: "2025-11-27",
    rentPrime: 178,
    vacancyOffice: 9.4,
    liquidity: "bonne",
  },
  merignac: {
    label: "Merignac (33700)",
    city: "Merignac",
    citycode: "33281",
    postcode: "33700",
    population: 75635,
    surface: 48.17,
    establishments: 11940,
    avgPriceSqm: 3920,
    transactionCount: 364,
    latestMutation: "2025-12-09",
    rentPrime: 185,
    vacancyOffice: 8.9,
    liquidity: "bonne",
  },
  talence: {
    label: "Talence (33400)",
    city: "Talence",
    citycode: "33522",
    postcode: "33400",
    population: 44487,
    surface: 8.35,
    establishments: 4875,
    avgPriceSqm: 4460,
    transactionCount: 221,
    latestMutation: "2025-12-04",
    rentPrime: 192,
    vacancyOffice: 6.6,
    liquidity: "forte",
  },
  "la rochelle": {
    label: "La Rochelle (17000)",
    city: "La Rochelle",
    citycode: "17300",
    postcode: "17000",
    population: 77361,
    surface: 28.43,
    establishments: 11120,
    avgPriceSqm: 5280,
    transactionCount: 392,
    latestMutation: "2025-12-12",
    rentPrime: 205,
    vacancyOffice: 5.8,
    liquidity: "forte",
  },
  bayonne: {
    label: "Bayonne (64100)",
    city: "Bayonne",
    citycode: "64102",
    postcode: "64100",
    population: 53200,
    surface: 21.68,
    establishments: 7430,
    avgPriceSqm: 4590,
    transactionCount: 288,
    latestMutation: "2025-11-21",
    rentPrime: 186,
    vacancyOffice: 6.9,
    liquidity: "bonne",
  },
  angouleme: {
    label: "Angouleme (16000)",
    city: "Angouleme",
    citycode: "16015",
    postcode: "16000",
    population: 41597,
    surface: 21.85,
    establishments: 4820,
    avgPriceSqm: 2140,
    transactionCount: 176,
    latestMutation: "2025-10-30",
    rentPrime: 128,
    vacancyOffice: 11.8,
    liquidity: "moyenne",
  },
};

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function findCommune(value) {
  const key = normalize(value || "Bordeaux");
  return COMMUNES[key] || Object.values(COMMUNES).find((item) => normalize(item.city).includes(key) || key.includes(normalize(item.city))) || COMMUNES.bordeaux;
}

function now() {
  return new Date().toISOString();
}

export function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": "*",
    },
  });
}

export function buildMarketPayload(query = {}) {
  const commune = findCommune(query.sector);
  const mortgageRate = 3.36;
  return {
    generatedAt: now(),
    mode: "demo-db",
    query: {
      sector: query.sector || commune.city,
      assetClass: query.assetClass || "all",
      budget: Number(query.budget || 0),
      yieldTarget: Number(query.yieldTarget || 0),
    },
    location: {
      status: "demo-db",
      label: commune.label,
      city: commune.city,
      postcode: commune.postcode,
      citycode: commune.citycode,
    },
    realEstate: {
      status: "demo-db",
      datasetLabel: "Base DVF locale - millesime 2026",
      lastUpdate: "2026-06-01T08:00:00.000Z",
      resourcesCount: 4,
      transactionsStatus: "demo-db",
      transactionCount: commune.transactionCount,
      avgPriceSqm: commune.avgPriceSqm,
      sampleSize: Math.round(commune.transactionCount * 0.72),
      latestMutation: commune.latestMutation,
      rentPrime: commune.rentPrime,
      vacancyOffice: commune.vacancyOffice,
      transactionWarning: "Base fictive de presentation : chiffres coherents, non opposables juridiquement.",
    },
    demographics: {
      status: "demo-db",
      provider: "Base INSEE locale",
      population: commune.population,
      surface: commune.surface,
      density: Math.round(commune.population / commune.surface),
      citycode: commune.citycode,
    },
    finance: {
      status: "demo-db",
      mortgageRate: {
        value: mortgageRate,
        period: "T1 2026",
        label: "Taux de reference presentation",
      },
    },
    economy: {
      status: "demo-db",
      establishmentsLabel: commune.establishments.toLocaleString("fr-FR") + " etablissements",
      totalResults: commune.establishments,
      liquidity: commune.liquidity,
    },
    sources: [
      { name: "Base DVF locale", status: "demo-db", detail: commune.transactionCount + " mutations simulees", url: "local://fake-dvf" },
      { name: "Base INSEE locale", status: "demo-db", detail: commune.population.toLocaleString("fr-FR") + " habitants", url: "local://fake-insee" },
      { name: "Base economie locale", status: "demo-db", detail: commune.establishments.toLocaleString("fr-FR") + " etablissements", url: "local://fake-economie" },
      { name: "Taux financier local", status: "demo-db", detail: mortgageRate.toFixed(2).replace(".", ",") + " %", url: "local://fake-finance" },
    ],
    suggestions: [
      "Mode presentation active : donnees locales coherentes meme si les API publiques ne chargent pas.",
      "Comparer le rendement net avec le taux de reference de " + mortgageRate.toFixed(2).replace(".", ",") + " %.",
      "Prix moyen observe fictif : " + commune.avgPriceSqm.toLocaleString("fr-FR") + " EUR/m2, a challenger avec les comparables reels apres presentation.",
      "Liquidite marche " + commune.liquidity + " et vacance bureaux estimee a " + commune.vacancyOffice.toString().replace(".", ",") + " %.",
    ],
  };
}

export function buildDvfPayload(codeCommune = "") {
  const commune = Object.values(COMMUNES).find((item) => item.citycode === String(codeCommune)) || COMMUNES.bordeaux;
  return {
    generatedAt: now(),
    code_commune: commune.citycode,
    status: "demo-db",
    datasetLabel: "Base DVF locale - millesime 2026",
    lastUpdate: "2026-06-01T08:00:00.000Z",
    resourcesCount: 4,
    transactionsStatus: "demo-db",
    transactionCount: commune.transactionCount,
    avgPriceSqm: commune.avgPriceSqm,
    sampleSize: Math.round(commune.transactionCount * 0.72),
    latestMutation: commune.latestMutation,
    transactionWarning: "Base fictive de presentation.",
    sources: [{ name: "Base DVF locale", status: "demo-db", detail: commune.city + " -> " + commune.transactionCount + " mutations", url: "local://fake-dvf" }],
  };
}

export function buildInseePayload(codeCommune = "") {
  const commune = Object.values(COMMUNES).find((item) => item.citycode === String(codeCommune)) || COMMUNES.bordeaux;
  return {
    generatedAt: now(),
    code_commune: commune.citycode,
    demographics: {
      status: "demo-db",
      provider: "Base INSEE locale",
      population: commune.population,
      surface: commune.surface,
      density: Math.round(commune.population / commune.surface),
      citycode: commune.citycode,
    },
    sources: [{ name: "Base INSEE locale", status: "demo-db", detail: commune.label, url: "local://fake-insee" }],
  };
}
