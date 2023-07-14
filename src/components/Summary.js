import './Summary.css'
import {useState} from 'react'
const Summary = ({courseOverview}) =>{
    const [showFullOverview,setShowFullOverview] = useState(false)

    const toggleOverview=()=>{
        setShowFullOverview(()=>!showFullOverview)
    }

    const truncatedOverview = courseOverview.split(' ').slice(0,60).join(' ');
    const showButton = courseOverview.split(' ').length > 60
    return (
        <>
            <h2 className='course-title'> Course Overview</h2>
            <div>
                <p>
                {showFullOverview ? courseOverview : truncatedOverview }
                </p>
                
                {showButton && (
                    <button className="flat-btn blue-btn" onClick = {()=>toggleOverview()}>
                        {showFullOverview? 'Show Less': 'Show More'}
                    </button>
                ) }
            </div>
        </>
        
    )
}
export default Summary