import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

export const UseCallback = () => {
  const [users, setUsers] = useState([]);

  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`);
  }, []);

  // nham tranh cac useEffect o component con thuc thi lai khi nhan function tu component cha
  // mat vung chua
  const handleClick = () => {
    getData("users")
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      });
  };

  return (
    <>
      <p>Data: </p>
      <button onClick={handleClick}>Get users data</button>
      <p>{JSON.stringify(users)}</p>
      <ChildComponent getData={getData} />
    </>
  );
};
