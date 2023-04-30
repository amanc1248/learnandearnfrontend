import { LabelInputPasswordNormalP } from "./labelInputPasswordNormal.p";

export const LabelInputPasswordNormalC = ({
  label,
  labelhtmlForInputId,
  labelPlaceholder,
  inputRequired,
}) => {
  return (
    <LabelInputPasswordNormalP
      label={label}
      labelhtmlForInputId={labelhtmlForInputId}
      labelPlaceholder={labelPlaceholder}
      inputRequired={inputRequired}
    ></LabelInputPasswordNormalP>
  );
};
