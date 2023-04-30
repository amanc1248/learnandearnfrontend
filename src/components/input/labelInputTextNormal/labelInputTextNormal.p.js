import "../../../styles/component/input/input.css";
export const LabelInputTextNormalP = ({
  label,
  labelHtmlForInputId,
  inputPlaceholder,
  inputRequired,
  onChangeFunction,
  disabled,
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
        onChange={(e)=>{onChangeFunction(e.target.value)}}
        disabled={disabled}
      />
    </div>
  );
};
