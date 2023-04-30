import "../../../styles/component/input/input.css";
export const LabelInputTextNormalP = ({
  label,
  labelHtmlForInputId,
  inputPlaceholder,
  inputRequired,
}) => {
  return (
    <div className="normal_label_input_div">
      <label htmlFor={labelHtmlForInputId} className="normal__label">
        {label}
      </label>
      <input
        type="text"
        className="normal__input"
        name={labelHtmlForInputId}
        id={labelHtmlForInputId}
        placeholder={inputPlaceholder}
        required={inputRequired}
      />
    </div>
  );
};
