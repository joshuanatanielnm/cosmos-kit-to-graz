import { ReactNode } from "react";
import { Astronaut } from "./Astronaut";

export type UserProps = {
  name: string;
};

export function User({ name }: UserProps) {
  return (
    <div>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
}
