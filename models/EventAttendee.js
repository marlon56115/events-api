import sequelize from "../config/database.js";

const EventAttendee = sequelize.define("EventAttendee", {}, { timestamps: false });

export default EventAttendee;
