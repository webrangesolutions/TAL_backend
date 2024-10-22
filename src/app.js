import express from "express";
import dotenv from "dotenv";
import router from "./routes/main.routes.js";
import http from "http";
import cors from "cors";

export class App {
  constructor() {
    dotenv.config();
    this.app = express();
    this.app.use(express.json());
    this.http = new http.Server(this.app);
    this.PORT = process.env.PORT || 8000;
    this.initMiddleware();
    this.initRoutes();
  }

  initMiddleware() {
    // CORS middleware configuration
    this.app.use(
      cors({
        origin: ["https://tal-vert.vercel.app", "*"], // Allow only this origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed HTTP methods
        allowedHeaders: ["Content-Type", "Authorization"], // Headers to allow
        credentials: true, // Enable cookies and credentials support
        optionsSuccessStatus: 204, // Status for successful preflight responses
      })
    );

    // Handle preflight `OPTIONS` requests for all routes
    this.app.options("*", cors());

    this.app.use(express.json());
  }

  initRoutes() {
    // Set up your main routes
    this.app.use("/", router);
  }

  createServer() {
    // Start the server
    this.http.listen(this.PORT, () => {
      console.log(`Server started at port ${this.PORT}`);
    });
  }
}
