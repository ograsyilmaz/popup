import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const siteContext = createContext();

export const useSite = () => {
  return useContext(siteContext);
};

export const SiteProvider = ({ children }) => {
  const [modelShow, setModelShow] = useState(true);
  const [data, setData] = useState();
  const [headline, setHeadline] = useState("NEW STUFF");
  const [description, setDescription] = useState(
    "Sign up for our newsletter and get 15% off your first order!"
  );
  const [sucessMessage, setSucessMessage] = useState("Success");
  useEffect(() => {
    axios.get("https://apiv2.popupsmart.com/api/googlefont").then((res) => {
      const value = res.data.filter((item) => item.category !== "monospace");
      setData(value);
    });
  }, []);

  const values = {
    modelShow,
    setModelShow,
    data,
    headline,
    setHeadline,
    description,
    setDescription,
    sucessMessage,
    setSucessMessage,
  };
  return <siteContext.Provider value={values}>{children}</siteContext.Provider>;
};
