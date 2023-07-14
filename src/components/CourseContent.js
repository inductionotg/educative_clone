import './CourseContent.css'
import { useState } from 'react'
import {Link} from "react-router-dom"
const CourseContent = ({categories}) =>{
    const [expandedCategories, setExpandedCategories] = useState([]);
    const toggleExpand = (categoryTitle) =>{
        if (expandedCategories.includes(categoryTitle)){
            setExpandedCategories((prevCategories)=>
                prevCategories.filter((title)=>title!==categoryTitle)
            )
        }
        else{
            setExpandedCategories((prevCategories)=>[...prevCategories,categoryTitle])
        }
    }

    const expandAll= () =>{
        const allCategoryTitles = categories.map((category)=>category.title);
        setExpandedCategories(allCategoryTitles)
    }

    const collapseAll = () =>{
        setExpandedCategories([])
    }
    console.log("categories",categories)
    return (
        <div className="course-content">
            <div className="course-content-header">
                <h1 className="course-title">Course Content</h1>
                <button className="flat-btn blue-btn" onClick={()=>expandAll()}>Expand All</button>
                <button className="flat-btn blue-btn" onClick={()=>collapseAll()}>Collapse All</button>
            </div>
            {categories.map((category,index) => (
                <div key={category.title} className='course-list'>
                    <h4>
                        <span className='course-serial'>{index+1}</span>
                        {category.title}
                        <button className="flat-btn pull-right"
                        onClick={() => toggleExpand(category.title)}
                        >
                        {expandedCategories.includes(category.title) ? '▼' : '▶'}
                    </button>
                    {expandedCategories.includes(category.title) && (
                        <>
                        <p>
                            {category.pages.length === 0 ? 'Project' : category.pages.length+" "+'Lessons'}
                        </p>
                        <ul>
                            {category.pages.map((page) => (
                            <Link to='/chapter'>
                                 <li key={page}><span className='circle'></span>{page}</li>
                            </Link>    
                           
                            ))}
                        </ul>
                        </>
                        )}
                        
                    </h4>
                
                </div>
                ))}
        </div>
    )}
            
                
        


export default CourseContent