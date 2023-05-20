# personal-portfolio

This is the new codebase that will create the website behind patrickdasilva.com; the old codebase is still deployed and hosted on Firebase, under the author's personal Firebase Google account and accessible in the Firebase console.

So we first need to make this new codebase run the site as it was before, update it a bit (responsiveness, theme, content) and it will replace the old codebase with a new host as well (Vercel).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Operational workflow

- First start by installing dependencies:

```bash
yarn install
```

- To run the development server, run the following:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- To run the Storybook server to develop components, run the following:
```bash
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

- For optimal results during development, use VSCode as your IDE. If you don't, please make sure to use Prettier before each commit to avoid formatting discrepancies:
```bash
yarn prettier
```