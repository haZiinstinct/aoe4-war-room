# Deploy auf aoe4.hazii.org

WAR ROOM ist eine **einzelne, statische HTML-Datei** – kein Node, keine
Datenbank, kein Build auf dem Server. Deploy = eine Datei hochladen.

## Datei

Nimm entweder

- `outputs/index.html` aus dem Repo, **oder**
- `war-room.html` aus dem GitHub-Release
  (<https://github.com/haZiinstinct/aoe4-war-room/releases/tag/v1.1.0>)

und lege sie als **`index.html`** in den Docroot der Subdomain.

## Schritte (eigener Webspace)

1. **DNS**: A- bzw. CNAME-Record für `aoe4.hazii.org` auf den Server zeigen lassen.
2. **Docroot** anlegen (z. B. `/var/www/aoe4.hazii.org`) und diese Dateien in den
   Docroot hochladen (FTP/SSH):
   - `index.html` (die Single-File-App)
   - `og-image.png` (Social-Preview, aus `deploy/` bzw. `docs/`)
   - `apple-touch-icon.png` (Homescreen-Icon, aus `deploy/` bzw. `docs/`)
3. **GoatCounter-Code** setzen: in der `index.html` vor dem Upload den Platzhalter
   `DEIN-CODE` durch deinen echten GoatCounter-Code ersetzen (oder das
   `<script data-goatcounter …>` samt Methodik-Hinweis entfernen, falls keine
   Statistik gewünscht ist).
4. **Header/CSP** setzen:
   - Apache: `deploy/.htaccess` in den Docroot legen (mod_headers aktiv).
   - nginx: `deploy/nginx-aoe4.conf` als server-Block einbinden und neu laden.
5. **TLS**: Zertifikat via Let's Encrypt/certbot (`certbot --nginx` bzw. `--apache`).
6. Fertig – Seite aufrufen und testen.

## Warum diese CSP?

Die App ist bewusst eine Single-File-Datei mit **inline `<style>` und
`<script>`**; deshalb erlaubt die CSP `'unsafe-inline'` für Style/Script (Hashes
wären pro Build unpraktisch, es gibt keinerlei Server-/Injection-Fläche). Die
**Webfonts sind selbst gehostet und in die Datei eingebettet** (`data:`-URIs) –
kein Google-Fonts-Request, DSGVO-konform. Extern laden nur:

- **Bilder** der Einheiten von `data.aoe4world.com`,
- **Statistik** (cookielos): Script von `gc.zgo.at`, Beacon an `*.goatcounter.com`.

Ohne Netz bleibt die App voll bedienbar (Fonts sind eingebettet, nur die
Einheitenbilder fehlen dann).

> Hinweis: Diese CSP ist **nicht** die strikte Hash-CSP der hazii.org-Hauptseite –
> für diese eigenständige Subdomain ist die obige Policy passend und sicher.

## Updates

Bei einem neuen Release einfach die neue `index.html` hochladen (HTML wird nicht
lange gecacht, ist also sofort sichtbar).
