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
2. **Docroot** anlegen (z. B. `/var/www/aoe4.hazii.org`) und `index.html`
   hochladen (FTP/SSH).
3. **Header/CSP** setzen:
   - Apache: `deploy/.htaccess` in den Docroot legen (mod_headers aktiv).
   - nginx: `deploy/nginx-aoe4.conf` als server-Block einbinden und neu laden.
4. **TLS**: Zertifikat via Let's Encrypt/certbot (`certbot --nginx` bzw. `--apache`).
5. Fertig – Seite aufrufen und testen.

## Warum diese CSP?

Die App ist bewusst eine Single-File-Datei mit **inline `<style>` und
`<script>`**; deshalb erlaubt die CSP `'unsafe-inline'` für Style/Script (Hashes
wären pro Build unpraktisch, es gibt keinerlei Server-/Injection-Fläche). Extern
laden nur:

- **Bilder** der Einheiten von `data.aoe4world.com`,
- **Webfonts** von `fonts.googleapis.com` (CSS) und `fonts.gstatic.com` (Dateien).

Ohne Netz bleibt die App bedienbar (System-Font-Fallback, Bilder fehlen dann).

> Hinweis: Diese CSP ist **nicht** die strikte Hash-CSP der hazii.org-Hauptseite –
> für diese eigenständige Subdomain ist die obige Policy passend und sicher.

## Updates

Bei einem neuen Release einfach die neue `index.html` hochladen (HTML wird nicht
lange gecacht, ist also sofort sichtbar).
