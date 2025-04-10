import { Attendee, Event } from "../models/index.js";
import moment from "moment-timezone";

export const createAttendee = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const attendee = await Attendee.create({ name, email });
    res.status(201).json(attendee);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ message: "El email ya está registrado" });
    }
    console.error("Error creando asistente:", err.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getAttendeeEvents = async (req, res) => {
    const { id } = req.params;
  
    try {
      const attendee = await Attendee.findByPk(id, {
        include: {
          model: Event,
          through: { attributes: [] },
        }
      });
  
      if (!attendee) {
        return res.status(404).json({ message: "Asistente no encontrado" });
      }
  
      const events = attendee.Events.map(event => {
        const timezone = event.timezone;
  
        return {
          id: event.id,
          title: event.title,
          description: event.description,
          timezone,
          start_time: moment.utc(event.start_time).tz(timezone).format(),
          end_time: moment.utc(event.end_time).tz(timezone).format(),
          createdAt: event.createdAt,
          updatedAt: event.updatedAt
        };
      });
  
      res.json(events);
    } catch (err) {
      console.error("Error obteniendo eventos del asistente:", err.message);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  };