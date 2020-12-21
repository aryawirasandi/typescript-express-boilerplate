# Express Typescript Boilerplate

a simple express node ts and typescript boilerplate, you can custom your code with the typescript

[source of this repo](https://youtu.be/zRo2tvQpus8) | Traversy media

## Installation

1. Use package manager like yarn / npm

### npm

```bash
npm install
```

### yarn

```bash
yarn install
```

## Example of code

```typescript
import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "success",
    message: "hello world",
  });
});

app.listen(5000, () => console.log("Server Runnning"));
```

## command

there are several commands that I serve and you can customize it too so I make 3 commands among them :

### run ser

```bash
npm run start
```

for run node js after building with ts

```bash
npm run dev
```

for run node ts with nodemon in the src folder

```bash
npm run build
```

for build ts to js once
