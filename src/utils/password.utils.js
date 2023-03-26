export const validatePassword = (password) => {
  // Check if password meets all conditions
  if (
    password.length >= 8 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    /[@#%^]/.test(password) &&
    !/password|abcd|12345/.test(password)
  ) {
    // Password meets all conditions
    return true;
  } else {
    // Password does not meet one or more conditions, return error message
    let errorMsg = "Password must contain ";
    if (password.length < 8) {
      errorMsg += "at least 8 characters, ";
    }
    if (!/[a-z]/.test(password)) {
      errorMsg += "at least 1 lowercase letter, ";
    }
    if (!/[A-Z]/.test(password)) {
      errorMsg += "at least 1 uppercase letter, ";
    }
    if (!/\d/.test(password)) {
      errorMsg += "at least 1 number, ";
    }
    if (!/[@#%^]/.test(password)) {
      errorMsg += "at least 1 special character (@#%^), ";
    }
    if (/password|qwerty|12345/.test(password)) {
      errorMsg += "not be a common password or string";
    }
    // Remove last comma and space
    errorMsg = errorMsg.replace(/,\s*$/, "");
    return errorMsg;
  }
};
