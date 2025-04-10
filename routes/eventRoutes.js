import express from "express";
import { createEvent, getEvents, registerAttendee } from "../controllers/eventController.js";

const router = express.Router();

router.post("/", createEvent);
router.get("/", getEvents);
router.post("/:eventId/attendees/:attendeeId", registerAttendee);

export default router;
