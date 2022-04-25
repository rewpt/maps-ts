// It is convention in TS to not use default exports so we always have curly braces
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

console.log(user, company);

new google.maps.Map(document.getElementById("map") as HTMLElement, {
  zoom: 1,
  center: { lat: 0, lng: 0 },
});
