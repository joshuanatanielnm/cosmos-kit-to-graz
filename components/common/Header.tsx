import { dependencies } from "@/config";
import Link from "next/link";

const stacks = ["Graz", "Next.js"];

const osmojs = dependencies[0];

export function Header() {
  return (
    <>
      <div>
        <p>Migrate Cosmos-kit to Graz Example</p>
        <p>
          <p>Welcome to&nbsp;</p>
          <p>
            {stacks.join(" + ")}
            {" + "}

            <Link href={osmojs.name} target="_blank" rel="noreferrer">
              {osmojs.name}
            </Link>
          </p>
        </p>
      </div>
    </>
  );
}
