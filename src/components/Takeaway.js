import './Takeaway.css'
const Takeaway = ({takeaway}) =>{
    return (
        
        <div className="takeaway-details">
            {takeaway.map((item)=>{
                return(
                <ul className="takeaway-list">
                    <li>
                        <p>&#10003; {item}</p>
                    </li>
                </ul>
            )})}
            
        </div>
    )
}

export default Takeaway