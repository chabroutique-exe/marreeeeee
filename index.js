const page = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ImmoScope - Opportunites immobilieres</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #fff5f8;
        --ink: #29131d;
        --muted: #7b6170;
        --panel: #ffffff;
        --line: #f0d6e1;
        --soft: #fff0f6;
        --brand: #b0185b;
        --brand-2: #e63f86;
        --accent: #ffb15d;
        --danger: #c6485d;
        --shadow: 0 18px 45px rgba(77, 18, 45, 0.12);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      * { box-sizing: border-box; }

      body {
        margin: 0;
        min-height: 100vh;
        background:
          radial-gradient(circle at 88% 8%, rgba(230, 63, 134, 0.20), transparent 28rem),
          radial-gradient(circle at 8% 16%, rgba(255, 177, 93, 0.18), transparent 24rem),
          linear-gradient(180deg, #fff7fb 0%, var(--bg) 28rem, #fffafd 100%);
        color: var(--ink);
      }

      button, input, select, textarea {
        font: inherit;
      }

      button {
        border: 0;
        cursor: pointer;
      }

      .shell {
        width: min(1480px, calc(100% - 32px));
        margin: 0 auto;
        padding: 24px 0 36px;
      }

      .topbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        margin-bottom: 22px;
      }

      .brand {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .mark {
        display: grid;
        width: 42px;
        height: 42px;
        place-items: center;
        border-radius: 8px;
        background: var(--brand);
        color: white;
        font-weight: 800;
        letter-spacing: 0.02em;
      }

      .brand h1 {
        margin: 0;
        font-size: clamp(1.35rem, 2vw, 2rem);
        letter-spacing: 0;
      }

      .brand p {
        margin: 2px 0 0;
        color: var(--muted);
        font-size: 0.95rem;
      }

      .status-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 9px 12px;
        border: 1px solid rgba(176, 24, 91, 0.18);
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.76);
        color: var(--brand);
        font-weight: 700;
        white-space: nowrap;
      }

      .top-actions {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: flex-end;
      }

      .status-dot {
        width: 9px;
        height: 9px;
        border-radius: 999px;
        background: #e63f86;
        box-shadow: 0 0 0 5px rgba(230, 63, 134, 0.16);
      }

      .hero {
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
        gap: 22px;
        align-items: stretch;
        margin-bottom: 22px;
      }

      .hero-main {
        min-height: 360px;
        border-radius: 8px;
        padding: 30px;
        color: white;
        background:
          radial-gradient(circle at 85% 18%, rgba(255, 177, 93, 0.34), transparent 15rem),
          radial-gradient(circle at 12% 82%, rgba(255, 255, 255, 0.18), transparent 18rem),
          linear-gradient(135deg, rgba(138, 18, 72, 0.98), rgba(230, 63, 134, 0.82));
        background-size: cover;
        background-position: center;
        box-shadow: var(--shadow);
      }

      .hero-main h2 {
        max-width: 780px;
        margin: 0;
        font-size: clamp(2rem, 4vw, 4.7rem);
        line-height: 0.98;
        letter-spacing: 0;
      }

      .hero-main p {
        max-width: 700px;
        margin: 18px 0 0;
        color: rgba(255, 255, 255, 0.82);
        font-size: 1.05rem;
        line-height: 1.6;
      }

      .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 26px;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 42px;
        padding: 10px 15px;
        border-radius: 8px;
        background: var(--brand);
        color: white;
        font-weight: 800;
      }

      .btn.secondary {
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(255, 255, 255, 0.28);
      }

      .btn.light {
        background: var(--soft);
        color: var(--brand);
      }

      .btn.warning {
        background: var(--accent);
        color: #31230b;
      }

      .panel {
        border: 1px solid var(--line);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.86);
        box-shadow: 0 16px 34px rgba(77, 18, 45, 0.08);
      }

      .panel-pad {
        padding: 18px;
      }

      .client-card h3,
      .section-title h3,
      .tax-card h3,
      .drawer h3 {
        margin: 0;
        font-size: 1.05rem;
      }

      .client-card p,
      .section-title p,
      .tax-card p {
        margin: 6px 0 0;
        color: var(--muted);
        line-height: 1.45;
        font-size: 0.94rem;
      }

      .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-top: 16px;
      }

      .field {
        display: grid;
        gap: 6px;
      }

      .field.span-2 { grid-column: 1 / -1; }

      label {
        color: #41504a;
        font-size: 0.79rem;
        font-weight: 800;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }

      input, select, textarea {
        width: 100%;
        min-height: 40px;
        border: 1px solid #d7e1da;
        border-radius: 8px;
        background: #fff;
        color: var(--ink);
        padding: 9px 10px;
        outline: none;
      }

      textarea {
        min-height: 84px;
        resize: vertical;
      }

      input:focus, select:focus, textarea:focus {
        border-color: var(--brand-2);
        box-shadow: 0 0 0 3px rgba(230, 63, 134, 0.14);
      }

      .tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 16px;
      }

      .tab {
        border: 1px solid var(--line);
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.72);
        color: #43524c;
        padding: 10px 14px;
        font-weight: 800;
      }

      .tab.active {
        background: var(--brand);
        color: white;
        border-color: var(--brand);
      }

      .view { display: none; }
      .view.active { display: block; }

      .dashboard {
        display: grid;
        grid-template-columns: 310px minmax(0, 1fr);
        gap: 18px;
      }

      .sidebar {
        display: grid;
        gap: 14px;
        align-content: start;
      }

      .kpis {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
        margin-bottom: 14px;
      }

      .kpi {
        padding: 14px;
      }

      .kpi span {
        display: block;
        color: var(--muted);
        font-size: 0.82rem;
        font-weight: 800;
        text-transform: uppercase;
      }

      .kpi strong {
        display: block;
        margin-top: 6px;
        font-size: 1.45rem;
        letter-spacing: -0.02em;
      }

      .section-title {
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 14px;
        margin: 10px 0 12px;
      }

      .section-title .small {
        color: var(--muted);
        font-size: 0.88rem;
        white-space: nowrap;
      }

      .opportunity-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
      }

      .card {
        position: relative;
        overflow: hidden;
        padding: 15px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: var(--panel);
        box-shadow: 0 10px 24px rgba(77, 18, 45, 0.07);
      }

      .card::before {
        content: "";
        position: absolute;
        inset: 0 0 auto;
        height: 4px;
        background: linear-gradient(90deg, var(--brand-2), var(--accent));
      }

      .score-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 12px;
      }

      .score {
        display: inline-grid;
        place-items: center;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background: conic-gradient(var(--brand-2) calc(var(--score) * 1%), #e6eee8 0);
        color: var(--brand);
        font-weight: 900;
      }

      .score > span {
        display: grid;
        place-items: center;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: white;
      }

      .asset-tag {
        display: inline-flex;
        align-items: center;
        padding: 6px 9px;
        border-radius: 999px;
        background: var(--soft);
        color: var(--brand);
        font-weight: 900;
        font-size: 0.78rem;
        text-transform: uppercase;
      }

      .card h4 {
        margin: 0 0 6px;
        font-size: 1.02rem;
      }

      .address {
        display: block;
        color: var(--muted);
        font-size: 0.9rem;
        margin-bottom: 12px;
      }

      .metric-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
      }

      .metric {
        border-radius: 8px;
        background: #fff7fa;
        padding: 9px;
      }

      .metric span {
        display: block;
        color: var(--muted);
        font-size: 0.76rem;
      }

      .metric strong {
        display: block;
        margin-top: 3px;
        font-size: 0.96rem;
      }

      .reasons {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 12px 0;
      }

      .reason {
        border-radius: 999px;
        background: #f3f0e5;
        color: #73561b;
        padding: 5px 8px;
        font-size: 0.78rem;
        font-weight: 800;
      }

      .card-actions {
        display: flex;
        gap: 8px;
        margin-top: 12px;
      }

      .card-actions button {
        flex: 1;
        border-radius: 8px;
        padding: 9px 10px;
        font-weight: 800;
        background: var(--soft);
        color: var(--brand);
      }

      .card-actions button.primary {
        background: var(--brand);
        color: white;
      }

      .table-wrap {
        overflow-x: auto;
      }

      table {
        width: 100%;
        min-width: 860px;
        border-collapse: collapse;
      }

      th, td {
        border-bottom: 1px solid var(--line);
        padding: 12px 10px;
        text-align: left;
        vertical-align: top;
      }

      th {
        color: #50605a;
        font-size: 0.78rem;
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }

      td {
        color: #24302c;
        font-size: 0.92rem;
      }

      .rank {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: var(--brand);
        color: white;
        font-weight: 900;
      }

      .bar {
        width: 100%;
        height: 8px;
        border-radius: 999px;
        overflow: hidden;
        background: #f6dce7;
      }

      .bar span {
        display: block;
        height: 100%;
        width: calc(var(--value) * 1%);
        border-radius: inherit;
        background: linear-gradient(90deg, var(--brand-2), var(--accent));
      }

      .tax-layout {
        display: grid;
        grid-template-columns: 360px minmax(0, 1fr);
        gap: 18px;
      }

      .tax-results {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
      }

      .tax-card {
        padding: 16px;
      }

      .tax-card.recommended {
        border-color: rgba(230, 63, 134, 0.35);
        background: linear-gradient(180deg, #ffffff, #fff4f8);
      }

      .tax-score {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 10px;
        color: var(--brand);
        font-weight: 900;
      }

      .tax-score::before {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--brand-2);
      }

      .tax-list {
        display: grid;
        gap: 8px;
        padding: 0;
        margin: 12px 0 0;
        list-style: none;
      }

      .tax-list li {
        display: flex;
        gap: 8px;
        color: #34423d;
        line-height: 1.45;
      }

      .tax-list li::before {
        content: "+";
        display: inline-grid;
        flex: 0 0 19px;
        width: 19px;
        height: 19px;
        place-items: center;
        border-radius: 50%;
        background: var(--soft);
        color: var(--brand);
        font-weight: 900;
      }

      .notice {
        margin-top: 12px;
        border-left: 4px solid var(--accent);
        border-radius: 8px;
        background: #fff9e8;
        padding: 12px;
        color: #60480e;
        font-size: 0.9rem;
        line-height: 1.45;
      }

      .api-strip {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
        gap: 12px;
        margin-bottom: 14px;
      }

      .api-card {
        padding: 14px;
      }

      .api-card span {
        display: block;
        color: var(--muted);
        font-size: 0.78rem;
        font-weight: 900;
        text-transform: uppercase;
      }

      .api-card strong {
        display: block;
        margin-top: 6px;
        font-size: 1.1rem;
      }

      .api-status {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        margin-top: 8px;
        color: var(--muted);
        font-size: 0.82rem;
        font-weight: 800;
      }

      .api-status::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--accent);
      }

      .api-status.live::before { background: #2f9d6f; }
      .api-status.error::before { background: var(--danger); }

      .source-list {
        display: grid;
        gap: 8px;
        margin-top: 12px;
      }

      .source-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #fff;
        padding: 10px;
      }

      .source-row strong {
        display: block;
        font-size: 0.92rem;
      }

      .source-row span {
        color: var(--muted);
        font-size: 0.78rem;
      }

      .badge {
        flex: 0 0 auto;
        border-radius: 999px;
        background: var(--soft);
        color: var(--brand);
        padding: 5px 8px;
        font-size: 0.76rem;
        font-weight: 900;
        text-transform: uppercase;
      }

      .badge.error {
        background: #faeeee;
        color: var(--danger);
      }

      .production-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
      }

      .map-layout {
        display: grid;
        grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
        gap: 14px;
      }

      .map-board {
        position: relative;
        min-height: 520px;
        border-radius: 8px;
        overflow: hidden;
        background:
          linear-gradient(rgba(176, 24, 91, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(176, 24, 91, 0.06) 1px, transparent 1px),
          radial-gradient(circle at 40% 45%, rgba(230, 63, 134, 0.16), transparent 22rem),
          radial-gradient(circle at 68% 58%, rgba(255, 177, 93, 0.22), transparent 15rem),
          #fff;
        background-size: 42px 42px, 42px 42px, auto, auto, auto;
        border: 1px solid var(--line);
      }

      .map-point {
        position: absolute;
        left: calc(var(--x) * 1%);
        top: calc(var(--y) * 1%);
        width: calc(26px + var(--score) * 0.36px);
        height: calc(26px + var(--score) * 0.36px);
        transform: translate(-50%, -50%);
        border-radius: 999px;
        display: grid;
        place-items: center;
        color: white;
        background: linear-gradient(135deg, var(--brand-2), var(--accent));
        box-shadow: 0 12px 28px rgba(176, 24, 91, 0.24);
        font-weight: 900;
        font-size: 0.78rem;
      }

      .map-point small {
        position: absolute;
        top: calc(100% + 6px);
        left: 50%;
        transform: translateX(-50%);
        width: max-content;
        max-width: 150px;
        padding: 5px 7px;
        border-radius: 8px;
        color: var(--ink);
        background: rgba(255, 255, 255, 0.92);
        border: 1px solid var(--line);
        box-shadow: 0 8px 18px rgba(77, 18, 45, 0.08);
        font-size: 0.72rem;
        font-weight: 800;
      }

      .map-point.low {
        background: linear-gradient(135deg, #aeb7b2, #7b8b83);
      }

      .map-legend {
        display: grid;
        gap: 10px;
      }

      .map-stat {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 11px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: #fff;
      }

      .map-stat span {
        color: var(--muted);
        font-size: 0.82rem;
      }

      .map-stat strong {
        font-size: 1rem;
      }

      .drawer {
        position: fixed;
        inset: 0 0 0 auto;
        z-index: 20;
        width: min(460px, 100%);
        transform: translateX(105%);
        transition: transform 180ms ease;
        border-left: 1px solid var(--line);
        background: rgba(255, 255, 255, 0.98);
        box-shadow: -20px 0 50px rgba(77, 18, 45, 0.18);
        padding: 18px;
        overflow-y: auto;
      }

      .drawer.open {
        transform: translateX(0);
      }

      .drawer-head {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        align-items: start;
        margin-bottom: 14px;
      }

      .close {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        background: var(--soft);
        color: var(--brand);
        font-weight: 900;
      }

      .empty {
        padding: 24px;
        text-align: center;
        color: var(--muted);
      }

      .scenario-card {
        padding: 15px;
        background: #fff;
      }

      .scenario-card strong {
        display: block;
        margin-bottom: 6px;
      }

      .scenario-card p {
        margin: 0;
        color: var(--muted);
        line-height: 1.45;
      }

      @media (max-width: 1120px) {
        .hero,
        .dashboard,
        .tax-layout {
          grid-template-columns: 1fr;
        }

        .opportunity-grid,
        .production-grid,
        .tax-results {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 760px) {
        .shell {
          width: min(100% - 20px, 1480px);
          padding-top: 12px;
        }

        .topbar,
        .section-title {
          align-items: start;
          flex-direction: column;
        }

        .hero-main {
          min-height: auto;
          padding: 22px;
        }

        .form-grid,
        .kpis,
        .api-strip,
        .map-layout,
        .opportunity-grid,
        .tax-results {
          grid-template-columns: 1fr;
        }

        .field.span-2 { grid-column: auto; }
      }
    </style>
  </head>
  <body>
    <noscript>
      <div style="margin:16px auto;padding:14px;max-width:900px;border:1px solid #f0d6e1;border-radius:8px;background:#fff0f6;color:#29131d;font-family:system-ui,sans-serif">
        JavaScript est desactive dans ce visualiseur. Ouvre l'application via le serveur local avec <strong>node scripts/serve.mjs</strong> pour utiliser les onglets, les filtres et les API.
      </div>
    </noscript>
    <div class="shell">
      <header class="topbar">
        <div class="brand">
          <div class="mark">IS</div>
          <div>
            <h1>ImmoScope</h1>
            <p>Radar d'opportunites immobilieres par client, secteur et classe d'actifs.</p>
          </div>
        </div>
        <div class="top-actions">
          <button class="btn light" type="button" id="exportCsv">Exporter CSV</button>
          <button class="btn light" type="button" id="checkHealth">Test API</button>
          <div class="status-pill"><span class="status-dot"></span><span id="statusText">Mode production API</span></div>
        </div>
      </header>

      <section class="hero">
        <div class="hero-main">
          <h2>Trouver vite les actifs qui collent vraiment au mandat client.</h2>
          <p>Renseigne les criteres du client, compare les opportunites, visualise le score de compatibilite et enrichis l'analyse avec des API publiques : geocodage, DVF, donnees economiques et taux financiers.</p>
          <div class="hero-actions">
            <button class="btn warning" type="button" data-scroll="#app">Lancer l'analyse</button>
            <button class="btn secondary" type="button" data-scroll="#fiscalite">Voir fiscalite</button>
          </div>
        </div>

        <aside class="panel panel-pad client-card">
          <h3>Recherche client</h3>
          <p>Le scoring se met a jour automatiquement a chaque changement.</p>
          <form id="clientForm" class="form-grid">
            <div class="field span-2">
              <label for="clientName">Client</label>
              <input id="clientName" name="clientName" value="Investisseur prive - Bordeaux" autocomplete="off">
            </div>
            <div class="field">
              <label for="sector">Secteur cible</label>
              <input id="sector" name="sector" value="Bordeaux" autocomplete="off">
            </div>
            <div class="field">
              <label for="assetClass">Classe d'actifs</label>
              <select id="assetClass" name="assetClass">
                <option value="all">Toutes</option>
                <option value="Bureaux">Bureaux</option>
                <option value="Commerce">Commerce</option>
                <option value="Logistique">Logistique</option>
                <option value="Residentiel" selected>Residentiel</option>
                <option value="Terrain">Terrain</option>
                <option value="Hotellerie">Hotellerie</option>
              </select>
            </div>
            <div class="field">
              <label for="budget">Budget max</label>
              <input id="budget" name="budget" type="number" min="100000" step="50000" value="950000">
            </div>
            <div class="field">
              <label for="yieldTarget">Rendement cible</label>
              <input id="yieldTarget" name="yieldTarget" type="number" min="1" max="15" step="0.1" value="6.0">
            </div>
            <div class="field">
              <label for="strategy">Strategie</label>
              <select id="strategy" name="strategy">
                <option value="Rendement">Rendement</option>
                <option value="Valorisation">Valorisation</option>
                <option value="Patrimonial">Patrimonial</option>
                <option value="Developpement">Developpement</option>
              </select>
            </div>
            <div class="field">
              <label for="risk">Tolerance risque</label>
              <select id="risk" name="risk">
                <option value="2">Prudente</option>
                <option value="3" selected>Equilibree</option>
                <option value="4">Dynamique</option>
                <option value="5">Opportuniste</option>
              </select>
            </div>
          </form>
        </aside>
      </section>

      <main id="app">
        <nav class="tabs" aria-label="Navigation de l'application">
          <button class="tab active" type="button" data-tab="analyse">Analyse opportunites</button>
          <button class="tab" type="button" data-tab="comparatif">Comparatif detaille</button>
          <button class="tab" type="button" data-tab="live">Donnees live</button>
          <button class="tab" type="button" data-tab="carte">Carte marche</button>
          <button class="tab" type="button" data-tab="fiscalite" id="fiscalite">Fiscalite</button>
          <button class="tab" type="button" data-tab="ajout">Ajouter un actif</button>
        </nav>

        <section class="view active" data-view="analyse">
          <div class="dashboard">
            <aside class="sidebar">
              <div class="panel panel-pad">
                <h3>Filtres rapides</h3>
                <div class="form-grid">
                  <div class="field span-2">
                    <label for="searchText">Mot-cle</label>
                    <input id="searchText" placeholder="ex: gare, travaux, prime">
                  </div>
                  <div class="field">
                    <label for="maxVacancy">Vacance max</label>
                    <select id="maxVacancy">
                      <option value="100">Tous</option>
                      <option value="10">10%</option>
                      <option value="20">20%</option>
                      <option value="35">35%</option>
                    </select>
                  </div>
                  <div class="field">
                    <label for="minScore">Score min</label>
                    <select id="minScore">
                      <option value="0">Tous</option>
                      <option value="60">60+</option>
                      <option value="70">70+</option>
                      <option value="80">80+</option>
                    </select>
                  </div>
                  <div class="field span-2">
                    <button class="btn light" type="button" id="resetFilters">Reinitialiser les filtres</button>
                  </div>
                </div>
              </div>

              <div class="panel panel-pad">
                <h3>Lecture du score</h3>
                <p>Le score combine budget, secteur, classe d'actifs, rendement, risque, liquidite, vacance et potentiel de valorisation.</p>
                <div class="notice">Mode production : les donnees publiques alimentent le contexte marche. Les donnees confidentielles client et les offres commerciales doivent rester verifiees avant diffusion.</div>
              </div>

              <div class="panel panel-pad">
                <h3>API marche</h3>
                <p id="livePreview">Connexion aux sources publiques en cours...</p>
                <button class="btn light" type="button" id="refreshLive" style="margin-top:12px;width:100%">Rafraichir les API</button>
              </div>
            </aside>

            <section>
              <div class="kpis" id="kpis"></div>
              <div class="section-title">
                <div>
                  <h3>Meilleures opportunites</h3>
                  <p id="resultCaption">Classement automatique selon le mandat.</p>
                </div>
                <span class="small" id="countLabel"></span>
              </div>
              <div class="opportunity-grid" id="cards"></div>
            </section>
          </div>
        </section>

        <section class="view" data-view="live">
          <div class="panel panel-pad">
            <div class="section-title">
              <div>
                <h3>Connecteurs API production</h3>
                <p id="liveCaption">Sources publiques et connecteurs prets pour API privees.</p>
              </div>
              <button class="btn" type="button" id="refreshLiveMain">Rafraichir maintenant</button>
            </div>
            <div class="api-strip" id="apiStrip"></div>
            <div class="production-grid">
              <div class="panel panel-pad">
                <h3>Sources interrogees</h3>
                <div class="source-list" id="sourceList"></div>
              </div>
              <div class="panel panel-pad">
                <h3>Lecture decisionnelle</h3>
                <div id="productionSignals" class="source-list"></div>
              </div>
            </div>
            <div class="notice">Pour une vraie commercialisation : brancher ensuite une API d'annonces/off-market, un CRM, une base D1 persistante, et un controle d'acces utilisateur. Le socle API est deja pret cote serveur.</div>
          </div>
        </section>

        <section class="view" data-view="comparatif">
          <div class="panel panel-pad">
            <div class="section-title">
              <div>
                <h3>Comparatif detaille</h3>
                <p>Vue tableau pour arbitrer les actifs et expliquer le choix au client.</p>
              </div>
              <button class="btn light" type="button" id="copySummary">Generer synthese</button>
            </div>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Rang</th>
                    <th>Actif</th>
                    <th>Classe</th>
                    <th>Prix</th>
                    <th>Rendement</th>
                    <th>Risque</th>
                    <th>Liquidite</th>
                    <th>Score</th>
                    <th>Angle client</th>
                  </tr>
                </thead>
                <tbody id="compareRows"></tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="view" data-view="carte">
          <div class="panel panel-pad">
            <div class="section-title">
              <div>
                <h3>Carte marche</h3>
                <p>Positionnement relatif des actifs : plus le cercle est grand, plus le score client est fort.</p>
              </div>
              <button class="btn light" type="button" id="focusTopAsset">Centrer le meilleur actif</button>
            </div>
            <div class="map-layout">
              <div class="map-board" id="mapCanvas" aria-label="Carte simplifiee des opportunites"></div>
              <aside class="map-legend" id="mapStats"></aside>
            </div>
          </div>
        </section>

        <section class="view" data-view="fiscalite">
          <div class="tax-layout">
            <aside class="panel panel-pad">
              <h3>Profil fiscal</h3>
              <p>Choisis le contexte pour prioriser les pistes d'optimisation.</p>
              <div class="form-grid">
                <div class="field span-2">
                  <label for="taxAsset">Actif vise</label>
                  <select id="taxAsset">
                    <option value="best">Meilleur actif score</option>
                  </select>
                </div>
                <div class="field">
                  <label for="taxProfile">Acheteur</label>
                  <select id="taxProfile">
                    <option value="particulier">Particulier</option>
                    <option value="societe">Societe</option>
                    <option value="famille">Famille / transmission</option>
                  </select>
                </div>
                <div class="field">
                  <label for="taxRental">Mode locatif</label>
                  <select id="taxRental">
                    <option value="nue">Location nue</option>
                    <option value="meublee">Location meublee</option>
                    <option value="commerciale">Bail commercial</option>
                  </select>
                </div>
                <div class="field">
                  <label for="taxWorks">Travaux</label>
                  <select id="taxWorks">
                    <option value="faibles">Faibles</option>
                    <option value="moyens">Moyens</option>
                    <option value="lourds">Lourds</option>
                  </select>
                </div>
                <div class="field">
                  <label for="taxHold">Horizon</label>
                  <select id="taxHold">
                    <option value="court">0-5 ans</option>
                    <option value="moyen" selected>5-10 ans</option>
                    <option value="long">10 ans et +</option>
                  </select>
                </div>
              </div>
              <div class="notice">References de base : regimes fonciers, location meublee, SCI IR/IS et plus-values. A valider selon la situation exacte, le financement et la detention.</div>
            </aside>

            <section>
              <div class="section-title">
                <div>
                  <h3>Pistes fiscales a etudier</h3>
                  <p id="taxCaption">Recommandations dynamiques selon le profil.</p>
                </div>
              </div>
              <div class="tax-results" id="taxResults"></div>
            </section>
          </div>
        </section>

        <section class="view" data-view="ajout">
          <div class="panel panel-pad">
            <div class="section-title">
              <div>
                <h3>Ajouter une opportunite</h3>
                <p>Entre un actif repere sur ton secteur. Il sera integre au scoring de la session.</p>
              </div>
            </div>
            <form id="assetForm" class="form-grid">
              <div class="field">
                <label for="newName">Nom de l'actif</label>
                <input id="newName" required placeholder="Ex: Plateau bureaux Bassins a flot">
              </div>
              <div class="field">
                <label for="newSector">Secteur</label>
                <input id="newSector" required placeholder="Bordeaux">
              </div>
              <div class="field">
                <label for="newClass">Classe</label>
                <select id="newClass">
                  <option>Bureaux</option>
                  <option>Commerce</option>
                  <option>Logistique</option>
                  <option>Residentiel</option>
                  <option>Terrain</option>
                  <option>Hotellerie</option>
                </select>
              </div>
              <div class="field">
                <label for="newPrice">Prix</label>
                <input id="newPrice" type="number" min="50000" step="10000" value="950000">
              </div>
              <div class="field">
                <label for="newSurface">Surface m2</label>
                <input id="newSurface" type="number" min="20" step="10" value="520">
              </div>
              <div class="field">
                <label for="newYield">Rendement %</label>
                <input id="newYield" type="number" min="1" max="15" step="0.1" value="6.2">
              </div>
              <div class="field">
                <label for="newVacancy">Vacance %</label>
                <input id="newVacancy" type="number" min="0" max="100" step="1" value="8">
              </div>
              <div class="field">
                <label for="newRisk">Risque 1-5</label>
                <input id="newRisk" type="number" min="1" max="5" step="1" value="3">
              </div>
              <div class="field span-2">
                <label for="newNotes">Notes</label>
                <textarea id="newNotes" placeholder="Locataire en place, travaux, proximite transport, potentiel division..."></textarea>
              </div>
              <div class="field span-2">
                <button class="btn" type="submit">Ajouter et recalculer</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>

    <aside class="drawer" id="drawer" aria-live="polite">
      <div class="drawer-head">
        <div>
          <h3 id="drawerTitle">Detail opportunite</h3>
          <p id="drawerSubtitle"></p>
        </div>
        <button class="close" type="button" id="closeDrawer">X</button>
      </div>
      <div id="drawerBody"></div>
    </aside>

    <script>
      const opportunities = [
        {
          id: 1,
          name: "Bureaux divisibles - Bordeaux Euratlantique",
          sector: "Bordeaux",
          assetClass: "Bureaux",
          price: 1420000,
          surface: 820,
          yield: 6.1,
          vacancy: 8,
          growth: 8,
          liquidity: 8,
          risk: 3,
          works: 14,
          lat: 44.8357,
          lon: -0.5498,
          strategy: "Rendement",
          notes: "Adresse tertiaire lisible, divisibilite en petits lots et demande PME."
        },
        {
          id: 2,
          name: "Cellule logistique - Pessac Bersol",
          sector: "Pessac",
          assetClass: "Logistique",
          price: 1650000,
          surface: 1250,
          yield: 7.2,
          vacancy: 4,
          growth: 7,
          liquidity: 7,
          risk: 3,
          works: 8,
          lat: 44.7914,
          lon: -0.6367,
          strategy: "Rendement",
          notes: "Acces rocade, format rare, locataire industriel deja en place."
        },
        {
          id: 3,
          name: "Commerce pied d'immeuble - Chartrons",
          sector: "Bordeaux",
          assetClass: "Commerce",
          price: 790000,
          surface: 210,
          yield: 5.4,
          vacancy: 0,
          growth: 7,
          liquidity: 8,
          risk: 2,
          works: 5,
          lat: 44.8562,
          lon: -0.5687,
          strategy: "Patrimonial",
          notes: "Emplacement prime, bail solide, rendement plus faible mais actif defensif."
        },
        {
          id: 4,
          name: "Immeuble mixte a restructurer - La Rochelle",
          sector: "La Rochelle",
          assetClass: "Residentiel",
          price: 1180000,
          surface: 540,
          yield: 4.8,
          vacancy: 22,
          growth: 9,
          liquidity: 7,
          risk: 4,
          works: 35,
          lat: 46.1603,
          lon: -1.1511,
          strategy: "Valorisation",
          notes: "Creation de valeur par travaux, division et remise au marche locatif."
        },
        {
          id: 5,
          name: "Terrain activite - Merignac",
          sector: "Merignac",
          assetClass: "Terrain",
          price: 680000,
          surface: 1900,
          yield: 0,
          vacancy: 100,
          growth: 9,
          liquidity: 6,
          risk: 5,
          works: 0,
          lat: 44.8371,
          lon: -0.6948,
          strategy: "Developpement",
          notes: "Potentiel promotion ou cle en main utilisateur, risque autorisations."
        },
        {
          id: 6,
          name: "Residence coliving - Talence",
          sector: "Talence",
          assetClass: "Residentiel",
          price: 1540000,
          surface: 610,
          yield: 6.7,
          vacancy: 12,
          growth: 8,
          liquidity: 7,
          risk: 4,
          works: 18,
          lat: 44.8083,
          lon: -0.5898,
          strategy: "Rendement",
          notes: "Cible etudiante et jeunes actifs, gestion plus intensive mais revenus diversifies."
        },
        {
          id: 7,
          name: "Hotel bureau transformable - Bayonne",
          sector: "Bayonne",
          assetClass: "Hotellerie",
          price: 1750000,
          surface: 960,
          yield: 6.4,
          vacancy: 18,
          growth: 7,
          liquidity: 5,
          risk: 4,
          works: 24,
          lat: 43.4929,
          lon: -1.4748,
          strategy: "Valorisation",
          notes: "Scenario hotelier ou reconversion, sujet exploitation a expertiser."
        },
        {
          id: 8,
          name: "Retail park compact - Angouleme",
          sector: "Angouleme",
          assetClass: "Commerce",
          price: 1260000,
          surface: 740,
          yield: 7.5,
          vacancy: 6,
          growth: 5,
          liquidity: 6,
          risk: 3,
          works: 9,
          lat: 45.6484,
          lon: 0.1562,
          strategy: "Rendement",
          notes: "Rendement eleve, dependance a la qualite des enseignes et de la zone."
        }
      ];

      opportunities.push(
        {
          id: 101,
          name: "T2 renove - Bordeaux Saint-Michel",
          sector: "Bordeaux Saint-Michel",
          assetClass: "Residentiel",
          price: 238000,
          surface: 43,
          yield: 5.8,
          vacancy: 3,
          growth: 7,
          liquidity: 9,
          risk: 2,
          works: 4,
          lat: 44.8326,
          lon: -0.5677,
          strategy: "Rendement",
          notes: "Appartement T2 proche tram, locataire jeune actif, faible vacance et revente liquide."
        },
        {
          id: 102,
          name: "Studio meuble - Victoire",
          sector: "Bordeaux Victoire",
          assetClass: "Residentiel",
          price: 152000,
          surface: 24,
          yield: 6.4,
          vacancy: 2,
          growth: 6,
          liquidity: 9,
          risk: 2,
          works: 3,
          lat: 44.8302,
          lon: -0.5731,
          strategy: "Rendement",
          notes: "Produit etudiant compact, location meublee possible, ticket d'entree faible."
        },
        {
          id: 103,
          name: "T3 balcon - Bordeaux Bastide",
          sector: "Bordeaux Bastide",
          assetClass: "Residentiel",
          price: 326000,
          surface: 67,
          yield: 5.1,
          vacancy: 5,
          growth: 8,
          liquidity: 8,
          risk: 3,
          works: 6,
          lat: 44.8427,
          lon: -0.5484,
          strategy: "Patrimonial",
          notes: "Quartier en valorisation, balcon, cible couple ou colocation calme."
        },
        {
          id: 104,
          name: "Maison echoppe - Bordeaux Nansouty",
          sector: "Bordeaux Nansouty",
          assetClass: "Residentiel",
          price: 612000,
          surface: 118,
          yield: 4.2,
          vacancy: 4,
          growth: 8,
          liquidity: 8,
          risk: 3,
          works: 16,
          lat: 44.8199,
          lon: -0.5794,
          strategy: "Patrimonial",
          notes: "Echoppe familiale, jardin, travaux de rafraichissement, actif patrimonial."
        },
        {
          id: 105,
          name: "Immeuble 4 lots - Bordeaux Capucins",
          sector: "Bordeaux Capucins",
          assetClass: "Residentiel",
          price: 735000,
          surface: 186,
          yield: 6.2,
          vacancy: 7,
          growth: 7,
          liquidity: 7,
          risk: 4,
          works: 22,
          lat: 44.8291,
          lon: -0.5661,
          strategy: "Rendement",
          notes: "Immeuble de rapport avec potentiel de revalorisation des loyers apres travaux."
        },
        {
          id: 106,
          name: "T4 colocation - Bordeaux Saint-Genies",
          sector: "Bordeaux Saint-Genies",
          assetClass: "Residentiel",
          price: 448000,
          surface: 91,
          yield: 6.1,
          vacancy: 4,
          growth: 6,
          liquidity: 8,
          risk: 3,
          works: 10,
          lat: 44.8248,
          lon: -0.5952,
          strategy: "Rendement",
          notes: "Plan adapte colocation trois chambres, proche transports et campus."
        },
        {
          id: 107,
          name: "T2 dernier etage - Chartrons",
          sector: "Bordeaux Chartrons",
          assetClass: "Residentiel",
          price: 286000,
          surface: 48,
          yield: 4.9,
          vacancy: 3,
          growth: 8,
          liquidity: 9,
          risk: 2,
          works: 5,
          lat: 44.8569,
          lon: -0.5719,
          strategy: "Patrimonial",
          notes: "Adresse recherchee, dernier etage, bonne liquidite a la revente."
        },
        {
          id: 108,
          name: "Plateau a diviser - Bordeaux Belcier",
          sector: "Bordeaux Belcier",
          assetClass: "Residentiel",
          price: 524000,
          surface: 132,
          yield: 5.7,
          vacancy: 18,
          growth: 9,
          liquidity: 7,
          risk: 4,
          works: 30,
          lat: 44.8257,
          lon: -0.5486,
          strategy: "Valorisation",
          notes: "Scenario division en deux logements, travaux lourds mais forte creation de valeur."
        },
        {
          id: 109,
          name: "T1 bis - Bordeaux Hotel de Ville",
          sector: "Bordeaux Hotel de Ville",
          assetClass: "Residentiel",
          price: 198000,
          surface: 31,
          yield: 5.3,
          vacancy: 2,
          growth: 6,
          liquidity: 9,
          risk: 2,
          works: 2,
          lat: 44.8373,
          lon: -0.5786,
          strategy: "Rendement",
          notes: "Petit actif central, demande locative profonde, faibles travaux."
        },
        {
          id: 110,
          name: "Maison avec dependance - Bordeaux Cauderan",
          sector: "Bordeaux Cauderan",
          assetClass: "Residentiel",
          price: 845000,
          surface: 162,
          yield: 3.9,
          vacancy: 5,
          growth: 8,
          liquidity: 7,
          risk: 3,
          works: 18,
          lat: 44.8522,
          lon: -0.6221,
          strategy: "Patrimonial",
          notes: "Maison familiale, dependance exploitable, cible patrimoniale long terme."
        },
        {
          id: 111,
          name: "T3 terrasse - Bordeaux Bacalan",
          sector: "Bordeaux Bacalan",
          assetClass: "Residentiel",
          price: 348000,
          surface: 72,
          yield: 5.4,
          vacancy: 6,
          growth: 8,
          liquidity: 8,
          risk: 3,
          works: 7,
          lat: 44.8713,
          lon: -0.5509,
          strategy: "Rendement",
          notes: "Secteur Bassins a flot, terrasse, potentiel de valorisation quartier."
        },
        {
          id: 112,
          name: "T2 travaux - Bordeaux Ornano",
          sector: "Bordeaux Ornano",
          assetClass: "Residentiel",
          price: 214000,
          surface: 46,
          yield: 6.0,
          vacancy: 12,
          growth: 8,
          liquidity: 8,
          risk: 3,
          works: 20,
          lat: 44.8318,
          lon: -0.5902,
          strategy: "Valorisation",
          notes: "Decote travaux, bon emplacement, revente ou location apres renovation."
        },
        {
          id: 113,
          name: "Lot de deux studios - Bordeaux Pey Berland",
          sector: "Bordeaux Pey Berland",
          assetClass: "Residentiel",
          price: 318000,
          surface: 52,
          yield: 6.3,
          vacancy: 3,
          growth: 6,
          liquidity: 8,
          risk: 3,
          works: 8,
          lat: 44.8371,
          lon: -0.5774,
          strategy: "Rendement",
          notes: "Deux petites surfaces, mutualisation du risque locatif, cible etudiante."
        },
        {
          id: 114,
          name: "T5 familial - Bordeaux Saint-Augustin",
          sector: "Bordeaux Saint-Augustin",
          assetClass: "Residentiel",
          price: 558000,
          surface: 112,
          yield: 4.6,
          vacancy: 4,
          growth: 7,
          liquidity: 8,
          risk: 2,
          works: 9,
          lat: 44.8314,
          lon: -0.6086,
          strategy: "Patrimonial",
          notes: "Grand appartement familial, secteur hospitalier et tram, risque locatif faible."
        },
        {
          id: 115,
          name: "Immeuble 3 lots - Bordeaux Saint-Seurin",
          sector: "Bordeaux Saint-Seurin",
          assetClass: "Residentiel",
          price: 925000,
          surface: 218,
          yield: 5.6,
          vacancy: 8,
          growth: 7,
          liquidity: 7,
          risk: 4,
          works: 18,
          lat: 44.8455,
          lon: -0.5897,
          strategy: "Rendement",
          notes: "Trois lots louables, adresse premium, optimisation locative possible."
        },
        {
          id: 116,
          name: "T2 parking - Bordeaux Meriadeck",
          sector: "Bordeaux Meriadeck",
          assetClass: "Residentiel",
          price: 246000,
          surface: 44,
          yield: 5.5,
          vacancy: 3,
          growth: 6,
          liquidity: 8,
          risk: 2,
          works: 4,
          lat: 44.8387,
          lon: -0.5868,
          strategy: "Rendement",
          notes: "Parking inclus, emplacement central, produit facile a louer."
        },
        {
          id: 117,
          name: "Maison a optimiser - Bordeaux La Bastide",
          sector: "Bordeaux La Bastide",
          assetClass: "Residentiel",
          price: 498000,
          surface: 104,
          yield: 4.8,
          vacancy: 10,
          growth: 9,
          liquidity: 8,
          risk: 4,
          works: 26,
          lat: 44.8444,
          lon: -0.5445,
          strategy: "Valorisation",
          notes: "Possibilite extension et renovation energetique, quartier en transformation."
        },
        {
          id: 118,
          name: "T3 lumineux - Bordeaux Jardin Public",
          sector: "Bordeaux Jardin Public",
          assetClass: "Residentiel",
          price: 472000,
          surface: 78,
          yield: 4.4,
          vacancy: 2,
          growth: 8,
          liquidity: 9,
          risk: 2,
          works: 6,
          lat: 44.8506,
          lon: -0.5762,
          strategy: "Patrimonial",
          notes: "Actif prime, tres bonne liquidite, rendement plus faible mais risque limite."
        },
        {
          id: 119,
          name: "T2 meuble - Talence Forum",
          sector: "Talence",
          assetClass: "Residentiel",
          price: 212000,
          surface: 39,
          yield: 6.2,
          vacancy: 3,
          growth: 6,
          liquidity: 8,
          risk: 2,
          works: 5,
          lat: 44.8084,
          lon: -0.5891,
          strategy: "Rendement",
          notes: "Proche tram et campus, location meublee etudiante tres lisible."
        },
        {
          id: 120,
          name: "Maison coliving - Talence Thouars",
          sector: "Talence",
          assetClass: "Residentiel",
          price: 685000,
          surface: 176,
          yield: 6.8,
          vacancy: 9,
          growth: 7,
          liquidity: 7,
          risk: 4,
          works: 24,
          lat: 44.7908,
          lon: -0.5905,
          strategy: "Rendement",
          notes: "Six chambres possibles, rendement eleve, gestion operationnelle a cadrer."
        },
        {
          id: 121,
          name: "T3 recent - Pessac Centre",
          sector: "Pessac",
          assetClass: "Residentiel",
          price: 318000,
          surface: 69,
          yield: 5.2,
          vacancy: 4,
          growth: 6,
          liquidity: 8,
          risk: 2,
          works: 2,
          lat: 44.8052,
          lon: -0.6321,
          strategy: "Patrimonial",
          notes: "Residence recente, proche tram B, charges maitrisees."
        },
        {
          id: 122,
          name: "Maison avec jardin - Pessac Alouette",
          sector: "Pessac",
          assetClass: "Residentiel",
          price: 445000,
          surface: 112,
          yield: 4.7,
          vacancy: 5,
          growth: 7,
          liquidity: 8,
          risk: 3,
          works: 12,
          lat: 44.7928,
          lon: -0.6612,
          strategy: "Patrimonial",
          notes: "Maison familiale proche services, potentiel renovation douce."
        },
        {
          id: 123,
          name: "T2 aeroport - Merignac",
          sector: "Merignac",
          assetClass: "Residentiel",
          price: 198000,
          surface: 42,
          yield: 5.9,
          vacancy: 4,
          growth: 6,
          liquidity: 7,
          risk: 3,
          works: 6,
          lat: 44.8385,
          lon: -0.6551,
          strategy: "Rendement",
          notes: "Demande salaries zone aeroportuaire, ticket accessible."
        },
        {
          id: 124,
          name: "Maison divisible - Merignac Arlac",
          sector: "Merignac",
          assetClass: "Residentiel",
          price: 575000,
          surface: 142,
          yield: 5.4,
          vacancy: 8,
          growth: 8,
          liquidity: 7,
          risk: 4,
          works: 25,
          lat: 44.8257,
          lon: -0.6314,
          strategy: "Valorisation",
          notes: "Division ou colocation possible, travaux a chiffrer, bon acces tram."
        },
        {
          id: 125,
          name: "Immeuble ancien - Cenon bas",
          sector: "Bordeaux Rive Droite",
          assetClass: "Residentiel",
          price: 648000,
          surface: 172,
          yield: 6.5,
          vacancy: 12,
          growth: 8,
          liquidity: 7,
          risk: 4,
          works: 28,
          lat: 44.8578,
          lon: -0.5314,
          strategy: "Valorisation",
          notes: "Rive droite, decote travaux, potentiel trois ou quatre lots."
        },
        {
          id: 126,
          name: "T4 rive droite - Floirac",
          sector: "Bordeaux Rive Droite",
          assetClass: "Residentiel",
          price: 286000,
          surface: 81,
          yield: 5.8,
          vacancy: 7,
          growth: 7,
          liquidity: 7,
          risk: 3,
          works: 9,
          lat: 44.8356,
          lon: -0.5248,
          strategy: "Rendement",
          notes: "Grand logement familial, prix au m2 encore contenu, bassin locatif actif."
        },
        {
          id: 127,
          name: "T2 vieux port - La Rochelle",
          sector: "La Rochelle",
          assetClass: "Residentiel",
          price: 342000,
          surface: 46,
          yield: 4.8,
          vacancy: 3,
          growth: 8,
          liquidity: 9,
          risk: 2,
          works: 6,
          lat: 46.1586,
          lon: -1.1518,
          strategy: "Patrimonial",
          notes: "Emplacement rare, forte liquidite, arbitrage location classique ou meublee."
        },
        {
          id: 128,
          name: "Maison a renover - La Rochelle Laleu",
          sector: "La Rochelle",
          assetClass: "Residentiel",
          price: 515000,
          surface: 128,
          yield: 4.9,
          vacancy: 11,
          growth: 8,
          liquidity: 8,
          risk: 4,
          works: 30,
          lat: 46.1698,
          lon: -1.1965,
          strategy: "Valorisation",
          notes: "Maison avec jardin, renovation lourde, fort potentiel apres travaux."
        }
      );

      const form = document.querySelector("#clientForm");
      const cards = document.querySelector("#cards");
      const compareRows = document.querySelector("#compareRows");
      const kpis = document.querySelector("#kpis");
      const countLabel = document.querySelector("#countLabel");
      const resultCaption = document.querySelector("#resultCaption");
      const taxResults = document.querySelector("#taxResults");
      const taxAsset = document.querySelector("#taxAsset");
      const drawer = document.querySelector("#drawer");
      const drawerTitle = document.querySelector("#drawerTitle");
      const drawerSubtitle = document.querySelector("#drawerSubtitle");
      const drawerBody = document.querySelector("#drawerBody");
      const apiStrip = document.querySelector("#apiStrip");
      const sourceList = document.querySelector("#sourceList");
      const livePreview = document.querySelector("#livePreview");
      const liveCaption = document.querySelector("#liveCaption");
      const productionSignals = document.querySelector("#productionSignals");
      const mapCanvas = document.querySelector("#mapCanvas");
      const mapStats = document.querySelector("#mapStats");
      const demoMarketDb = {
        bordeaux: { label: "Bordeaux (33000)", city: "Bordeaux", citycode: "33063", population: 261804, surface: 49.36, establishments: 47820, avgPriceSqm: 4870, transactionCount: 842, latestMutation: "2025-12-18", rentPrime: 265, vacancyOffice: 7.8, liquidity: "forte" },
        pessac: { label: "Pessac (33600)", city: "Pessac", citycode: "33318", population: 66920, surface: 38.82, establishments: 9080, avgPriceSqm: 3740, transactionCount: 316, latestMutation: "2025-11-27", rentPrime: 178, vacancyOffice: 9.4, liquidity: "bonne" },
        merignac: { label: "Merignac (33700)", city: "Merignac", citycode: "33281", population: 75635, surface: 48.17, establishments: 11940, avgPriceSqm: 3920, transactionCount: 364, latestMutation: "2025-12-09", rentPrime: 185, vacancyOffice: 8.9, liquidity: "bonne" },
        talence: { label: "Talence (33400)", city: "Talence", citycode: "33522", population: 44487, surface: 8.35, establishments: 4875, avgPriceSqm: 4460, transactionCount: 221, latestMutation: "2025-12-04", rentPrime: 192, vacancyOffice: 6.6, liquidity: "forte" },
        "la rochelle": { label: "La Rochelle (17000)", city: "La Rochelle", citycode: "17300", population: 77361, surface: 28.43, establishments: 11120, avgPriceSqm: 5280, transactionCount: 392, latestMutation: "2025-12-12", rentPrime: 205, vacancyOffice: 5.8, liquidity: "forte" },
        bayonne: { label: "Bayonne (64100)", city: "Bayonne", citycode: "64102", population: 53200, surface: 21.68, establishments: 7430, avgPriceSqm: 4590, transactionCount: 288, latestMutation: "2025-11-21", rentPrime: 186, vacancyOffice: 6.9, liquidity: "bonne" },
        angouleme: { label: "Angouleme (16000)", city: "Angouleme", citycode: "16015", population: 41597, surface: 21.85, establishments: 4820, avgPriceSqm: 2140, transactionCount: 176, latestMutation: "2025-10-30", rentPrime: 128, vacancyOffice: 11.8, liquidity: "moyenne" }
      };
      let liveMarket = null;
      let liveTimer = null;

      function euros(value) {
        return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
      }

      function number(value, suffix) {
        return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 1 }).format(value) + (suffix || "");
      }

      function cleanText(value) {
        return String(value || "").replace(/[<>]/g, "").trim();
      }

      function csvCell(value) {
        return '"' + String(value == null ? "" : value).replace(/"/g, '""') + '"';
      }

      function formatApiDate(value) {
        if (!value) return "date inconnue";
        try {
          return new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
        } catch (error) {
          return value;
        }
      }

      function normalizeDemoName(value) {
        return String(value || "").trim().toLowerCase().normalize("NFD").replace(/[^a-z0-9 ]/g, "");
      }

      function findDemoMarket(sector) {
        const key = normalizeDemoName(sector || "Bordeaux");
        return demoMarketDb[key] || Object.values(demoMarketDb).find((item) => {
          const city = normalizeDemoName(item.city);
          return city.includes(key) || key.includes(city);
        }) || demoMarketDb.bordeaux;
      }

      function buildDemoMarketPayload(reason) {
        const criteria = getCriteria();
        const commune = findDemoMarket(document.querySelector("#sector").value);
        const mortgageRate = 3.36;
        return {
          generatedAt: new Date().toISOString(),
          mode: "demo-db",
          query: { sector: commune.city, assetClass: criteria.assetClass, budget: criteria.budget, yieldTarget: criteria.yieldTarget },
          location: { status: "demo-db", label: commune.label, city: commune.city, citycode: commune.citycode },
          realEstate: {
            status: "demo-db",
            transactionsStatus: "demo-db",
            datasetLabel: "Base DVF locale - millesime 2026",
            lastUpdate: "2026-06-01T08:00:00.000Z",
            transactionCount: commune.transactionCount,
            avgPriceSqm: commune.avgPriceSqm,
            sampleSize: Math.round(commune.transactionCount * 0.72),
            latestMutation: commune.latestMutation,
            rentPrime: commune.rentPrime,
            vacancyOffice: commune.vacancyOffice,
            transactionWarning: "Base fictive de presentation : chiffres coherents, non opposables juridiquement."
          },
          demographics: { status: "demo-db", provider: "Base INSEE locale", population: commune.population, surface: commune.surface, density: Math.round(commune.population / commune.surface), citycode: commune.citycode },
          finance: { status: "demo-db", mortgageRate: { value: mortgageRate, period: "T1 2026", label: "Taux de reference presentation" } },
          economy: { status: "demo-db", establishmentsLabel: commune.establishments.toLocaleString("fr-FR") + " etablissements", totalResults: commune.establishments, liquidity: commune.liquidity },
          sources: [
            { name: "Base DVF locale", status: "demo-db", detail: commune.transactionCount + " mutations simulees", url: "local://fake-dvf" },
            { name: "Base INSEE locale", status: "demo-db", detail: commune.population.toLocaleString("fr-FR") + " habitants", url: "local://fake-insee" },
            { name: "Fallback Vercel", status: "demo-db", detail: reason || "API publique indisponible", url: "local://fallback" }
          ],
          suggestions: [
            "Mode presentation actif : donnees locales coherentes meme si les API publiques ne chargent pas.",
            "Prix moyen fictif observe : " + commune.avgPriceSqm.toLocaleString("fr-FR") + " EUR/m2.",
            "Liquidite marche " + commune.liquidity + " et vacance bureaux estimee a " + commune.vacancyOffice.toString().replace(".", ",") + " %."
          ]
        };
      }

      function getCriteria() {
        return {
          sector: document.querySelector("#sector").value.trim().toLowerCase(),
          assetClass: document.querySelector("#assetClass").value,
          budget: Number(document.querySelector("#budget").value || 0),
          yieldTarget: Number(document.querySelector("#yieldTarget").value || 0),
          strategy: document.querySelector("#strategy").value,
          risk: Number(document.querySelector("#risk").value || 3),
          search: document.querySelector("#searchText").value.trim().toLowerCase(),
          maxVacancy: Number(document.querySelector("#maxVacancy").value || 100),
          minScore: Number(document.querySelector("#minScore").value || 0)
        };
      }

      function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
      }

      function scoreOpportunity(item, criteria) {
        const budgetScore = item.price <= criteria.budget ? 18 : clamp(18 - ((item.price - criteria.budget) / criteria.budget) * 28, 0, 18);
        const sectorScore = !criteria.sector || item.sector.toLowerCase().includes(criteria.sector) ? 14 : 5;
        const classScore = criteria.assetClass === "all" || item.assetClass === criteria.assetClass ? 12 : 4;
        const yieldScore = criteria.yieldTarget <= 0 ? 8 : clamp((item.yield / criteria.yieldTarget) * 14, 0, 14);
        const strategyScore = item.strategy === criteria.strategy ? 12 : (criteria.strategy === "Patrimonial" && item.risk <= 2 ? 9 : 5);
        const riskScore = clamp(12 - Math.abs(item.risk - criteria.risk) * 3, 0, 12);
        const vacancyScore = clamp(10 - item.vacancy / 5, 0, 10);
        const growthScore = item.growth;
        const liquidityScore = item.liquidity;
        const worksScore = clamp(7 - item.works / 8, 0, 7);
        const raw = budgetScore + sectorScore + classScore + yieldScore + strategyScore + riskScore + vacancyScore + growthScore + liquidityScore + worksScore;
        const score = Math.round(clamp(raw, 0, 100));
        const reasons = [];
        if (budgetScore >= 15) reasons.push("Budget compatible");
        if (sectorScore >= 12) reasons.push("Secteur cible");
        if (yieldScore >= 12) reasons.push("Rendement fort");
        if (item.vacancy <= 8) reasons.push("Vacance faible");
        if (item.growth >= 8) reasons.push("Creation de valeur");
        if (item.liquidity >= 8) reasons.push("Liquidite");
        if (item.works >= 25) reasons.push("Travaux a challenger");
        return {
          item,
          score,
          reasons,
          breakdown: {
            Budget: Math.round(budgetScore),
            Secteur: Math.round(sectorScore),
            Classe: Math.round(classScore),
            Rendement: Math.round(yieldScore),
            Strategie: Math.round(strategyScore),
            Risque: Math.round(riskScore),
            Vacance: Math.round(vacancyScore),
            Valorisation: Math.round(growthScore),
            Liquidite: Math.round(liquidityScore)
          }
        };
      }

      function getRanked() {
        const criteria = getCriteria();
        return opportunities
          .map((item) => scoreOpportunity(item, criteria))
          .filter((entry) => criteria.assetClass === "all" || entry.item.assetClass === criteria.assetClass)
          .filter((entry) => !criteria.sector || entry.item.sector.toLowerCase().includes(criteria.sector))
          .filter((entry) => !criteria.budget || entry.item.price <= criteria.budget)
          .filter((entry) => entry.item.vacancy <= criteria.maxVacancy)
          .filter((entry) => entry.score >= criteria.minScore)
          .filter((entry) => {
            if (!criteria.search) return true;
            const haystack = [entry.item.name, entry.item.sector, entry.item.assetClass, entry.item.notes, entry.item.strategy].join(" ").toLowerCase();
            return haystack.includes(criteria.search);
          })
          .sort((a, b) => b.score - a.score);
      }

      function renderKpis(ranked) {
        const best = ranked[0];
        const avgYield = ranked.length ? ranked.reduce((sum, x) => sum + x.item.yield, 0) / ranked.length : 0;
        const avgScore = ranked.length ? ranked.reduce((sum, x) => sum + x.score, 0) / ranked.length : 0;
        const maxBudget = Number(document.querySelector("#budget").value || 0);
        kpis.innerHTML = [
          ["Opportunites", ranked.length, ""],
          ["Score moyen", Math.round(avgScore), "/100"],
          ["Rendement moyen", number(avgYield, "%"), ""],
          ["Top actif", best ? best.item.assetClass : "-", ""]
        ].map((kpi) => '<div class="panel kpi"><span>' + kpi[0] + '</span><strong>' + kpi[1] + kpi[2] + '</strong></div>').join("");
        resultCaption.textContent = best ? "Top recommandation : " + best.item.name + " dans un budget max de " + euros(maxBudget) + "." : "Aucun actif ne correspond aux criteres actuels.";
      }

      function renderCards(ranked) {
        countLabel.textContent = ranked.length + " resultat(s)";
        if (!ranked.length) {
          cards.innerHTML = '<div class="panel empty">Aucun actif ne colle aux filtres. Elargis le secteur, la vacance ou le score minimum.</div>';
          return;
        }
        cards.innerHTML = ranked.map((entry, index) => {
          const item = entry.item;
          const reasons = entry.reasons.slice(0, 4).map((reason) => '<span class="reason">' + reason + '</span>').join("");
          return '<article class="card">' +
            '<div class="score-row"><span class="asset-tag">' + item.assetClass + '</span><div class="score" style="--score:' + entry.score + '"><span>' + entry.score + '</span></div></div>' +
            '<h4>' + (index + 1) + ". " + item.name + '</h4>' +
            '<span class="address">' + item.sector + ' - ' + number(item.surface, ' m2') + '</span>' +
            '<div class="metric-grid">' +
              '<div class="metric"><span>Prix</span><strong>' + euros(item.price) + '</strong></div>' +
              '<div class="metric"><span>Rendement</span><strong>' + number(item.yield, '%') + '</strong></div>' +
              '<div class="metric"><span>Vacance</span><strong>' + number(item.vacancy, '%') + '</strong></div>' +
              '<div class="metric"><span>Risque</span><strong>' + item.risk + '/5</strong></div>' +
            '</div>' +
            '<div class="reasons">' + reasons + '</div>' +
            '<div class="bar" style="--value:' + entry.score + '"><span></span></div>' +
            '<div class="card-actions"><button type="button" class="primary" data-detail="' + item.id + '">Detail</button><button type="button" data-tax="' + item.id + '">Fiscalite</button></div>' +
          '</article>';
        }).join("");
      }

      function renderMap(ranked) {
        if (!mapCanvas || !mapStats) return;
        const withCoords = ranked.filter((entry) => Number.isFinite(entry.item.lat) && Number.isFinite(entry.item.lon));
        if (!withCoords.length) {
          mapCanvas.innerHTML = '<div class="empty">Aucun actif geolocalise dans la selection.</div>';
          mapStats.innerHTML = "";
          return;
        }
        const lats = withCoords.map((entry) => entry.item.lat);
        const lons = withCoords.map((entry) => entry.item.lon);
        const minLat = Math.min(...lats);
        const maxLat = Math.max(...lats);
        const minLon = Math.min(...lons);
        const maxLon = Math.max(...lons);
        const spreadLat = Math.max(0.01, maxLat - minLat);
        const spreadLon = Math.max(0.01, maxLon - minLon);

        mapCanvas.innerHTML = withCoords.map((entry) => {
          const item = entry.item;
          const x = 8 + ((item.lon - minLon) / spreadLon) * 84;
          const y = 92 - ((item.lat - minLat) / spreadLat) * 84;
          return '<button class="map-point ' + (entry.score < 65 ? 'low' : '') + '" type="button" data-detail="' + item.id + '" style="--x:' + x.toFixed(2) + ';--y:' + y.toFixed(2) + ';--score:' + entry.score + '">' +
            entry.score +
            '<small>' + item.sector + ' - ' + item.assetClass + '</small>' +
          '</button>';
        }).join("");

        const best = ranked[0];
        const avgPrice = ranked.length ? ranked.reduce((sum, entry) => sum + entry.item.price, 0) / ranked.length : 0;
        const avgYield = ranked.length ? ranked.reduce((sum, entry) => sum + entry.item.yield, 0) / ranked.length : 0;
        mapStats.innerHTML = [
          ["Actifs affiches", withCoords.length],
          ["Top secteur", best ? best.item.sector : "-"],
          ["Budget moyen", euros(avgPrice)],
          ["Rendement moyen", number(avgYield, "%")],
          ["Lecture", "Carte relative, pas cadastrale"]
        ].map((row) => '<div class="map-stat"><span>' + row[0] + '</span><strong>' + row[1] + '</strong></div>').join("");
      }

      function renderTable(ranked) {
        compareRows.innerHTML = ranked.map((entry, index) => {
          const item = entry.item;
          return '<tr>' +
            '<td><span class="rank">' + (index + 1) + '</span></td>' +
            '<td><strong>' + item.name + '</strong><br><span class="address">' + item.sector + '</span></td>' +
            '<td>' + item.assetClass + '</td>' +
            '<td>' + euros(item.price) + '<br><span class="address">' + Math.round(item.price / item.surface) + ' EUR/m2</span></td>' +
            '<td>' + number(item.yield, '%') + '</td>' +
            '<td>' + item.risk + '/5</td>' +
            '<td>' + item.liquidity + '/10</td>' +
            '<td><strong>' + entry.score + '/100</strong><div class="bar" style="--value:' + entry.score + '"><span></span></div></td>' +
            '<td>' + item.notes + '</td>' +
          '</tr>';
        }).join("") || '<tr><td colspan="9">Aucune opportunite a afficher.</td></tr>';
      }

      function renderLiveMarket() {
        if (!liveMarket) {
          apiStrip.innerHTML = [
            ["Geocodage", "En attente", "fallback"],
            ["DVF mutations", "En attente", "fallback"],
            ["Prix DVF", "En attente", "fallback"],
            ["INSEE", "En attente", "fallback"],
            ["Taux", "En attente", "fallback"],
            ["Entreprises", "En attente", "fallback"]
          ].map(renderApiCard).join("");
          sourceList.innerHTML = '<div class="source-row"><div><strong>Chargement</strong><span>Les connecteurs API vont etre appeles cote serveur.</span></div><span class="badge">wait</span></div>';
          productionSignals.innerHTML = '<div class="source-row"><div><strong>Conseil</strong><span>Renseigne un secteur precis pour obtenir une meilleure lecture marche.</span></div><span class="badge">info</span></div>';
          return;
        }

        const location = liveMarket.location || {};
        const finance = liveMarket.finance || {};
        const realEstate = liveMarket.realEstate || {};
        const economy = liveMarket.economy || {};
        const demographics = liveMarket.demographics || {};
        const cardsData = [
          ["Geocodage", location.label || liveMarket.query.sector || "-", location.status],
          ["DVF mutations", realEstate.transactionCount != null ? realEstate.transactionCount + " ventes" : "non dispo", realEstate.transactionsStatus || realEstate.status],
          ["Prix DVF", realEstate.avgPriceSqm ? number(realEstate.avgPriceSqm, " EUR/m2") : "non dispo", realEstate.transactionsStatus || realEstate.status],
          ["INSEE", demographics.population ? new Intl.NumberFormat("fr-FR").format(demographics.population) + " hab." : "non dispo", demographics.status],
          ["Taux immo", finance.mortgageRate ? number(finance.mortgageRate.value, "%") : "-", finance.status],
          ["Entreprises", economy.establishmentsLabel || "-", economy.status]
        ];

        apiStrip.innerHTML = cardsData.map(renderApiCard).join("");
        sourceList.innerHTML = (liveMarket.sources || []).map((source) => (
          '<div class="source-row"><div><strong>' + source.name + '</strong><span>' + source.detail + '</span></div><span class="badge ' + (source.status === "error" ? "error" : "") + '">' + source.status + '</span></div>'
        )).join("");

        const signals = buildProductionSignals(liveMarket);
        productionSignals.innerHTML = signals.map((signal) => (
          '<div class="source-row"><div><strong>' + signal.title + '</strong><span>' + signal.text + '</span></div><span class="badge">' + signal.level + '</span></div>'
        )).join("");

        liveCaption.textContent = "Dernier appel API : " + formatApiDate(liveMarket.generatedAt);
        livePreview.textContent = location.label ? "Secteur reconnu : " + location.label + ". Taux de reference : " + (finance.mortgageRate ? number(finance.mortgageRate.value, "%") : "non disponible") + "." : "Les API sont configurees avec fallback. Verifie l'onglet Donnees live.";
      }

      function renderApiCard(data) {
        const status = data[2] || "fallback";
        return '<div class="panel api-card"><span>' + data[0] + '</span><strong>' + data[1] + '</strong><div class="api-status ' + (status === "live" ? "live" : status === "error" ? "error" : "") + '">' + status + '</div></div>';
      }

      function buildProductionSignals(market) {
        const signals = [];
        const rate = market.finance && market.finance.mortgageRate ? market.finance.mortgageRate.value : null;
        const location = market.location || {};
        const economy = market.economy || {};
        const realEstate = market.realEstate || {};
        const demographics = market.demographics || {};
        if (location.citycode) {
          signals.push({ title: "Commune identifiee", text: "Code INSEE " + location.citycode + " : les appels DVF et entreprises peuvent etre fiabilises par territoire.", level: "data" });
        } else {
          signals.push({ title: "Secteur a preciser", text: "Ajoute ville + departement pour mieux geocoder et rapprocher les donnees publiques.", level: "action" });
        }
        if (demographics.population) {
          signals.push({ title: "Socle INSEE", text: "Population communale : " + new Intl.NumberFormat("fr-FR").format(demographics.population) + " habitants, utile pour ponderer residentiel, commerce et services.", level: "insee" });
        }
        if (rate) {
          signals.push({ title: "Cout du financement", text: "Taux de reference " + number(rate, "%") + " : compare le rendement net avec le cout de dette et les CAPEX.", level: "finance" });
        }
        if (realEstate.avgPriceSqm) {
          signals.push({ title: "Comparables DVF", text: "Prix moyen observe : " + number(realEstate.avgPriceSqm, " EUR/m2") + " sur " + realEstate.transactionCount + " mutation(s) exploitable(s).", level: "dvf" });
        } else if (realEstate.lastUpdate) {
          signals.push({ title: "DVF disponible", text: "Dataset foncier detecte, derniere mise a jour " + formatApiDate(realEstate.lastUpdate) + ".", level: "market" });
        }
        if (economy.totalResults) {
          signals.push({ title: "Dynamique economique", text: economy.totalResults + " resultats entreprises detectes sur la zone via API publique.", level: "eco" });
        }
        return signals.slice(0, 5);
      }

      async function refreshLiveMarket() {
        const criteria = getCriteria();
        const params = new URLSearchParams({
          sector: document.querySelector("#sector").value.trim(),
          assetClass: criteria.assetClass,
          budget: String(criteria.budget),
          yieldTarget: String(criteria.yieldTarget)
        });
        document.querySelector("#statusText").textContent = "Connexion API en cours";
        livePreview.textContent = "Connexion aux sources publiques...";
        try {
          const response = await fetch("/api/market?" + params.toString(), { headers: { accept: "application/json" } });
          if (!response.ok) throw new Error("API " + response.status);
          liveMarket = await response.json();
          document.querySelector("#statusText").textContent = liveMarket.mode === "live" ? "API live connectees" : liveMarket.mode === "demo-db" ? "Base demo Vercel active" : "API avec fallback";
        } catch (error) {
          liveMarket = buildDemoMarketPayload(error.message);
          document.querySelector("#statusText").textContent = "Mode demo local actif";
        }
        renderLiveMarket();
      }

      function scheduleLiveRefresh() {
        clearTimeout(liveTimer);
        liveTimer = setTimeout(refreshLiveMarket, 450);
      }

      function exportRankedCsv() {
        const ranked = getRanked();
        if (!ranked.length) {
          document.querySelector("#statusText").textContent = "Aucun actif a exporter";
          return;
        }
        const headers = ["Rang", "Actif", "Secteur", "Classe", "Prix", "Surface", "Prix/m2", "Rendement", "Vacance", "Risque", "Score", "Notes"];
        const rows = ranked.map((entry, index) => {
          const item = entry.item;
          return [
            index + 1,
            item.name,
            item.sector,
            item.assetClass,
            item.price,
            item.surface,
            Math.round(item.price / Math.max(1, item.surface)),
            item.yield,
            item.vacancy,
            item.risk,
            entry.score,
            item.notes
          ];
        });
        const csv = [headers, ...rows].map((row) => row.map(csvCell).join(";")).join(String.fromCharCode(10));
        const blob = new Blob([String.fromCharCode(65279) + csv], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "immoscope-opportunites-" + new Date().toISOString().slice(0, 10) + ".csv";
        link.click();
        URL.revokeObjectURL(url);
        document.querySelector("#statusText").textContent = ranked.length + " actif(s) exporte(s)";
      }

      async function checkApiHealth() {
        document.querySelector("#statusText").textContent = "Test API...";
        try {
          const response = await fetch("/api/health", { headers: { accept: "application/json" } });
          const payload = await response.json();
          document.querySelector("#statusText").textContent = payload.ok ? "API OK - " + payload.version : "API a verifier";
        } catch (error) {
          document.querySelector("#statusText").textContent = "Base demo locale OK";
        }
      }

      function estimateCoordinates(sector) {
        const key = normalizeSectorName(sector);
        const base = {
          bordeaux: [44.8378, -0.5792],
          pessac: [44.8056, -0.6322],
          merignac: [44.8422, -0.6457],
          talence: [44.8083, -0.5898],
          "la rochelle": [46.1603, -1.1511],
          bayonne: [43.4929, -1.4748],
          angouleme: [45.6484, 0.1562]
        }[key] || [44.8378, -0.5792];
        const jitter = opportunities.length * 0.007;
        return { lat: base[0] + Math.sin(jitter) * 0.045, lon: base[1] + Math.cos(jitter) * 0.045 };
      }

      function normalizeSectorName(value) {
        return String(value || "")
          .trim()
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\\u0300-\\u036f]/g, "");
      }

      function renderTaxOptions(ranked) {
        const selected = taxAsset.value === "best" ? (ranked[0] && ranked[0].item) : opportunities.find((item) => String(item.id) === taxAsset.value);
        const taxProfile = document.querySelector("#taxProfile").value;
        const rental = document.querySelector("#taxRental").value;
        const works = document.querySelector("#taxWorks").value;
        const hold = document.querySelector("#taxHold").value;
        const cardsData = buildTaxCards(selected, taxProfile, rental, works, hold);
        taxResults.innerHTML = cardsData.map((card, index) => (
          '<article class="panel tax-card ' + (index === 0 ? 'recommended' : '') + '">' +
            '<div class="tax-score">' + card.score + '/100 - ' + (index === 0 ? 'Prioritaire' : 'A etudier') + '</div>' +
            '<h3>' + card.title + '</h3>' +
            '<p>' + card.summary + '</p>' +
            '<ul class="tax-list">' + card.points.map((point) => '<li>' + point + '</li>').join("") + '</ul>' +
          '</article>'
        )).join("");
        document.querySelector("#taxCaption").textContent = selected ? "Pistes pour : " + selected.name : "Selectionne un actif pour personnaliser les pistes.";
      }

      function buildTaxCards(asset, profile, rental, works, hold) {
        const assetClass = asset ? asset.assetClass : "Residentiel";
        const heavyWorks = works === "lourds" || (asset && asset.works >= 25);
        const longHold = hold === "long";
        const cards = [
          {
            title: "Regime reel foncier",
            base: 68,
            summary: "Interessant en location nue lorsque les charges, interets et travaux pesent fortement sur le resultat.",
            points: ["Deduction des charges et interets d'emprunt", "Deficit foncier possible sous conditions", "Pertinent si travaux et revenus fonciers existants"]
          },
          {
            title: "SCI a l'IR",
            base: 60,
            summary: "Montage lisible pour detenir a plusieurs, organiser la transmission et garder la fiscalite des associes.",
            points: ["Cadre familial ou patrimonial", "Plus-value immobiliere des particuliers", "Gestion collective plus claire"]
          },
          {
            title: "SCI a l'IS",
            base: 58,
            summary: "A etudier pour capitaliser, amortir l'immeuble et piloter la tresorerie dans une logique long terme.",
            points: ["Amortissement comptable de l'actif", "Taux IS a comparer a la fiscalite personnelle", "Attention a la plus-value professionnelle a la sortie"]
          },
          {
            title: "Location meublee / LMNP",
            base: 54,
            summary: "Piste adaptee aux actifs residentiels exploitables en meuble, avec arbitrage micro-BIC ou reel.",
            points: ["Amortissements au reel selon situation", "Recettes declarees en BIC", "Gestion plus operationnelle qu'une location nue"]
          },
          {
            title: "Structuration TVA et bail commercial",
            base: 50,
            summary: "Sujet a verifier pour bureaux, commerces et logistique selon la qualite du preneur et le bail.",
            points: ["Option TVA parfois utile sur locaux professionnels", "Recuperation de TVA a analyser", "Clauses de charges et travaux decisives"]
          },
          {
            title: "Arbitrage plus-value",
            base: 46,
            summary: "La duree de detention change fortement le resultat net a la revente.",
            points: ["Anticiper horizon de sortie avant achat", "Comparer detention directe, SCI IR et SCI IS", "Integrer frais, travaux et fiscalite de cession"]
          }
        ];

        return cards.map((card) => {
          let score = card.base;
          if (card.title.includes("reel") && heavyWorks) score += 16;
          if (card.title.includes("SCI a l'IR") && (profile === "famille" || longHold)) score += 16;
          if (card.title.includes("SCI a l'IS") && (profile === "societe" || assetClass === "Bureaux" || assetClass === "Logistique")) score += 18;
          if (card.title.includes("LMNP") && rental === "meublee" && assetClass === "Residentiel") score += 24;
          if (card.title.includes("TVA") && ["Bureaux", "Commerce", "Logistique", "Hotellerie"].includes(assetClass)) score += 22;
          if (card.title.includes("plus-value") && longHold) score += 18;
          if (rental === "nue" && card.title.includes("LMNP")) score -= 18;
          if (hold === "court" && card.title.includes("SCI a l'IS")) score -= 10;
          return { ...card, score: clamp(Math.round(score), 25, 98) };
        }).sort((a, b) => b.score - a.score);
      }

      function updateTaxSelect() {
        const current = taxAsset.value;
        taxAsset.innerHTML = '<option value="best">Meilleur actif score</option>' + opportunities.map((item) => '<option value="' + item.id + '">' + item.name + '</option>').join("");
        taxAsset.value = Array.from(taxAsset.options).some((option) => option.value === current) ? current : "best";
      }

      function openDetail(id) {
        const ranked = getRanked();
        const entry = ranked.find((x) => x.item.id === id) || scoreOpportunity(opportunities.find((item) => item.id === id), getCriteria());
        const item = entry.item;
        drawerTitle.textContent = item.name;
        drawerSubtitle.textContent = item.sector + " - " + item.assetClass + " - score " + entry.score + "/100";
        drawerBody.innerHTML =
          '<div class="scenario-card panel">' +
            '<strong>Pourquoi il ressort</strong>' +
            '<p>' + item.notes + '</p>' +
          '</div>' +
          '<div style="height:12px"></div>' +
          Object.entries(entry.breakdown).map(([key, value]) => (
            '<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;gap:12px;margin-bottom:5px"><strong>' + key + '</strong><span>' + value + '</span></div><div class="bar" style="--value:' + (value * 5) + '"><span></span></div></div>'
          )).join("") +
          '<div class="notice">Action conseillee : verifier loyer de marche, etat technique, bail, CAPEX, vacance locative et scenario fiscal avant offre.</div>';
        drawer.classList.add("open");
      }

      function renderAll() {
        const ranked = getRanked();
        renderKpis(ranked);
        renderCards(ranked);
        renderTable(ranked);
        renderMap(ranked);
        renderLiveMarket();
        updateTaxSelect();
        renderTaxOptions(ranked);
      }

      function activateTab(tabName) {
        const tab = document.querySelector('[data-tab="' + tabName + '"]');
        const view = document.querySelector('[data-view="' + tabName + '"]');
        if (!tab || !view) return;
        document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("active", item === tab));
        document.querySelectorAll(".view").forEach((item) => item.classList.toggle("active", item === view));
        document.querySelector("#statusText").textContent = "Vue " + tab.textContent.trim();
      }

      window.addEventListener("error", (event) => {
        document.querySelector("#statusText").textContent = "Erreur interface : " + event.message;
      });

      document.addEventListener("input", (event) => {
        if (!(event.target instanceof Element)) return;
        if (event.target.closest("#clientForm") || ["searchText", "maxVacancy", "minScore", "taxAsset", "taxProfile", "taxRental", "taxWorks", "taxHold"].includes(event.target.id)) {
          renderAll();
          if (event.target.closest("#clientForm")) scheduleLiveRefresh();
          document.querySelector("#statusText").textContent = "Analyse recalculee";
        }
      });

      document.addEventListener("change", (event) => {
        if (!(event.target instanceof Element)) return;
        if (event.target.closest("#clientForm") || event.target.closest(".tax-layout") || ["maxVacancy", "minScore"].includes(event.target.id)) {
          renderAll();
          if (event.target.closest("#clientForm")) scheduleLiveRefresh();
          document.querySelector("#statusText").textContent = "Filtres appliques";
        }
      });

      document.addEventListener("click", (event) => {
        if (!(event.target instanceof Element)) return;
        const tabButton = event.target.closest("[data-tab]");
        const scrollButton = event.target.closest("[data-scroll]");
        const detailButton = event.target.closest("[data-detail]");
        const taxButton = event.target.closest("[data-tax]");
        const resetButton = event.target.closest("#resetFilters");
        const exportButton = event.target.closest("#exportCsv");
        const healthButton = event.target.closest("#checkHealth");
        const focusTopButton = event.target.closest("#focusTopAsset");
        if (tabButton) {
          event.preventDefault();
          activateTab(tabButton.dataset.tab);
        }
        if (scrollButton) {
          const target = document.querySelector(scrollButton.dataset.scroll);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (detailButton) {
          openDetail(Number(detailButton.dataset.detail));
        }
        if (resetButton) {
          document.querySelector("#sector").value = "";
          document.querySelector("#assetClass").value = "Residentiel";
          document.querySelector("#budget").value = "950000";
          document.querySelector("#yieldTarget").value = "5.5";
          document.querySelector("#searchText").value = "";
          document.querySelector("#maxVacancy").value = "100";
          document.querySelector("#minScore").value = "0";
          renderAll();
          scheduleLiveRefresh();
          document.querySelector("#statusText").textContent = "Filtres reinitialises";
        }
        if (exportButton) {
          exportRankedCsv();
        }
        if (healthButton) {
          checkApiHealth();
        }
        if (focusTopButton) {
          const best = getRanked()[0];
          if (best) openDetail(best.item.id);
        }
        if (taxButton) {
          taxAsset.value = taxButton.dataset.tax;
          activateTab("fiscalite");
          renderAll();
          document.querySelector("#app").scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });

      document.querySelector("#closeDrawer").addEventListener("click", () => drawer.classList.remove("open"));

      document.querySelector("#assetForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const coords = estimateCoordinates(document.querySelector("#newSector").value);
        const newItem = {
          id: Date.now(),
          name: cleanText(document.querySelector("#newName").value),
          sector: cleanText(document.querySelector("#newSector").value),
          assetClass: document.querySelector("#newClass").value,
          price: Number(document.querySelector("#newPrice").value || 0),
          surface: Number(document.querySelector("#newSurface").value || 1),
          yield: Number(document.querySelector("#newYield").value || 0),
          vacancy: Number(document.querySelector("#newVacancy").value || 0),
          growth: 6,
          liquidity: 6,
          risk: Number(document.querySelector("#newRisk").value || 3),
          works: 10,
          lat: coords.lat,
          lon: coords.lon,
          strategy: document.querySelector("#strategy").value,
          notes: cleanText(document.querySelector("#newNotes").value) || "Actif ajoute manuellement, due diligence a completer."
        };
        opportunities.push(newItem);
        event.target.reset();
        document.querySelector("#statusText").textContent = "Actif ajoute a la session";
        activateTab("analyse");
        renderAll();
      });

      document.querySelector("#copySummary").addEventListener("click", async () => {
        const ranked = getRanked().slice(0, 3);
        const summary = ranked.map((entry, index) => (index + 1) + ". " + entry.item.name + " - score " + entry.score + "/100 - " + euros(entry.item.price) + " - rendement " + number(entry.item.yield, "%")).join("\\n");
        try {
          await navigator.clipboard.writeText(summary);
          document.querySelector("#statusText").textContent = "Synthese copiee";
        } catch (error) {
          document.querySelector("#statusText").textContent = "Synthese generee";
          alert(summary);
        }
      });

      document.querySelector("#refreshLive").addEventListener("click", refreshLiveMarket);
      document.querySelector("#refreshLiveMain").addEventListener("click", refreshLiveMarket);

      renderAll();
      refreshLiveMarket();
      activateTab("analyse");
    </script>
  </body>
</html>`;

const API_TIMEOUT_MS = 6500;

const STATIC_FALLBACKS = {
  mortgageRate: {
    value: 3.36,
    period: "T1 2026",
    label: "Taux effectif moyen pret immobilier fixe - fallback documentaire",
  },
};

const CITY_CODE_FALLBACKS = {
  bordeaux: { city: "Bordeaux", citycode: "33063", postcode: "33000" },
  pessac: { city: "Pessac", citycode: "33318", postcode: "33600" },
  merignac: { city: "Merignac", citycode: "33281", postcode: "33700" },
  mérignac: { city: "Merignac", citycode: "33281", postcode: "33700" },
  talence: { city: "Talence", citycode: "33522", postcode: "33400" },
  "la rochelle": { city: "La Rochelle", citycode: "17300", postcode: "17000" },
  bayonne: { city: "Bayonne", citycode: "64102", postcode: "64100" },
  angouleme: { city: "Angouleme", citycode: "16015", postcode: "16000" },
  angoulême: { city: "Angouleme", citycode: "16015", postcode: "16000" },
};

function json(data, status = 200, cacheControl = "public, max-age=900") {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": cacheControl,
    },
  });
}

async function fetchJson(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort("timeout"), options.timeoutMs || API_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "user-agent": "ImmoScope/1.0 (+https://openai.com)",
        ...(options.headers || {}),
      },
      signal: controller.signal,
    });
    const text = await response.text();
    if (!response.ok) {
      throw new Error("HTTP " + response.status + " - " + text.slice(0, 120));
    }
    return JSON.parse(text);
  } finally {
    clearTimeout(timeout);
  }
}

function source(name, status, detail, url) {
  return { name, status, detail, url };
}

function toNumber(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value !== "string") return null;
  const normalized = value.replace(/\s/g, "").replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function pickNumber(record, keys) {
  for (const key of keys) {
    if (record && record[key] != null) {
      const value = toNumber(record[key]);
      if (value != null) return value;
    }
  }
  return null;
}

function flattenDvfPayload(data) {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.results)) return data.results;
  if (Array.isArray(data?.records)) return data.records.map((record) => record.fields || record);
  if (Array.isArray(data?.features)) return data.features.map((feature) => feature.properties || feature);
  if (Array.isArray(data?.mutations)) return data.mutations;
  return [];
}

function normalizeCity(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

async function geocodeSector(sector, sources) {
  const query = sector && sector.trim() ? sector.trim() : "Bordeaux";
  const providers = [
    {
      name: "API Geo communes",
      type: "commune",
      url: "https://geo.api.gouv.fr/communes?nom=" + encodeURIComponent(query) + "&boost=population&limit=1&fields=nom,code,codesPostaux,population,centre",
    },
    {
      name: "BAN legacy data.gouv",
      type: "address",
      url: "https://api-adresse.data.gouv.fr/search/?q=" + encodeURIComponent(query) + "&limit=1",
    },
  ];

  for (const provider of providers) {
    try {
      const data = await fetchJson(provider.url);
      if (provider.type === "commune") {
        const commune = Array.isArray(data) && data[0];
        if (!commune) throw new Error("Aucune commune");
        const coords = commune.centre && commune.centre.coordinates ? commune.centre.coordinates : [];
        sources.push(source(provider.name, "live", commune.nom + " -> " + commune.code, provider.url));
        return {
          status: "live",
          label: commune.nom + (commune.codesPostaux && commune.codesPostaux[0] ? " (" + commune.codesPostaux[0] + ")" : ""),
          city: commune.nom || query,
          postcode: commune.codesPostaux && commune.codesPostaux[0] ? commune.codesPostaux[0] : "",
          citycode: commune.code || "",
          score: null,
          longitude: coords[0] || null,
          latitude: coords[1] || null,
        };
      }
      const feature = data.features && data.features[0];
      if (!feature) throw new Error("Aucun resultat");
      const props = feature.properties || {};
      const coords = feature.geometry && feature.geometry.coordinates ? feature.geometry.coordinates : [];
      sources.push(source(provider.name, "live", props.label || query, provider.url));
      return {
        status: "live",
        label: props.label || props.name || query,
        city: props.city || props.name || query,
        postcode: props.postcode || "",
        citycode: props.citycode || props.city_code || props.insee || "",
        score: props.score || null,
        longitude: coords[0] || null,
        latitude: coords[1] || null,
      };
    } catch (error) {
      sources.push(source(provider.name, "error", error.message, provider.url));
    }
  }

  const fallback = CITY_CODE_FALLBACKS[normalizeCity(query)];
  if (fallback) {
    sources.push(source("Fallback codes communes", "fallback", fallback.city + " -> " + fallback.citycode, "local"));
    return {
      status: "fallback",
      label: fallback.city + " (" + fallback.postcode + ")",
      city: fallback.city,
      postcode: fallback.postcode,
      citycode: fallback.citycode,
      score: null,
      longitude: null,
      latitude: null,
    };
  }

  return {
    status: "fallback",
    label: query,
    city: query,
    citycode: "",
    score: null,
    longitude: null,
    latitude: null,
  };
}

async function fetchDvfMetadata(sources) {
  const url = "https://www.data.gouv.fr/api/1/datasets/dvf-open-data/";
  try {
    const data = await fetchJson(url);
    const resources = Array.isArray(data.resources) ? data.resources : [];
    sources.push(source("data.gouv DVF+ open-data", "live", "Dataset " + (data.title || "DVF+") + " lu", url));
    return {
      status: "live",
      datasetLabel: data.title || "DVF+ open-data",
      lastUpdate: data.last_update || data.last_modified || null,
      resourcesCount: resources.length,
      resources: resources.slice(0, 3).map((resource) => ({
        title: resource.title,
        format: resource.format,
        url: resource.url,
      })),
    };
  } catch (error) {
    sources.push(source("data.gouv DVF+ open-data", "error", error.message, url));
    return {
      status: "fallback",
      datasetLabel: "DVF+ open-data",
      lastUpdate: null,
      resourcesCount: 0,
      resources: [],
    };
  }
}

async function fetchDvfTransactions(location, env, sources) {
  if (!location.citycode) {
    sources.push(source("DVF transactions", "fallback", "Code INSEE manquant", "https://www.data.gouv.fr/reuses/micro-api-dvf-demande-de-valeurs-foncieres"));
    return {
      status: "fallback",
      transactionCount: null,
      avgPriceSqm: null,
      sampleSize: 0,
      latestMutation: null,
      warning: "Geocodage requis pour interroger les mutations DVF par commune.",
    };
  }

  const base = env && env.DVF_API_ENDPOINT ? env.DVF_API_ENDPOINT : "http://api.cquest.org/dvf";
  const url = base + (base.includes("?") ? "&" : "?") + "code_commune=" + encodeURIComponent(location.citycode);
  try {
    const data = await fetchJson(url, {
      headers: env && env.DVF_API_TOKEN ? { authorization: "Bearer " + env.DVF_API_TOKEN } : {},
      timeoutMs: 8000,
    });
    const rows = flattenDvfPayload(data).slice(0, 500);
    const ratios = [];
    let latestMutation = null;
    for (const row of rows) {
      const value = pickNumber(row, ["valeur_fonciere", "valeur", "prix", "montant", "valeurfonc"]);
      const surface = pickNumber(row, ["surface_reelle_bati", "surface_bati", "surface", "surface_terrain"]);
      if (value && surface && surface > 5) ratios.push(value / surface);
      const date = row.date_mutation || row.date || row.datemut || row.mutation_date;
      if (date && (!latestMutation || String(date) > String(latestMutation))) latestMutation = date;
    }
    const avgPriceSqm = ratios.length ? Math.round(ratios.reduce((sum, value) => sum + value, 0) / ratios.length) : null;
    sources.push(source("DVF transactions", "live", rows.length + " mutation(s) recues pour " + location.citycode, url));
    return {
      status: "live",
      transactionCount: rows.length,
      avgPriceSqm,
      sampleSize: ratios.length,
      latestMutation,
      warning: "DVF contient des donnees sensibles : ne pas permettre la re-identification indirecte des personnes.",
    };
  } catch (error) {
    sources.push(source("DVF transactions", "error", error.message, url));
    return {
      status: "fallback",
      transactionCount: null,
      avgPriceSqm: null,
      sampleSize: 0,
      latestMutation: null,
      warning: "API DVF transactionnelle indisponible. Configure DVF_API_ENDPOINT pour une instance fiable.",
    };
  }
}

async function fetchDemographics(location, env, sources) {
  if (!location.citycode) {
    sources.push(source("INSEE / API Geo", "fallback", "Code INSEE manquant", "https://geo.api.gouv.fr/communes"));
    return {
      status: "fallback",
      provider: "none",
      population: null,
      surface: null,
      density: null,
      citycode: "",
    };
  }

  const inseeEndpoint = env && env.INSEE_LOCAL_ENDPOINT ? env.INSEE_LOCAL_ENDPOINT.replace("{code}", encodeURIComponent(location.citycode)) : "";
  if (inseeEndpoint) {
    try {
      const data = await fetchJson(inseeEndpoint, {
        headers: env && env.INSEE_API_TOKEN ? { authorization: "Bearer " + env.INSEE_API_TOKEN } : {},
      });
      const payload = Array.isArray(data) ? data[0] : data;
      const population = pickNumber(payload, ["population", "POP", "P20_POP", "P21_POP", "value", "valeur"]);
      const surface = pickNumber(payload, ["surface", "SUPERF", "area"]);
      sources.push(source("INSEE Donnees locales", "live", "Donnees locales recues pour " + location.citycode, inseeEndpoint));
      return {
        status: "live",
        provider: "INSEE Donnees locales",
        population,
        surface,
        density: population && surface ? Math.round(population / surface) : null,
        citycode: location.citycode,
      };
    } catch (error) {
      sources.push(source("INSEE Donnees locales", "error", error.message, inseeEndpoint));
    }
  } else {
    sources.push(source("INSEE Donnees locales", "fallback", "INSEE_LOCAL_ENDPOINT non configure", "https://portail-api.insee.fr"));
  }

  const geoUrl = "https://geo.api.gouv.fr/communes/" + encodeURIComponent(location.citycode) + "?fields=nom,code,population,surface,codeDepartement,codeRegion,codeEpci,codesPostaux&format=json";
  try {
    const data = await fetchJson(geoUrl);
    const population = toNumber(data.population);
    const surface = toNumber(data.surface);
    sources.push(source("API Geo commune", "live", "Population et surface communale recues", geoUrl));
    return {
      status: "live",
      provider: "API Geo commune",
      population,
      surface,
      density: population && surface ? Math.round(population / surface) : null,
      citycode: data.code || location.citycode,
      department: data.codeDepartement || "",
      region: data.codeRegion || "",
      epci: data.codeEpci || "",
      postcodes: data.codesPostaux || [],
    };
  } catch (error) {
    sources.push(source("API Geo commune", "error", error.message, geoUrl));
    return {
      status: "fallback",
      provider: "fallback",
      population: null,
      surface: null,
      density: null,
      citycode: location.citycode,
    };
  }
}

async function fetchEconomy(location, sources) {
  if (!location.citycode) {
    sources.push(source("Recherche Entreprises API", "fallback", "Code commune manquant", "https://recherche-entreprises.api.gouv.fr"));
    return {
      status: "fallback",
      establishmentsLabel: "code commune requis",
      totalResults: null,
    };
  }

  const url = "https://recherche-entreprises.api.gouv.fr/search?code_commune=" + encodeURIComponent(location.citycode) + "&per_page=1";
  try {
    const data = await fetchJson(url);
    const total = data.total_results || data.total || data.results?.length || 0;
    sources.push(source("Recherche Entreprises API", "live", total + " resultats sur la commune", url));
    return {
      status: "live",
      establishmentsLabel: total + " etablissements",
      totalResults: total,
    };
  } catch (error) {
    sources.push(source("Recherche Entreprises API", "error", error.message, url));
    return {
      status: "fallback",
      establishmentsLabel: "indisponible",
      totalResults: null,
    };
  }
}

async function fetchFinance(env, sources) {
  const configuredUrl = env && env.BDF_RATE_ENDPOINT ? env.BDF_RATE_ENDPOINT : "";
  const token = env && env.WEBSTAT_API_TOKEN ? env.WEBSTAT_API_TOKEN : "";
  const defaultUrl = "https://banquedefrance.opendatasoft.com/api/explore/v2.1/catalog/datasets/mir1/records?limit=1";
  const url = configuredUrl || defaultUrl;
  try {
    const data = await fetchJson(url, {
      headers: token ? { authorization: "Bearer " + token } : {},
    });
    const record = Array.isArray(data.results) ? data.results[0] : null;
    const possibleValue = record && Object.values(record).find((value) => typeof value === "number" && value > 0 && value < 30);
    const value = typeof possibleValue === "number" ? possibleValue : STATIC_FALLBACKS.mortgageRate.value;
    sources.push(source("Banque de France Webstat", "live", "Taux recupere via API", url));
    return {
      status: "live",
      mortgageRate: {
        value,
        period: record && (record.period || record.date || record.time_period) ? (record.period || record.date || record.time_period) : "dernier point disponible",
        label: "Taux financier Banque de France",
      },
    };
  } catch (error) {
    sources.push(source("Banque de France Webstat", "fallback", error.message, url));
    return {
      status: "fallback",
      mortgageRate: STATIC_FALLBACKS.mortgageRate,
    };
  }
}

function buildMarketSuggestions(query, location, finance, realEstate, economy, demographics) {
  const suggestions = [];
  if (finance.mortgageRate && Number(query.yieldTarget || 0) <= finance.mortgageRate.value + 1.5) {
    suggestions.push("Rendement cible proche du cout de financement : exiger une marge de securite plus forte.");
  }
  if (location.status === "live") {
    suggestions.push("Geocodage valide : filtrer les comparables par code INSEE plutot que par texte libre.");
  }
  if (realEstate.avgPriceSqm) {
    suggestions.push("Comparables DVF calcules : confronter le prix d'acquisition au prix moyen observe au m2.");
  } else if (realEstate.status === "live") {
    suggestions.push("DVF disponible : dataset foncier lu, mais prix/m2 transactionnel a completer.");
  }
  if (demographics.population) {
    suggestions.push("Donnees INSEE/commune disponibles : ponderer le potentiel residentiel et commercial avec population et densite.");
  }
  if (economy.status === "live") {
    suggestions.push("Dynamique entreprises disponible : utile pour bureaux, commerce et logistique.");
  }
  if (!suggestions.length) {
    suggestions.push("Sources publiques indisponibles : conserver le scoring interne et relancer les API plus tard.");
  }
  return suggestions;
}

async function handleMarket(request, env) {
  const url = new URL(request.url);
  const query = {
    sector: url.searchParams.get("sector") || "Bordeaux",
    assetClass: url.searchParams.get("assetClass") || "all",
    budget: Number(url.searchParams.get("budget") || 0),
    yieldTarget: Number(url.searchParams.get("yieldTarget") || 0),
  };
  const sources = [];
  const [location, realEstateMetadata, finance] = await Promise.all([
    geocodeSector(query.sector, sources),
    fetchDvfMetadata(sources),
    fetchFinance(env, sources),
  ]);
  const [dvfTransactions, demographics, economy] = await Promise.all([
    fetchDvfTransactions(location, env, sources),
    fetchDemographics(location, env, sources),
    fetchEconomy(location, sources),
  ]);
  const realEstate = {
    ...realEstateMetadata,
    transactionsStatus: dvfTransactions.status,
    transactionCount: dvfTransactions.transactionCount,
    avgPriceSqm: dvfTransactions.avgPriceSqm,
    sampleSize: dvfTransactions.sampleSize,
    latestMutation: dvfTransactions.latestMutation,
    transactionWarning: dvfTransactions.warning,
  };
  const liveCount = sources.filter((item) => item.status === "live").length;

  return json({
    generatedAt: new Date().toISOString(),
    mode: liveCount >= 2 ? "live" : "fallback",
    query,
    location,
    realEstate,
    demographics,
    finance,
    economy,
    sources,
    suggestions: buildMarketSuggestions(query, location, finance, realEstate, economy, demographics),
  });
}

async function handleDvf(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code_commune") || url.searchParams.get("citycode") || "";
  const sources = [];
  const realEstateMetadata = await fetchDvfMetadata(sources);
  const transactions = await fetchDvfTransactions({ citycode: code }, env, sources);
  return json({
    generatedAt: new Date().toISOString(),
    code_commune: code,
    ...realEstateMetadata,
    transactionsStatus: transactions.status,
    transactionCount: transactions.transactionCount,
    avgPriceSqm: transactions.avgPriceSqm,
    sampleSize: transactions.sampleSize,
    latestMutation: transactions.latestMutation,
    transactionWarning: transactions.warning,
    sources,
  });
}

async function handleInsee(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code_commune") || url.searchParams.get("citycode") || "";
  const sources = [];
  const demographics = await fetchDemographics({ citycode: code }, env, sources);
  return json({
    generatedAt: new Date().toISOString(),
    code_commune: code,
    demographics,
    sources,
  });
}

export default {
  async fetch(request, env, ctx) {
    void ctx;

    const url = new URL(request.url);
    if (url.pathname === "/api/health") {
      return json({
        ok: true,
        service: "ImmoScope",
        version: "1.1.0-production-api",
        generatedAt: new Date().toISOString(),
      }, 200, "no-store");
    }
    if (url.pathname === "/api/market") {
      return handleMarket(request, env || {});
    }
    if (url.pathname === "/api/dvf") {
      return handleDvf(request, env || {});
    }
    if (url.pathname === "/api/insee") {
      return handleInsee(request, env || {});
    }
    if (url.pathname !== "/") {
      return new Response("Not found", { status: 404 });
    }

    return new Response(page, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  },
};
