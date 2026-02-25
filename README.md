# Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases professional work and skills in a clean, elegant design.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Theme:** Dark/Light mode support with next-themes
- **Performance:** Optimized with Critters for CSS inlining
- **Code Quality:** ESLint, Prettier, and TypeScript for type safety

## Features

- 🎨 Modern and responsive design
- 🌓 Dark/Light mode support
- ⚡ Optimized performance
- 📱 Mobile-first approach
- 🎯 SEO friendly
- 🔍 Type-safe development

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/bharad/bharad-portfolio.git
cd bharad-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration.

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000/bharad-portfolio](http://localhost:3000/bharad-portfolio) with your browser to see the result.

## Project Structure

```
src/
├── app/          # Next.js app router pages and layouts
├── components/   # Reusable React components
├── config/       # Configuration files
├── lib/          # Utility functions and shared logic
└── types/        # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run test:e2e:smoke` - Run Playwright smoke E2E tests
- `npm run test:e2e:headed` - Run E2E tests in headed mode
- `npm run test:e2e:ui` - Run E2E tests in Playwright UI mode

## Deployment

This project is optimized for deployment on Vercel. Simply push your changes to GitHub and connect your repository to Vercel for automatic deployments.

## License

This project is private and proprietary.
