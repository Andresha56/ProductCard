import React, { createContext, useEffect, useState } from "react";

export const APIData = createContext();

function APIContext({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?brewed_before=11-")
      .then((request) => request.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return <APIData.Provider value={data}>{children}</APIData.Provider>;
}

export default APIContext;
