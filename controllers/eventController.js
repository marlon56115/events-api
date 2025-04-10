import moment from "moment-timezone";
import { Event, Attendee } from "../models/index.js";

export const createEvent = async (req, res) => {
  try {
    const { title, description, start_time, end_time, timezone } = req.body;

    if (!title || !start_time || !end_time || !timezone) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    // Convertir fechas al formato UTC desde la zona horaria enviada
    const startUTC = moment.tz(start_time, timezone).utc().toDate();
    const endUTC = moment.tz(end_time, timezone).utc().toDate();

    const event = await Event.create({
      title,
      description,
      start_time: startUTC,
      end_time: endUTC,
      timezone,
    });

    res.status(201).json(event);
  } catch (err) {
    console.error("❌ Error creando evento:", err.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getEvents = async (req, res) => {
    try {
      const events = await Event.findAll({
        include: Attendee,
      });
  
      const transformed = events.map(event => {
        const timezone = event.timezone;
  
        return {
          id: event.id,
          title: event.title,
          description: event.description,
          timezone,
          start_time: moment.utc(event.start_time).tz(timezone).format(),
          end_time: moment.utc(event.end_time).tz(timezone).format(),
          createdAt: event.createdAt,
          updatedAt: event.updatedAt,
          attendees: event.Attendees
        };
      });
  
      res.json(transformed);
    } catch (err) {
      console.error("❌ Error al obtener eventos:", err.message);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  };