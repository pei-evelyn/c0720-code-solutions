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
  createGrade(newGrade);
  event.target.reset();
};

const createGrade = obj => {
  $.ajax({
    method: 'POST',
    dataType: 'json',
    data: obj,
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
form.addEventListener('submit', handleFormData);
