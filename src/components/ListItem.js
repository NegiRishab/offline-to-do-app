// import React, { useContext, useState, useTransition } from "react";
import classes from "./ListItem.module.css";

export default function ListItem(props) {
  // const [check,setcheck]=useState(false)
  const{check}=props.item;

  const handlecheckbox=()=>{
   props.checkbox(props.item.id,check)
  }

  return (
    
        <div className={classes.lisChild} key={props.index}>
          <div>
            <input type="checkbox" checked={check}  onChange={handlecheckbox} />
          </div>
          <div>
            {check
            ?
            <p className={classes.through}>{props.item.title}</p>
            :
            <p>{props.item.title}</p>
            }
          </div>
        </div>
    
  );
}
