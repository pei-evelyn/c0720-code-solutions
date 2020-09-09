/* global $ */

$.ajax({
  method: 'GET',
  url: '/api/grades',
  success: data => {
    // eslint-disable-next-line no-console
    console.log(data);
    // eslint-disable-next-line no-console
    console.log('Success! Data receieved.');
  },
  error: err => {
    console.error(err);
  }
});
