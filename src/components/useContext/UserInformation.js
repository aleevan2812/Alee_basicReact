import React, { useContext } from "react";
import { AppContext, UseContext } from "./UseContext";

export default function UserInformation(props) {
  const userData = useContext(AppContext);

  return (
    <h5>
      User Information: {userData.email} - Id: {userData.id}
    </h5>
  );
}
