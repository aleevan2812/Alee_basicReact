import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import "./UseState.css";
import { Logger } from "sass";

const UseContext = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      });
  }, []);

  return (
    <div className="learn-usestate">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} userData={userData} />
      <Content isOpen={isOpen} />
      {isOpen && <Sidebar userData={userData} />}
    </div>
  );
};

export default UseContext;
