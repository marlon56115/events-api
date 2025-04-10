import express from "express";
import { createAttendee } from "../controllers/attendeeController.js";

const router = express.Router();

router.post("/", createAttendee);

export default router;
