import React, { useState, createContext } from "react";
import Child from "./Child";
import Nephew from "./Nephew";
/* 
  for using the context API first we create context app into App and the use this context object into child using useContext hooks
*/
export const GlobalData = createContext();

function App() {
  let [color, setColor] = useState("Red");
  let [day, setDay] = useState("");
  function getDay(dayItem){
    day = dayItem;
    setDay(day);
  }
  return (
    <GlobalData.Provider value={{ AppColor: color , getDay: getDay}}>
      <h2>App {day}</h2>
      <Child />
      <Nephew/>
    </GlobalData.Provider>
  );
}

export default App;

// Child.js
import React, { useContext } from "react";
import SuperChild from "./SuperChild";
import { GlobalData } from "./App"; // Import GlobalData using curly braces

function Child() {
  let { AppColor } = useContext(GlobalData); // Destructure AppColor from context

  return (
    <>
      <h2>Child {AppColor}</h2>
      <SuperChild />
    </>
  );
}

export default Child;

import { useContext } from "react";
import { GlobalData } from "./App";
function SuperChild() {
    let {AppColor, getDay} = useContext(GlobalData);
    let dayIndex = new Date().getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
  return (
    <>
      <button onClick={() => getDay(days[dayIndex])}>SendDay</button>
      <h2>Super Child {AppColor}</h2>
    </>
  );
}

export default SuperChild;
