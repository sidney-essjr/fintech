import { CSSProperties, ComponentProps, Fragment } from "react";

type IDataInput = ComponentProps<"input"> & {
  name: string;
  label: string;
  id: string;
};

const generalStyle: CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  background: "var(--color-4)",
  borderRadius: "var(--gap)",
};

const labelStyle: CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle,
};

const inputStyle: CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle,
};

export default function DataInput({ name, label, id, ...rest }: IDataInput) {
  return (
    <div>
      <label style={labelStyle} htmlFor={name}>
        {label}
      </label>
      <input style={inputStyle} id={id} name={name} {...rest} />
    </div>
  );
}
