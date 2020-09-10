/* global $ */

const handleFormData = event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const personName = formData.get('name');
  const personCourse = formData.get('course');
  const personGrade = formData.get('grade');
  let newGrade = {};
  newGrade.name = personName;
  newGrade.course = personCourse;
  newGrade.grade = personGrade;
  newGrade = JSON.stringify(newGrade);
  event.target.reset();

  return newGrade;
};

const createGrade = grade => {
  $.ajax({
    method: 'POST',
    headers: { dataType: 'application/json' },
    data: grade,
    url: '/api/grades',
    success: data => {
      // eslint-disable-next-line no-console
      console.log(data);
    },
    error: err => {
      console.error(err);
    }
  });
};

const form = document.querySelector('form');
form.addEventListener('submit', () => {
  const grade = handleFormData();
  createGrade(grade);
});
