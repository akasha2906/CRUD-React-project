import { useNavigate, useParams } from "react-router-dom"
import design from "./home.module.css"
import axios from "axios"
const Delete=()=>{
let id=useParams()
let navi=useNavigate()
function deletes(){
    axios.delete(`http://localhost:5000/employee/${id.xyz}`)
    .then(()=>{console.log("done")})
    .catch(()=>{console.log("errrrr");})
    navi("/users")
}


function nodelete(){
    navi("/users")
}

function exit(){
    navi("/users")
}
    return(
        <div className={design.deletem}>
           {console.log(id.xyz)}
           <div className={design.optionbox}>
           <div className={design.bluebox}>
            <div className={design.rede}>
                <h1 id={design.x1} onClick={exit}>X</h1>
            </div>
           </div>
            <h1>Do you want to delete?</h1>
            <div className={design.btns}>
            <button onClick={deletes}>Yes</button>
            <button onClick={nodelete}>No</button>
            </div>
           </div>
        </div>
    )
}
export default Delete