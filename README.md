# ImmoScope

Application pour identifier et comparer les meilleures opportunites immobilieres selon une recherche client, avec couche API serveur pour enrichir l'analyse marche.

## Fonctions incluses

- Recherche client : secteur, budget, classe d'actifs, rendement cible, strategie et tolerance au risque.
- Scoring automatique des actifs selon budget, secteur, rendement, risque, vacance, liquidite et potentiel de valorisation.
- Cartes d'opportunites avec raisons de classement.
- Tableau comparatif detaille.
- Module fiscalite avec pistes a etudier : regime reel, SCI IR, SCI IS, LMNP, TVA/bail commercial et plus-value.
- Ajout manuel d'une opportunite pendant la session.
- API production : `/api/market` pour geocodage, DVF/data.gouv, transactions DVF, donnees INSEE/commune, taux Banque de France/Webstat et dynamique entreprises.
- API specialisees : `/api/dvf?code_commune=33063` et `/api/insee?code_commune=33063`.
- API supervision : `/api/health`.
- Fallback controle si une source publique ne repond pas.
- Mode presentation Vercel : une base locale de demonstration alimente les donnees marche si les API publiques ne chargent pas.

## Lancer en local

```sh
node scripts/serve.mjs
```

Puis ouvrir :

```text
http://127.0.0.1:4173
```

## Verifier l'artefact Sites

```sh
bash scripts/build.sh
node scripts/validate-artifact.mjs
```

## Connecteurs API

- `BAN/IGN Geoplateforme` : geocodage du secteur.
- `data.gouv DVF+ open-data` : metadonnees du dataset foncier.
- `Micro-API DVF` : transactions par code commune via `DVF_API_ENDPOINT`.
- `INSEE Donnees locales` : configurable via `INSEE_LOCAL_ENDPOINT` et `INSEE_API_TOKEN`.
- `API Geo commune` : fallback ouvert pour population, surface et codes administratifs.
- `Recherche Entreprises API` : volume d'etablissements par code commune.
- `Banque de France Webstat` : endpoint configurable avec `BDF_RATE_ENDPOINT`.

Variables optionnelles :

```text
BDF_RATE_ENDPOINT=https://...
WEBSTAT_API_TOKEN=...
DVF_API_ENDPOINT=http://api.cquest.org/dvf
DVF_API_TOKEN=
INSEE_LOCAL_ENDPOINT=https://...
INSEE_API_TOKEN=...
```

Notes importantes :

- La micro-API DVF publique est pratique pour tester, mais sa disponibilite n'est pas garantie. Pour un usage regulier, il vaut mieux deployer sa propre instance ou utiliser une API DVF professionnelle.
- L'API INSEE Donnees locales passe par le portail API INSEE et peut necessiter une souscription/token. Sans endpoint configure, l'app utilise l'API Geo comme fallback communal.
- Les donnees DVF ne doivent pas servir a re-identifier indirectement des personnes.

## Deploiement Vercel pour presentation

Le projet contient maintenant des routes compatibles Vercel dans le dossier `api/` :

```text
/api/health
/api/market?sector=Bordeaux&budget=450000&yieldTarget=5.5
/api/dvf?code_commune=33063
/api/insee?code_commune=33063
```

Si les API publiques sont bloquees ou lentes, l'application bascule sur une base locale de demonstration :

- Base DVF locale : prix/m2, nombre de mutations, derniere mutation.
- Base INSEE locale : population, surface, densite.
- Base economie locale : volume d'etablissements et lecture de liquidite.
- Taux financier local : taux de reference de presentation.

Pour la presentation, formule conseillee : "L'application est connectable aux API publiques, et dispose d'un cache local de demonstration pour garantir la continuite de l'analyse si une source externe ne repond pas."

L'application est servie par `worker/index.js`. Le dossier `dist/` est genere automatiquement par le build.
