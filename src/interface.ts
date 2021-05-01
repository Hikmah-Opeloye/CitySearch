export interface IcityFinder extends IcityResult {
  Search(searchString: string): void;
}

export interface IcityResult {
  NextLetters: string[];
  NextCities: string[];
}
