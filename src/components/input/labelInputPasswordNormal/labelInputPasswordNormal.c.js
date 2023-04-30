import { LabelInputPasswordNormalP } from "./labelInputPasswordNormal.p";

export const LabelInputPasswordNormalC = ({
  label,
  labelhtmlForInputId,
  labelPlaceholder,
  inputRequired,
  onChangeFunction,
  disabled,
}) => {
  return (
    <LabelInputPasswordNormalP
      label={label}
      labelhtmlForInputId={labelhtmlForInputId}
      labelPlaceholder={labelPlaceholder}
      inputRequired={inputRequired}
      onChangeFunction={onChangeFunction}
      disabled={disabled}
    ></LabelInputPasswordNormalP>
  );
};
