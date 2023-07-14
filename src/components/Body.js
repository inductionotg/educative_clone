import Tabs from "./Tabs"
import Card from './Card'
import './Body.css'
const Body=()=>{
    return (
        <div className="body-container">
            <div class="Course-user">
                <h1>Welcome ,Ritesh!</h1>
            </div>
            <div className="tabs">
                <Tabs/>
               
            </div>
        </div>
    )
}

export default Body