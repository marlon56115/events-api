import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Event = sequelize.define("Event", {
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  start_time: DataTypes.DATE,
  end_time: DataTypes.DATE,
  timezone: DataTypes.STRING,
});

export default Event;
