import { Link } from 'react-router-dom'
import design from './home.module.css'
const Home=()=>{
    return(
        <div id={design.home}>
                <Link to="/"> Create User</Link>
                <Link to="/users"> Users</Link>           
        </div>
    )
}
export default Home