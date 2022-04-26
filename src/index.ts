// It is convention in TS to not use default exports so we always have curly braces
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();

console.log(user, company);
const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
// We may not want all of the methods possible on Map Given
// to us by google exposed, so we can make our own map class
