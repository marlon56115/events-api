import express from "express";
import { createAttendee, getAttendeeEvents } from "../controllers/attendeeController.js";

const router = express.Router();
//3. POST create attendee
router.post("/", createAttendee);
//5. GET all events of an attendee
router.get("/:id/events", getAttendeeEvents);


export default router;
