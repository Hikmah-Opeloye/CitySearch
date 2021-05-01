import { FindCity } from "./test.js";
import { Finder } from "./refactor.js";
//search string
let city = "saint.";
//convert search string to uppercase
city = city.toUpperCase();
//create an instance of findcity
let myCitySearch = new FindCity();
//call the search method on find city
myCitySearch.Search(city);
console.log(myCitySearch.NextCities, myCitySearch.NextLetters);
//create an instance of findcity
let CitySearch = new Finder();
//call the search method on find city
CitySearch.Search(city);
console.log("Next Cities", CitySearch.NextCities, "Next Letters", CitySearch.NextLetters);
