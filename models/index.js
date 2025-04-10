import Event from "./Event.js";
import Attendee from "./Attendee.js";
import EventAttendee from "./EventAttendee.js";

// Relaciones N:N
Event.belongsToMany(Attendee, { through: EventAttendee });
Attendee.belongsToMany(Event, { through: EventAttendee });

export { Event, Attendee, EventAttendee };
