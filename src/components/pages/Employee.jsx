import React, { useEffect, useState } from "react";
import api from "../../api/api"
function Employee(){
    const clicked = false;
    const [employee,setEmpoyee] = useState([]);
    useEffect(()=>{
        const getUser = async() =>{
            const respones = await api.get("/employee")
            setEmpoyee(respones.data.data);
        }
        getUser()
    },[clicked])
    return (<div>
        {employee.map((value,index)=>{return <div>{value.e_id} {value.e_name} {value.e_passport}</div>})}
    </div>)
}

export default Employee;