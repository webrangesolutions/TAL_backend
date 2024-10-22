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
    this.app.use((req, res, next) => {
      // Set Access-Control-Allow-Origin header to allow requests from a specific origin
      res.setHeader(
        "Access-Control-Allow-Origin",
        "https://tal-vert.vercel.app"
      );

      // Allow credentials such as cookies or authorization headers
      res.setHeader("Access-Control-Allow-Credentials", "true");

      // Specify which request headers are allowed
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );

      // Specify the allowed HTTP methods
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
      );

      // If the request method is OPTIONS, return 200 status without proceeding to routes (handling preflight requests)
      if (req.method === "OPTIONS") {
        return res.sendStatus(200);
      }

      // Continue to the next middleware
      next();
    });

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
