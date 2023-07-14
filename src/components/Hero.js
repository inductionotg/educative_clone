import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock,faChartSimple,faLayerGroup,faGraduationCap} from '@fortawesome/free-solid-svg-icons'
const Hero = ({title}) =>{
    return (
        <div className='hero-content'>
        <h1>{title}</h1>
        <div className='hero-icon'>
            <div><FontAwesomeIcon icon={faChartSimple} size="xl" />Beginner</div>
            <div> <FontAwesomeIcon icon={faLayerGroup} size="xl" />124 Lessons</div>
            <div><FontAwesomeIcon icon={faClock} size="xl"/>12h</div>
            <div><FontAwesomeIcon icon={faGraduationCap} size="xl" />Certificate of Completion</div>
        </div>
    </div>
    )
}
export default Hero