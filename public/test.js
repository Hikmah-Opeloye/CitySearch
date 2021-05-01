//import interfaces and Cities Array
import { Cities } from "./cities.js";
// sort array in alphabetical order
let sortedCities = Cities.sort();
//remove duplicates from array
let uniqueCities = [...new Set(sortedCities)];
export class FindCity {
    //search Unique Cities Array
    Search(searchString) {
        //compare each content of Unique Cities with search string
        this.NextCities = uniqueCities.filter((city) => {
            return city.toUpperCase().startsWith(searchString);
        });
        this.NextLetters = this.searchLetters(searchString, this.NextCities);
    }
    //extract the next letters of the filtered array into a new array.
    searchLetters(searchstring, filteredarray) {
        //for each item in the array
        return filteredarray.map((letter) => {
            //check the length of search string
            var position = searchstring.length;
            //extract next letter from each item and push it to array
            return letter.toUpperCase().substring(position, position + 1);
        });
    }
}
