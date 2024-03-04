import { useState } from 'react'
import design from './home.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Createuser=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let navigate=useNavigate()

    function getname(e){
        setName(e.target.value)
    }

    function getsalary(e){
        setSalary(e.target.value)
    }

    function getcompany(e){
        setCompany(e.target.value)
    }

    function submit(e){
        e.preventDefault()
        console.log(name.length);
        if((name.length>5) && (salary.length>4)&&(company.length>2))
        {
        let list1={
            cname:name,
            csalary:salary,
            ccompany:company
        }
        axios.post("http://localhost:5000/employee",list1)
        .then(()=>{console.log("done");})
        .catch(()=>{console.log("err");})

        setCompany("")
        setName("")
        setSalary("")
        navigate("/users")
    }
    else{
        alert("Enter proper details");
    }
    }
    return(
       <div className={design.createbg}>
         <div className={design.createuser}>
            <form>
                <tr>
                    <td><label> Name:  </label></td>
                    <td> <input type="text" name="" id="" value={name} onChange={getname} placeholder='Enter your Name' /></td>
                </tr>
                <tr>
                    <td><label> Salary: </label></td>
                    <td> <input type="number" name="" id="" value={salary} onChange={getsalary} placeholder='Enter your Salary' /></td>
                </tr>
                <tr>
                    <td><label> Company: </label></td>
                    <td> <input type="text" name="" id="" value={company} onChange={getcompany} placeholder='Enter your Company' /></td>
                </tr>
                    <button onClick={submit}>Submit</button>
            </form>

        </div>
       </div>
    )
}
export default Createuser