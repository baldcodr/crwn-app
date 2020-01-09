import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./user-access.styles.scss";

const UserAccess = () => (
  <div className="user-access">
    <SignIn />
    <SignUp />
  </div>
);

export default UserAccess;
