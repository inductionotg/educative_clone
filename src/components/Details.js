import './Details.css';
import { useState,useEffect } from 'react';
import Hero from './Hero'
import Takeaway from './Takeaway';
import Summary from './Summary'
import CourseContent from './CourseContent'
const Details =()=>{
    const [courseOverview,setCourseOverview]=useState('')
    const [takeaway,setTakeaway] = useState([])
    const [courseContentData,setCourseContentData] = useState([])
    const [heroTitle,setHeroTitle] = useState('')
    

    useEffect(()=>{
        fetchApi();
    },[])
    async function fetchApi(){

        try {
            const response = await fetch('https://www.educative.io/api/collection/learn-ruby-from-scratch')
            const jsonData = await response.clone().json()
            const instanceData = jsonData.instance.details
            console.log(instanceData.title)
            setTakeaway(instanceData.clos)
            console.log(instanceData.summary)
            setCourseOverview(instanceData.summary)
            setHeroTitle(instanceData.title)
            const categoryData = instanceData.toc.categories;
            const extractedCategories = categoryData.map((category)=>({
                title:category.title,
                pages:category.pages.map((page)=>page.title)
            }))
            setCourseContentData(extractedCategories)
        }
        catch(e){
            console.log("Error from herer",e)
        }
    }

   

    return (
        <>
        <div className="hero-banner">
            <Hero title={heroTitle}/>
        </div>
        <div className="takeaway-section">
            <h4 className="course-title">Takeaway Skills</h4>
            <Takeaway takeaway={takeaway}/>
        </div>

        <div className="course-overview">
           <Summary courseOverview={courseOverview}/>   
        </div>

        <div>
            <CourseContent categories={courseContentData}/>
        </div>

        </>
        
    )
}

export default Details