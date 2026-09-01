# FiveMConnect

A lightweight web redirect page to launch FiveM and connect to a server directly via URL parameters.

## Usage

Pass the server IP and port using the `?ip=` query parameter:

```
https://<your-host>/?ip=127.0.0.1:30120
```

When opened, the page redirects the browser to:

```
fivem://connect/<ip>?pure_1
```

If no `ip` parameter is provided, the page displays a prompt allowing you to manually enter the server IP.

## Setup

No build step or dependencies required. Host `index.html`, `styles.css`, and `script.js` on any static file host (GitHub Pages, Cloudflare Pages, Nginx, Vercel, Netlify, etc.).

## License

[MIT](LICENSE) © 2026 CaptSpider4