// import express, { Application, Request, Response, json } from "express";
// import cors from "cors";
// import bookRoute from "./app/modules/books/book.routes";
// const app: Application = express();

// app.use(cors());
// app.use(express, json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
// app.use("/api/v1/books", bookRoute);
// app.get("/", (req: Request, res: Response) => {
//   res.send("Working successfully");
// });

// export default app;

import express, { Application, Request, Response } from "express";
import cors from "cors";
import bookRoute from "./app/modules/books/book.routes";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/v1/books", bookRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Working successfully");
});
export default app;
