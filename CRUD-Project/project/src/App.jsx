import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./CRUD/Home"
import Createuser from './CRUD/Createuser'
import User from './CRUD/Users'
import Edit from './CRUD/Edit'
import Delete from "./CRUD/Delete"

const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Home/>
            <Routes>
                <Route element={<Createuser/>} path="/"/>
                <Route element={<User/>} path="/users"/>
                <Route element={<Edit/>} path="/edit/:id"/>
                <Route element={<Delete/>} path="/delete/:xyz"/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App