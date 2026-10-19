# 5G Edu Platform

Tel-U × UTM — Reconfigurable Traffic-Aware 5G Network Slicing and Edge Computing Platform for Future-Ready Telecommunications Engineering Education.

## Struktur
- `apps/web` — Frontend Next.js
- `apps/sim-engine` — Simulation engine (FastAPI)
- `packages/shared-schemas` — Kontrak data lintas tim
- `content/` — Modul kursus (UTM)
- `docs/adr/` — Architecture Decision Records

## Prasyarat
- Node 24 LTS (lihat `.nvmrc`)
- pnpm 12.14.0 (via corepack: `corepack enable`)

## Menjalankan
```bash
pnpm install
pnpm dev
```