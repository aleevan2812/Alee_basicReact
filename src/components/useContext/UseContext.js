import { createContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import "./UseState.css";
import { Logger } from "sass";

export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch("https://reqres.in/api/users/2")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUserData(res.data);
      });
  }, []);

  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};

export const UseContext = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="learn-usestate">
      <AppProvider>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Content isOpen={isOpen} />
        {isOpen && <Sidebar />}
      </AppProvider>
    </div>
  );
};
