import { StatusTextComponentP } from "./StatusTextComponent.p";

export const StatusTextComponentC = ({ isError, statusText }) => {
  return (
    <StatusTextComponentP
      isError={isError}
      statusText={statusText}
    ></StatusTextComponentP>
  );
};
