import express from "express";
import { createAttendee, getAttendeeEvents } from "../controllers/attendeeController.js";

const router = express.Router();

router.post("/", createAttendee);
router.get("/:id/events", getAttendeeEvents);


export default router;
