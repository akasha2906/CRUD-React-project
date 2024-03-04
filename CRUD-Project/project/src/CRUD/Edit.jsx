import design from './home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams,useNavigate } from 'react-router-dom'
const Edit=()=>{  
    let id=useParams()
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let navigate=useNavigate()

    function getName(e){
        setName(e.target.value)
    }

    function getSalary(e){
        setSalary(e.target.value)
    }

    function getCompany(e){
        setCompany(e.target.value)
    }

    function update(e){
        e.preventDefault()
        console.log(name.length);
        if((name.length>5) && (salary.length>4)&&(company.length>2))
        {
        let list1={
            cname:name,
            csalary:salary,
            ccompany:company
            
        }

        {console.log(list1.cname);
            console.log(list1.csalary);
        }
        axios.put(`http://localhost:5000/employee/${id.abc}`,list1)
        .then(()=>{console.log("done");})
        .catch(()=>{console.log("err");})
        navigate("/users")
    }
    else{
        alert("Enter proper details");
    }
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/employee/${id.abc}`)
        .then((x)=>{
            setName(x.data.cname)
            setSalary(x.data.csalary)
            setCompany(x.data.ccompany)
        })
    },[])
        return(
       <div className={design.editbg}>
         <div className={design.edituser}>
            <form>
                <h1>Edit</h1>
                {/* <h1></h1> */}
                <tr>
                    <td><label> Name:  </label></td>
                    <td> <input type="text" value={name}  onChange={getName} placeholder='Enter your Name' /></td>
                </tr>
                <tr>
                    <td><label> Salary: </label></td>
                    <td> <input type="number" value={salary} onChange={getSalary} placeholder='Enter your Salary' /></td>
                </tr>
                <tr>
                    <td><label> Company: </label></td>
                    <td> <input type="text" value={company} onChange={getCompany} placeholder='Enter your Company' /></td>
                </tr>
                    <button onClick={update} >update</button>
            </form>

        </div>
       </div>
    )
}
export default Edit