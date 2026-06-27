export function renderErrorPage(err?: unknown): string {
  const errDetails = err
    ? err instanceof Error
      ? `${err.name}: ${err.message}\n${err.stack || ""}`
      : String(err)
    : "";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #0A0F1E; color: #fff; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 36rem; width: 100%; text-align: center; padding: 2.5rem; background: #111827; border: 1px solid rgba(201,149,42,0.3); border-radius: 1.5rem; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
      h1 { font-size: 1.5rem; margin: 0 0 0.5rem; color: #fff; font-family: 'Playfair Display', serif; }
      p { color: #9ca3af; margin: 0 0 1.5rem; }
      .err-box { text-align: left; background: #1f2937; border: 1px solid #374151; padding: 1rem; border-radius: 0.75rem; font-family: monospace; font-size: 12px; color: #f87171; overflow-x: auto; max-height: 200px; margin-bottom: 1.5rem; white-space: pre-wrap; word-break: break-all; }
      .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: 600; cursor: pointer; text-decoration: none; border: 1px solid transparent; transition: all 0.2s; }
      .primary { background: #C9952A; color: #0A0F1E; }
      .primary:hover { background: #fff; }
      .secondary { background: transparent; color: #fff; border-color: rgba(255,255,255,0.2); }
      .secondary:hover { border-color: #C9952A; color: #C9952A; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      ${errDetails ? `<div class="err-box"><strong>Diagnostic Error:</strong>\n${errDetails}</div>` : ""}
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
