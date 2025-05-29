import express from 'express';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';
import { getAllEvents } from './api/index.js';

const app = express();
const PORT = 3000;

// 1. CORS y JSON
app.use(cors());
app.use(express.json());

// 2. Sirve tu front desde la carpeta real “Front-end”
const clientPath = path.resolve('Front-end');
app.use(express.static(clientPath));

// 3. La API
app.get('/api/events', async (req, res) => {
  try {
    const events = await getAllEvents();
    res.json(events);
  } catch {
    res.status(500).json({ error: 'Error al obtener eventos' });
  }
});

// 4. Arranca
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
