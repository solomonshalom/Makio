<p align="center">
  <a href="https://makio.vercel.app/">
    <h2 align="center">Makio</h2>
  </a>
</p> 
<p align="center">⚡ Creating, voting, and sharing polls made simple</p>
<p align="center">
  <a href="https://makio.vercel.app/">Demo</a>
 </p>

# 🚀 Quickstart (Not production ready, please locally use it to better feel and understand it)

Run the website locally

```
git clone https://github.com/solomonshalom/Maki
```

## Setting up the project

```bash
cd oponion

# Install deps
yarn
```

# Setting up [Firebase](https://firebase.google.com/)

Now, rename `.env.local.example` to `.env.local`

Go to [Firebase](https://console.firebase.google.com/u/0/), and create a new project. Enable the realtime database.

Replace all the fields in the `env` file with appropriate values.

If using anayltics, uncomment the `firebase.anayltics()` function in the `lib/FirebaseSDK.ts` file

## Starting server

```bash
yarn dev
```

Server should now be running on [localhost](https://localhost:3000)

# 🔧 Tools Used

 - [Firebase](https://firebase.google.com/)
 - [TypeScript](https://www.typescriptlang.org/)
 - [Next.js](https://nextjs.org/)
 - [Apache ECharts](https://echarts.apache.org/)
 - [Prettier](https://prettier.io/)
 - [ESLint](https://eslint.org/)
 - [Figma](https://www.figma.com/)

# 🤞 Contributing

After setting up the project, and making changes:

```git
git add .
git commit -m "commit message"
git push YOUR_REPO_URL YOUR_BRANCH
```
