# Whale Tracker - Moby
# Crypto Wallet Tracker

The Crypto Wallet Tracker is a modern web application designed to help users monitor and track their cryptocurrency holdings across different wallets. Built with the latest web technologies, including Next.js 14, Prisma, TypeScript, and PostgreSQL, this app offers a seamless and efficient user experience, providing real-time insights into cryptocurrency portfolios.

## Features

- **Real-Time Tracking**: Monitor your crypto wallet balances and transactions in real-time.
- **Portfolio Overview**: Get a comprehensive overview of your cryptocurrency holdings, including asset distribution and total value.
- **Multi-Wallet Support**: Easily add and manage multiple cryptocurrency wallets in one place.
- **Secure & Private**: Your data is securely stored and processed, ensuring your information remains private.
- **Responsive Design**: Enjoy a consistent experience across all your devices, thanks to the responsive design.

## Built With

- **[Next.js 14](https://nextjs.org/)**: The React framework for production, providing fast rendering and flexible data fetching.
- **[Prisma](https://www.prisma.io/)**: Next-generation ORM for Node.js and TypeScript, simplifying database access and management.
- **[TypeScript](https://www.typescriptlang.org/)**: Adds static type definitions to JavaScript, enhancing development and maintainability.
- **[PostgreSQL](https://www.postgresql.org/)**: Robust and powerful open-source relational database system.
  """

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Docker Setup

docker-compose up -d

docker-compose down

## PRISMA INFO

https://www.prisma.io/docs/orm/reference/prisma-cli-reference

To handle migrations update the schema.prisma file with your changes and then run `npx prisma migrate dev --name ADD_NAME_OF_MIGRATION`

```
The migrate dev command:
Reruns the existing migration history in the shadow database in order to detect schema drift (edited or deleted migration file, or a manual changes to the database schema)
Applies pending migrations to the shadow database (for example, new migrations created by colleagues)
Generates a new migration from any changes you made to the Prisma schema before running migrate dev
Applies all unapplied migrations to the development database and updates the _prisma_migrations table
Triggers the generation of artifacts (for example, Prisma Client)
```

To open prisma studio to visual data in db - `npx prisma studio`
