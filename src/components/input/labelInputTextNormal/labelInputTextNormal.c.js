import { LabelInputTextNormalP } from "./labelInputTextNormal.p";

export const LabelInputTextNormalC = ({
  label,
  labelHtmlForInputId,
  inputPlaceholder,
  inputRequired,
}) => {
  return (
    <LabelInputTextNormalP
      label={label}
      labelHtmlForInputId={labelHtmlForInputId}
      inputPlaceholder={inputPlaceholder}
      inputRequired={inputRequired}
    ></LabelInputTextNormalP>
  );
};
