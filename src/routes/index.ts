import { Router } from "express";
import { connectToDatabase } from "../../services/database.service";
import { mailRoutes } from "./mail/mail";


const router = Router();
connectToDatabase()
  .then(() => {
    router.use("/mail", mailRoutes);
  }).catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

export { router };