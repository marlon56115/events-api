import express from "express";
import { createEvent, getEvents, registerAttendee } from "../controllers/eventController.js";

const router = express.Router();
//1. POST create event
router.post("/", createEvent);
//2. GET all events with attendees
router.get("/", getEvents);
//3. POST register attendee to event
router.post("/:eventId/attendees/:attendeeId", registerAttendee);

export default router;
