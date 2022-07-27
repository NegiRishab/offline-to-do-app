import React, {  useState } from "react";
import classes from "./App.module.css";
import AddItem from "./components/AddItem";
import Heading from "./components/Heading";
import ListItem from "./components/ListItem";

export default function App() {
  const [display, setdisplay] = useState([...JSON.parse(localStorage.getItem('display'))]);

  const handlesetlist = (item) => {
    var newitem = { title: item, check: false, id: Math.random() };
    // var item= localStorage.setItem(newitem.id,newitem.title);
    display.push(newitem);
    localStorage.setItem('display',JSON.stringify( [...display]));
    setdisplay([...JSON.parse(localStorage.getItem('display'))]);
   
  };

  const handleclear = () => {
    localStorage.setItem('display',JSON.stringify( []));
    setdisplay([...JSON.parse(localStorage.getItem('display'))]);
   
  };

  const handlecheckbox = (id, check) => {
    if (check) {
      let update = display.filter((i) => i.id !== id);

      let addagain = display.filter((i) => i.id === id);
      update.unshift(addagain[0]);
      let newdisplay = update.map((i) => {
        if (i.id !== id) {
         return i;
        }
        return {
          ...i,
          check: false,
        };
      });
      // setdisplay([...newdisplay]);
      localStorage.setItem('display',JSON.stringify( newdisplay));
      setdisplay([...JSON.parse(localStorage.getItem('display'))])
    } else {
      let update = display.filter((i) => i.id !== id);

      let addagain = display.filter((i) => i.id === id);
      update.push(addagain[0]);
     let newdisplay = update.map((i) => {
        if (i.id !== id) {
         return i;
        }
        return {
          ...i,
          check: true,
        };
      });
      // setdisplay([...newdisplay]);
    localStorage.setItem('display',JSON.stringify( newdisplay));
    setdisplay([...JSON.parse(localStorage.getItem('display'))])
    }
  };

  return (
    <div className={classes.app}>
      <Heading />
      <AddItem setList={handlesetlist} clear={handleclear} />
      <div className={classes.listContainer}>
        {console.log(display)}
        {display.map((item, index) => (
          <ListItem
            item={item}
            key={index}
            id={index}
            checkbox={handlecheckbox}
          />
        ))}
      </div>
    </div>
  );
}
