import React, { useState } from "react";
import ModalMode from "./Modal";
const AddBtn = ()=>{
    const [state,setState] = useState(false);
    return(
        <>
        <button className="add-modal"  
        onClick={()=>{
            setState (true)
            
        }}
        >Add</button>
        {state && <ModalMode close={setState}/>}
        </>
    )
}
export default AddBtn;