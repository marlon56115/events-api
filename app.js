import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import eventRoutes from "./routes/eventRoutes.js";
import attendeeRoutes from "./routes/attendeeRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/events", eventRoutes);
app.use("/api/attendees", attendeeRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log("Base de datos sincronizada");
  app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
  });
}).catch((err) => {
  console.error("Error al conectar con la base de datos:", err.message);
});
