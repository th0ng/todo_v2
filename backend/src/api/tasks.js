const express = require('express');

const router = express.Router();

const tasks = [
  {
    id: 1,
    task: 'Wake up',
  },
  {
    id: 2,
    task: 'Get coffee',
  },
  {
    id: 3,
    task: 'Go back to sleep',
  },
];

router.get('/', (req, res) => {
  res.json(tasks);
});

module.exports = router;
