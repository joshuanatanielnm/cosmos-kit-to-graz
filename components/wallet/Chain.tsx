import Image from "next/image";

export type ChainProps = {
  name: string;
  logo?: string;
};

export function Chain({ name, logo }: ChainProps) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
      {logo && (
        <Image
          alt={name}
          src={logo}
          width="38"
          height="38"
          style={{ borderRadius: "100%" }}
        />
      )}
      <p>{name}</p>
    </div>
  );
}
