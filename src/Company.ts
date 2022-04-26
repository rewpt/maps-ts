import faker from "@faker-js/faker";
import { Mappable } from "./CustomMap";

// By saying implements mappable we tie the class to this
// interface which will give us better error messages
// if there is an error where your class initialization is
// not congruent with the interface
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <h1>Comapny Name: ${this.companyName}</h1>
    <h3>Catchphrase: ${this.catchPhrase}</h3>
    `;
  }
}
