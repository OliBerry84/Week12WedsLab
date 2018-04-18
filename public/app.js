document.addEventListener('DOMContentLoaded', () => {
  const url ='https://restcountries.eu/rest/v2/all';

  const button = document.querySelector('#button');
  button.addEventListener('click', () => {
    makeRequest(url, requestComplete);
  });
});
