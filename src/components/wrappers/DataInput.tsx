import { ComponentProps, Fragment } from "react";

type IDataInput = ComponentProps<"input"> & {
  name: string;
  label: string;
  id: string;
};

export default function DataInput({ name, label, id, ...rest }: IDataInput) {
  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <input id={id} name={name} {...rest} />
    </Fragment>
  );
}
