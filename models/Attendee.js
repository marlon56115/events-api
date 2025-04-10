import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Attendee = sequelize.define("Attendee", {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
});

export default Attendee;
