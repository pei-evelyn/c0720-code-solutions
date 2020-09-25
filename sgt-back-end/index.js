const express = require('express');
const app = express();

const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result =>
      res.status(200).json(result.rows))
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  // work on the logic here of how the grade might be invalid
  if (typeof grade.name === 'undefined' ||
      typeof grade.course === 'undefined' ||
      typeof grade.grade === 'undefined') {
    return res.status(400).json({
      error: 'Missing required value'
    });
  }

  const sql = `
    insert into "grades" ("name", "course", "grade")
    values ($1, $2, $3)
    returning *
  `;
  const values = [grade.name, grade.course, grade.grade];

  db.query(sql, values)
    .then(result =>
      res.status(201).json(result.rows[0]))
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

// app.put('/api/grades/:gradeId', (req, res) => {
//   const gradeId = parseInt(req.params.gradeId);
//   const updatedGrade = req.body;
// });

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
