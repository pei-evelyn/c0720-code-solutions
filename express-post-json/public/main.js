/* global $ */

const handleFormData = event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const personName = formData.get('name');
  const personCourse = formData.get('course');
  const personGrade = formData.get('grade');
  createGrade(personName, personCourse, personGrade);
  event.target.reset();
};

const createGrade = (person, course, grade) => {
  $.ajax({
    method: 'POST',
    url: '/',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify({
      name: person,
      course: course,
      grade: grade,
      id: nextId
    }),
    success: data => {
      // eslint-disable-next-line no-console
      console.log('it worked!');
      nextId++;
    },
    error: err => {
      console.error(err);
    }
  });
};

const form = document.querySelector('form');
let nextId = 1;
form.addEventListener('submit', handleFormData);
