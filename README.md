# Roblox Luxury Boutique

> A small Vite + React + TypeScript storefront created for selling virtual items and showcasing products.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Styling & UI](#styling--ui)
- [Contributing](#contributing)
- [License & Contact](#license--contact)

## About

This repository contains a small e-commerce style storefront built with Vite, React, TypeScript and Tailwind CSS. It's designed as a clean, responsive demo site for listing products, showing a hero feature, and viewing product details.

## Features

- Responsive homepage with hero product and product carousel
- Product listing and product detail pages
- Reusable UI components (cards, navigation, forms)
- Horizontal scrolling product carousel

## Tech Stack

- Vite (dev tooling)
- React + TypeScript
- Tailwind CSS
- React Router
- Lucide icons

## Prerequisites

Make sure you have Node.js (LTS) and `npm` installed. On Windows PowerShell, commands below will work as-is.

## Local Setup

1. Clone the repository (if you haven't already):

```powershell
git clone <repo-url>
cd roblox-luxury-boutique
```

2. Install dependencies:

```powershell
npm install
```

3. Run the development server:

```powershell
npm run dev
```

Open `http://localhost:5173` (or the port shown) to view the site.

## Available Scripts

- `npm run dev` — Run the Vite dev server
- `npm run build` — Produce a production build
- `npm run preview` — Serve the production build locally

Check `package.json` for the exact scripts configured.

## Project Structure (important files)

- `src/main.tsx` — App entry
- `src/App.tsx` — App root and routes
- `src/pages/Index.tsx` — Homepage (hero, product carousel)
- `src/pages/ProductDetail.tsx` — Product detail page
- `src/components/` — Reusable UI components
- `src/data/products.ts` — Sample product data
- `src/index.css` — Tailwind + base styles

## Styling & UI

This project uses Tailwind CSS with a set of component utilities under `src/components/ui/` and global component styles in `src/index.css`. Utility classes such as `scrollbar-hide` and component-level classes like `.product-card` are defined there.

If you see layout issues (images stacking, overflow, etc.), inspect the grid and image container classes (for example `h-[400px]`, `object-cover`, and `overflow-hidden`) in `src/pages/Index.tsx` and `src/components/ProductCard.tsx`.

## Contributing

Contributions are welcome. If you'd like to file an issue or submit a PR:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes and push: `git push origin feat/your-feature`
4. Open a pull request describing your changes

Keep changes focused and add short, descriptive commit messages.

## License & Contact

This project is licensed under the MIT License — see the `LICENSE` file in the repository root for details.

If you have questions or want help improving the site, open an issue or reach out to the repository owner.

---

Happy coding!