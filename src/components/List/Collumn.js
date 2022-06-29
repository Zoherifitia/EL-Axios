import axios from "axios";
import React, { useRef, useState } from "react";
import "./Collumn.css"
const Collumn =(props)=>{

    let {id, name, username , email, phone, address,website, company}= props;
    const ref = useRef(null);
    const [Name, setNameValue] = useState(name);
    const [UserName, setUsernameValue] = useState(username);
    const [Email, setEmailValue] = useState(email);
    const [Address, setAddressValue] = useState(address);
    const [Phone, setPhoneValue] = useState(phone);
    const [Company, setCompanyValue] = useState(company);
    const [Website, setWebsiteValue] = useState(website);
    
    function displayWindow() {
        ref.current.style.display = "block";
    }
    function close() {
        ref.current.style.display = "none";
    }
    function handleChangeName(e) {
        setNameValue(e.target.value)
    }
    function handleChangeUser(e) {
        setUsernameValue(e.target.value)
    }
    function handleChangeEmail(e) {
        setEmailValue(e.target.value)
    }
    function handleChangeAddres(e) {
        setAddressValue(e.target.value)
    }
    function handleChangePhone(e) {
        setPhoneValue(e.target.value)
    }
    function handleChangeWeb(e) {
        setWebsiteValue(e.target.value)
    }
    function handleChangeCom(e) {
        setCompanyValue(e.target.value)
    }
    
    function updateData(e) {
        e.preventDefault();
        ref.current.style.display = "none";
        const promise = axios.patch("https://jsonplaceholder.typicode.com/users/1", {
            name : Name,
            username : UserName,
            email : Email,
            address : {
                street : Address,
                city : "",
                zipcode :"",
                geo : {
                    lat : "",
                    lng : "",
                }
            },
            phone : Phone,
            website : Website,
            company : {
                name : Company,
                catchPhrase : "",
                bs : ""
            }
        })
        promise.then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
            <tr onClick={displayWindow}>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td>{website}</td>
                <td>{company}</td>
            </tr>
            <div ref={ref}></div>
            <div className="UpdateContainer modal" ref={ref}>
            <div className="Contents">
                <button className="UpDCloseBtn" onClick={()=>{close(false)}}>x</button>
                    <div className="div">
                        <h6 className="h6">Name</h6>
                        <input  className="Input-Upd" type="text" value={Name} onChange={handleChangeName}>
                        </input>
                        <h6 className="h6">Username</h6>   
                        <input  className="Input-Upd" type="text" value={UserName} onChange={handleChangeUser}>
                        </input>
                        <h6 className="h6"> Email</h6>   
                        <input  className="Input-Upd" type="text" value={Email} onChange={handleChangeEmail}>
                        </input>
                        <h6 className="h6"> Address</h6>
                        <input  className="Input-Upd" type="text" value={Address} onChange={handleChangeAddres}>
                        </input>
                        <h6 className="h6"> Phone</h6>   
                        <input  className="Input-Upd" type="text" value={Phone} onChange={handleChangePhone}>
                        </input>
                        <h6 className="h6">Website</h6> 
                        <input  className="Input-Upd" type="text" value={Website} onChange={handleChangeWeb}>
                        </input>       
                        <h6 className="h6">Company</h6>
                        <input  className="Input-Upd" type="text" value={Company} onChange={handleChangeCom}>
                        </input>       
                </div>
            </div>
            <button className="UpdBtn" onClick={updateData} >Update</button>
            <br/>
            </div> 
        </>
    )
}

export default Collumn;