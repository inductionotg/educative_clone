
import './Tabs.css'
import { useState,useEffect } from 'react'
import Shimmer from './Shimmer'
import Card from './Card'
import MyCard from './MyCard'
const Tabs = () =>{
    const [activeTab,setActiveTab] = useState(0)
    const [collectionData,setCollectionData] = useState([])
    const [dataone,setDataone]=useState([])

    const tabs=[
        { id: 0, title: 'Home', endpoint: 'https://www.educative.io/api/collection/10370001/5658174447157248/get-recommendations?fetch_recommendation_details=true'},
        { id: 1, title: 'My Course', endpoint: 'https://www.educative.io/_next/data/230707-0729-bbfd187/catalog/prepare-for-interview.json'},
        
    ]
    useEffect(()=>{
        fetchData()
    },[activeTab])
    async function fetchData(){
        try{
            const response = await fetch(tabs[activeTab].endpoint)
            const responseData = await response.json();
            const higherLevelWorks = responseData.recommendations?.higher_level_works;
            const ssrContent = responseData?.pageProps?.ssrContent;
            const landingPageDetails = ssrContent?.landingPageDetails;
            console.log(landingPageDetails)
            
            switch(activeTab){
                case 0:
                    if (higherLevelWorks && higherLevelWorks.length > 0) {
                        const collectionData = higherLevelWorks.map(collection => {
                            return {
                                title: collection.title,
                                authorId: collection.author_id,
                                imageId: collection.profile_image.split('/').pop(),
                                coverImageId: collection.cover_image_serving_url
                                };
                            });
                            setCollectionData(collectionData)
                        }
                    
                    break;
                case 1:
                    const ssrContent = responseData?.pageProps?.ssrContent;
                    if (ssrContent) {
                        const landingPageDetails = ssrContent?.landingPageDetails;
                        console.log(landingPageDetails)
                        if (landingPageDetails) {
                        const popularListsData = landingPageDetails.popular_lists || [];
                        setDataone(popularListsData)}}
                    break;
                default:
                    console.log("No API")    
                }
            
            }
            catch(e){
                console.log(e)
            }
        }
       
    
    const handleTabClick=(tabIndex)=>{
        setActiveTab(tabIndex)
    }

    
    return (
        <div class="tabs-container">
        <div class="tabs">
            {tabs.map((tab) => (
            <button
                key={tab.id}
                className={activeTab === tab.id ? 'active' : ''}
                onClick={() => handleTabClick(tab.id)}
            >
                {tab.title}
            </button>
            ))}
            
           
        </div>
  
        <div class="tab-content">
            {activeTab === 1  && dataone.length===0 && <Shimmer/>}
            {activeTab === 0  && collectionData.length===0 && <Shimmer/>}
        
            <>
                {activeTab === 0 && collectionData.length > 0 && (
                        <div className='tab-content-card'>
                        {collectionData.map((collection, index) => (
                            <Card collection={collection}/>
                        ))}
                        </div>
                        
                    )}
            </>
            <>
                {activeTab === 1 && dataone.length > 0 &&(
                <div className='tab-content-card'>
                    {dataone.map((item) => (
                        <MyCard collection={item}/>
                    ))}
                </div>
                )}
            </>
            
        </div>
</div>
    )
}
export default Tabs