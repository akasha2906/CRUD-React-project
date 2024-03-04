import { useEffect, useState } from 'react'
import design from './home.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Users =()=>{
    let [members,setMembers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/employee")
        .then((x)=>{setMembers(x.data)})
        .catch(()=>{console.log("err");})
    },[])

    return(
        <div className={design.userdiv}>
            {members.map((member)=>{
                return(
                    <div className={design.profilcard}>
                        <h1>Name: {member.cname}</h1>
                        <h1>Salary: {member.csalary}</h1>
                        {/* <h1>Id:{member.id}</h1> */}
                        <h1>Company: {member.ccompany}</h1>
                        <div className={design.btns}>   
                            <Link to={`/edit/${member.id}`} >Update</Link>
                            <Link  to={`/delete/${member.id}`}>Delete</Link>
                        </div>
                    </div>
                    )
             })}
        </div>
    )
}
export default Users