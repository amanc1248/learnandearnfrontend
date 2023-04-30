export const LabelInputPasswordNormalP = ({
  label,
  labelhtmlForInputId,
  labelPlaceholder,
  inputRequired,
  onChangeFunction,
  disabled,
}) => {
  return (
    <div className="normal_label_input_div">
      <label htmlFor={labelhtmlForInputId} className="normal__label">
        {label}
      </label>
      <input
        type="password"
        className="normal__input"
        name={labelhtmlForInputId}
        id={labelhtmlForInputId}
        placeholder={labelPlaceholder}
        required={inputRequired}
        onChange={(e)=>{onChangeFunction(e.target.value)}}
        disabled={disabled}
      />
    </div>
  );
};
