import React from "react";

export default function UserInformation(props) {
  const { userData } = props;
  return (
    <h5>
      User Information: {userData.email} - Id: {userData.id}
    </h5>
  );
}
