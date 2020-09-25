const express = require('express');
const app = express();

const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res) => {
  db.query('select * from grades')
    .then(result =>
      res.status(200).json(result.rows))
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
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
        error: 'An unexpected error occured'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);
  const updatedGrade = req.body;
  const columnNameInputs = Object.keys(updatedGrade);

  if (gradeId < 0 || isNaN(gradeId)) {
    return res.status(400).json({
      error: `${gradeId} is not a valid ID`
    });
  } else if (columnNameInputs.length === 0) {
    return res.status(400).json({
      error: 'Missing required value'
    });
  }

  for (let i = 0; i < columnNameInputs.length; i++) {
    const acceptedColumns = ['name', 'course', 'grade'];
    if (!acceptedColumns.includes(columnNameInputs[i])) {
      return res.status(400).json({
        error: `${columnNameInputs[i]} not acceptable value`
      });
    }
  }

  let values;
  let sql = '';

  if (columnNameInputs.length === 1) {
    sql = `
      update "grades"
         set ${columnNameInputs[0]} = $2
       where "gradeId" = $1
       returning *
    `;
    values = [
      gradeId,
      updatedGrade[columnNameInputs[0]]
    ];
  } else if (columnNameInputs.length === 2) {
    sql = `
      update "grades"
         set ${columnNameInputs[0]} = $2,
             ${columnNameInputs[1]} = $3
       where "gradeId" = $1
       returning *
      `;
    values = [
      gradeId,
      updatedGrade[columnNameInputs[0]],
      updatedGrade[columnNameInputs[1]]
    ];
  } else if (columnNameInputs.length === 3) {
    sql = `
      update "grades"
         set ${columnNameInputs[0]} = $2,
             ${columnNameInputs[1]} = $3,
             ${columnNameInputs[2]} = $4
       where "gradeId" = $1
       returning *
    `;
    values = [
      gradeId,
      updatedGrade[columnNameInputs[0]],
      updatedGrade[columnNameInputs[1]],
      updatedGrade[columnNameInputs[2]]
    ];
  }
  db.query(sql, values)
    .then(result => {
      if (result.rowCount.length === 0) {
        res.status(404).json({
          error: `ID ${gradeId} does not exist`
        });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId);

  if (gradeId < 0 || isNaN(gradeId)) {
    return res.status(400).json({
      error: `${gradeId} is not a valid ID`
    });
  }

  const sql = `
    delete from "grades"
    where "gradeId" = $1
  `;
  const value = [gradeId];

  db.query(sql, value)
    .then(result => {
      if (result.rowCount === 0) {
        res.status(404).json({
          error: `ID ${gradeId} does not exist`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
