import { EntityId } from "./utils";
import { CrewRole } from "./enums";

export interface IBoat {
  id: number;
  name: string;
  producer: string;
  buildNumber: number;
  loa: number;
  b: number;
  picture: string;
  crew: ICrewMember[];
}

export interface ICrewMember {
  id: number;
  name: string
  picture?: string;
  age: number;
  email: string;
  role: CrewRole;
  certifiedUntil: string;
  boatId: number;
  boat: IBoat
}
