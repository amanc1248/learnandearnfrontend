import { LabelInputPasswordNormalC } from "../../components/input/labelInputPasswordNormal/labelInputPasswordNormal.c";
import { LabelInputTextNormalC } from "../../components/input/labelInputTextNormal/labelInputTextNormal.c";
import { StatusTextComponentC } from "../../components/statusText/StatusTextComponent.c";
import "../../styles/adminLoginScreen.css";
export const AdminLoginScreenP = ({
  handleOnSubmit,
  onEmailChange,
  onPasswordChange,
  loggingIn,
  loginStatus,
}) => {
  return (
    <div className="admin__login__screenP__div">
      <form action="" onSubmit={handleOnSubmit}>
        <h3 className="admin__login__title">Admin Login</h3>
        <StatusTextComponentC
          isError={loginStatus?.isError}
          statusText={loginStatus?.statusText}
        ></StatusTextComponentC>
        <LabelInputTextNormalC
          label="Username"
          labelHtmlForInputId="username"
          inputPlaceholder="Username"
          inputRequired={true}
          onChangeFunction={onEmailChange}
          disabled={loggingIn}
        ></LabelInputTextNormalC>
        <LabelInputPasswordNormalC
          label="Password"
          labelhtmlForInputId="password"
          labelPlaceholder="Password"
          inputRequired={true}
          onChangeFunction={onPasswordChange}
          disabled={loggingIn}
        ></LabelInputPasswordNormalC>
        <input
          type="submit"
          className={`${loggingIn && "admin__loggingIn"}`}
          value={`${loggingIn ? "Logging In..." : "Login"}`}
        />
      </form>
    </div>
  );
};
