import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import axios from "axios";
import { PRICE_URL } from "../utils/config";

export const AppProvider = createContext({});

export const useToggle = () => {
  return useContext(AppProvider);
};

const AppContext = ({ children }) => {
  const [sidebarPin, setSidebarPin] = useState(false);
  const [rightbarPin, setRightbarPin] = useState(false);
  const [seiPrice, setSeiPrice] = useState(0);

  const toggleSidebar = () => {
    setSidebarPin(!sidebarPin);
  };

  const toggleRightSbar = () => {
    setRightbarPin(!rightbarPin);
  };

  useEffect(() => {
    (async() => {
      try {
        const res = await axios.get(PRICE_URL);
        setSeiPrice(res?.data["sei-network"]?.usd)
      } catch (err) {
        console.log(err);
      }
    })()
  }, []);

  return (
    <AppProvider.Provider
      value={{
        sidebarPin,
        toggleSidebar,
        setSidebarPin,
        rightbarPin,
        setRightbarPin,
        toggleRightSbar,
        seiPrice,
      }}
    >
      {children}
    </AppProvider.Provider>
  );
};

export default AppContext;
