# CreatorClick — Website

Statische Single-File-Website. Alles (Bilder, Schriften, Skripte) ist in `index.html` eingebettet.

## Deployment auf GitHub Pages

1. Alle Dateien dieses Ordners ins Repo-Root hochladen: `index.html`, `404.html`, `.nojekyll`
2. Settings → Pages → Source: "Deploy from a branch", Branch `main`, Ordner `/ (root)` → Save
3. Nach 1–2 Minuten ist die Seite live. Bei Änderungen Hard-Reload (Cmd/Ctrl + Shift + R)

### Eigene Domain

Settings → Pages → Custom domain eintragen, dann beim Registrar:
- Subdomain (`www`): CNAME → `<username>.github.io`
- Root-Domain: vier A-Records auf 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

### Wichtig

`.nojekyll` muss mit hoch — ohne die Datei verarbeitet GitHub die Seite mit Jekyll und sie bleibt weiß.
