## ManageInvo

A modern invoice management dashboard built with Next.js (App Router), Tailwind CSS, and Supabase. It includes authentication, invoice CRUD, table filtering, pagination, and a responsive UI.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 3
- Supabase (Auth + Database)
- Shadcn UI + custom UI components

## Features

- Auth flows: `login` and `signup`
- Dashboard with cards, latest invoices
- Invoices list with:
  - Status filter and customer name search
  - Pagination
  - Total invoices and total amount summary
  - Edit and delete actions
- Invoice create/edit pages

## Prerequisites

- Node.js 18+
- A Supabase project with a table named `invoices & users`

## Environment Variables

Create a `.env` file in the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Install & Run

```bash
# install
npm install
# or
pnpm install

# dev server
npm run dev
# http://localhost:3000
```

## Scripts

- `npm run dev` – start dev server (Turbopack)
- `npm run build` – production build
- `npm run start` – start production server
- `npm run lint` – run eslint

## How Data Flows

- `lib/supabaseClient.js` initializes the client using env vars
- `lib/data.js` handles session retrieval and fetching invoices per user
- `lib/actions.js` contains mutations such as deleting an invoice
- `app/dashboard/invoices/page.jsx` loads session + invoices and renders the table
- `app/ui/invoices/table.jsx` manages filtering (status + customer name), totals, and pagination

## Development Notes

- UI built with Tailwind and component primitives (Shadcn UI in `components/ui`)
- Search filters by `customerName` and resets pagination on change

## Deployment

You can deploy on any Next.js-compatible platform (Vercel recommended). Ensure the two Supabase env vars are set in your hosting provider.
