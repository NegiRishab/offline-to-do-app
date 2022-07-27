import React, { useState } from "react";
import classes from "./AddItem.module.css";

export default function AddItem(props) {

  const[inputdata,setinputdata]=useState("")
  

  const handlecontent=(e)=>{
setinputdata(e.target.value)
  }
  const handleAddList=(e)=>{
   
    if(inputdata===""){
      alert("please fill the Task")
      return;
    }
   
    props.setList(inputdata);
    setinputdata('')
  }
  
 

  return (
    <div className={classes.addContainer}>
      <div>
        <input type="text" value={inputdata} onChange={handlecontent}/>
        <button className={classes.addButton} onClick={handleAddList}>Add New Task</button>
      </div>
      <div>
        <button className={classes.clearbutton} onClick={props.clear}>Clear All Task</button>
      </div>
    </div>
  );
}
