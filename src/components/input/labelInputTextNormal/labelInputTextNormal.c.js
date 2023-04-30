import { LabelInputTextNormalP } from "./labelInputTextNormal.p";

export const LabelInputTextNormalC = ({
  label,
  labelHtmlForInputId,
  inputPlaceholder,
  inputRequired,
  onChangeFunction,
  disabled,
}) => {
  return (
    <LabelInputTextNormalP
      label={label}
      labelHtmlForInputId={labelHtmlForInputId}
      inputPlaceholder={inputPlaceholder}
      inputRequired={inputRequired}
      onChangeFunction={onChangeFunction}
      disabled={disabled}
    ></LabelInputTextNormalP>
  );
};
