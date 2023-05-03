import "../../styles/component/buttons/buttons.css";
import "../../styles/colors.css";
export const SmallSeeDetailsButton = ({ backgroundColor, text, textColor
 }) => {
  return (
    <span class={`blue__small__bgColor__button ${backgroundColor} ${textColor}`}>
      {text}
    </span>
  );
};
