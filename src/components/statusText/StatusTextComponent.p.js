import "../../styles/statusTextComponent.css"
export const StatusTextComponentP = ({ isError, statusText }) => {
  return (
    <div
      className={`status__div ${
        isError && "status__div__error"
      } ${!isError && "status__div__success"}`}
    >
      {statusText}
    </div>
  );
};
