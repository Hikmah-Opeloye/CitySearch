//import interfaces and Cities Array
import { Cities } from "./cities.js";
import { IcityFinder, IcityResult } from "./interface.js";

// sort array in alphabetical order
let sortedCities = Cities.sort();

//remove duplicates from array
let uniqueCities = [...new Set(sortedCities)];

export class Finder implements IcityFinder {
  //properties inherited from cityresult
  NextLetters!: string[];
  NextCities!: string[];

  //search Unique Cities Array
  Search(searchString: string): void {
    //compare each content of Unique Cities with search string
    this.NextCities = uniqueCities.filter((city) => {
      return city.toUpperCase().startsWith(searchString);
    });
    //extract the next letters of the filtered array into a new array.

    //for each item in the array
    this.NextLetters = this.NextCities.map((letter: string) => {
      //check the length of search string
      var position = searchString.length;
      //extract next letter from each item and push it to array
      return letter.toUpperCase().substring(position, position + 1);
    });
  }
}
