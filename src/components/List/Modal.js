import axios from "axios";
import React, { useRef, useState } from "react";

const ModalMode = ({close})=>{
    const ref = useRef(null);
    const NameRef = useRef(null);
    const UsernameRef = useRef(null);
    const EmailRef = useRef(null);
    const AddressRef = useRef(null);
    const PhoneRef = useRef(null);
    const WebsiteRef = useRef(null);
    const CompanyRef = useRef(null);

    const sendData = ()=>{
        ref.current.style.display= "none";
        const promise = axios.post("https://jsonplaceholder.typicode.com/users",{        
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                geo:{
                    "lat": "-37.3159",
                    "lng": "81.1496"
                    }
                }
        })
        promise.then((response)=>{console.log(response.data);})
        .catch((err)=>{console.log(err);})

    }

    return(
        <>     
        <div className="ModalContainer" ref={ref}>
            <div >
                <button className="CloseBtn" onClick={()=>{close(false)}}>x</button>
                <div className="InputZone">
                    <h6>Name</h6>
                        <input ref={NameRef} className="Input"  type="text" placeholder="Name">
                        </input> 
                        <h6>Username</h6>   
                        <input ref={UsernameRef} className="Input" type="text" placeholder="Username">
                        </input> <br/>
                        <h6> Email</h6>   
                        <input ref={EmailRef} className="Input" type="text" placeholder="Email">
                        </input> <br/> 
                        <h6> Address</h6>
                        <input ref={AddressRef} className="Input" type="text" placeholder="Address">
                        </input> 
                    <h6> Phone</h6>   
                        <input ref={PhoneRef} className="Input" type="text" placeholder="Phone number">
                        </input> 
                        <h6>Website</h6> 
                        <input ref={WebsiteRef} className="Input" type="text" placeholder="Website"></input>       
                        <h6>Company</h6>
                        <input ref={CompanyRef} className="Input" type="text" placeholder="Company"></input>            
            </div>
                    <button className="Add-Btn" onClick={sendData} >Add</button>
            </div>
        </div>
        </>
    )
 }
export default ModalMode;