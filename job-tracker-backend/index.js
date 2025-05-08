const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let jobs = [];  // In-memory "database"

// GET /jobs - Get all job applications
app.get('/jobs', (req, res) => {
  res.json(jobs);
});

// POST /jobs - Add a new job application
app.post('/jobs', (req, res) => {
  const job = {
    id: Date.now(),  // Simple ID
    ...req.body
  };
  jobs.push(job);
  res.status(201).json(job);
});

// DELETE /jobs/:id - Delete a job
app.delete('/jobs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  jobs = jobs.filter(job => job.id !== id);
  res.status(204).end();
});

// Server start
app.listen(4000, () => {
  console.log('API running → http://localhost:4000');
});