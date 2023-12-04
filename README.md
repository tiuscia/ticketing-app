!!!!in progress!!!!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and inspired by https://github.com/ClarityCoders/Ticket-Tutorial-App

In this version I revisited the code and made some changes:

- I added TypeScript
- I changed the file structure

## Getting Started

### 1 - add MongoDB URI

add your MongoDB connection string to the .env.local file

example:

```
// Copy and paste it from your MongoDB Atlas dashboard (Deployment -> Database -> Connect -> Drivers -> Node.js)
MONGODB_URI = mongodb+srv://<user>:<password>@cluster0.bdphudh.mongodb.net/<db name>
```

### 2 - First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Mongoose](https://mongoosejs.com/docs/) - learn about Mongoose
- [Next.js with Mongoose](https://www.mongodb.com/developer/how-to/nextjs-with-mongoose/) - learn how to use MongoDB with Next.js
- [Next.js with TypeScript](https://nextjs.org/docs/basic-features/typescript) - learn about Next.js with TypeScript
- [Next.js with MongoDB](https://www.mongodb.com/developer/how-to/nextjs-with-mongodb/) - learn how to use MongoDB with Next.js
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- your feedback and contributions are welcome!
