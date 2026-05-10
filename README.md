# SS Associates Full-Stack Website

Premium React website plus Express backend for SS Associates, a Coimbatore-based documentation and legal service provider with property, approval, loan processing, and additional real estate/construction support.

## Structure

```text
root/
  client/   React + Vite + Tailwind + Framer Motion
  server/   Node.js + Express API
  package.json
  README.md
```

## Frontend

- Multi-page React Router site
- Documentation-first service hierarchy
- Animated counters and page transitions
- Real SS Associates logo in navbar and footer
- Contact form redirects directly to WhatsApp
- Customer feedback section connected to backend

## Backend

Endpoints:

- `GET /feedback`
- `POST /feedback`
- `GET /health`

The backend stores and serves customer feedback. Enquiries are sent directly from the frontend to WhatsApp using `wa.me`.

## Environment

Create `server/.env`:

```env
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
```

Create `client/.env` if your API URL changes:

```env
VITE_API_BASE_URL=http://localhost:5000
```

## Install

```bash
npm install
npm install --prefix client
npm install --prefix server
```

## Run Frontend + Backend

```bash
npm run dev
```

Client: `http://localhost:5173`

Server: `http://localhost:5000`

## Build / Validate

```bash
npm run lint
npm run build
node --check server/src/index.js
```
