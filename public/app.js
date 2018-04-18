let countries = [];

document.addEventListener('DOMContentLoaded', () => {
  const url ='https://restcountries.eu/rest/v2/all';
  makeRequest(url, requestComplete);

  const option = document.querySelector('#country-list');
  option.addEventListener('change', handleCountrySelection);
});

const makeRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', callback);
}
const requestComplete = function () {
  if (this.status !== 200) return;
  const jsonString = this.responseText;
  countries = JSON.parse(jsonString);
  populateList(countries);
}
const populateList = function (countries) {
  const select = document.querySelector('#country-list');
  countries.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    const value = index;
    option.value = value;
    select.appendChild(option);
  });
}

const handleCountrySelection = function(event){
  const country = countries[this.value]
  displayCountryInformation(country);
}

// getCountryData = function (countryName) {
//   const url = `https://restcountries.eu/rest/v2/name/${countryName}`
//   makeRequest(url, requestCountry);
// }

const displayCountryInformation = function(country){
  const countryInformation = document.querySelector('#country-info')
  countryInformation.innerHTML = ''

  // countryData.push(country.name)
  // countryData.push(country.population)
  // countryData.push(country.capital)
  // countryData.push(country.flag)

  const nameH1 = document.createElement('h1');
  const populationH3 = document.createElement('h3');
  const capitalH3 = document.createElement('h3');
  const flagImg = document.createElement('img');

  nameH1.textContent = country.name;
  populationH3.textContent = country.population;
  capitalH3.textContent = country.capital;
  flagImg.src = country.flag;

  countryInformation.appendChild(nameH1);
  countryInformation.appendChild(populationH3);
  countryInformation.appendChild(capitalH3);
  countryInformation.appendChild(flagImg);

}
