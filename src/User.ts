// command clicking on faker takes us to the type definition file which can give us
// a ton of information on how to use the library, in this case better than
// the documentation.
import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";
// we need type definition files, which some libraries come with like Axios
// newest version of faker does
// Old version did not so we would have needed to check 'Definitely Typed' to find it
// We can do this at npmjs.com and query @types/faker
// we would have then installed something like npm install @types/faker

// creating our User class type annotations
export class User implements Mappable {
  name: string;
  // this will not initialize the lat and long variables, it just lets TS know they are coming
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    // Now we have to initialize the location lat and long vars
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<h1> User Name: ${this.name}</h1>`;
  }
}
