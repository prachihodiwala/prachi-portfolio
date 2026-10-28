import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    message: 'Prachi portfolio API is running. No database is configured or required.'
  });
});

app.get('/api/profile', (_req, res) => {
  res.json({
    name: 'Prachi Hodiwala',
    role: 'B.Sc. IT Student · Aspiring Developer',
    location: 'Gujarat, India',
    database: false
  });
});

app.listen(PORT, () => {
  console.log(`Portfolio API running at http://localhost:${PORT}`);
});
