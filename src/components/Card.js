import './Card.css';
import { Link } from 'react-router-dom'; 
const Card = ({ collection}) => {
    const URL='https://www.educative.io/'
    console.log(URL+collection.authorId+'/'+collection.imageId+'/image/'+collection.coverImageId)
  return (
    <div className="card">
      <img src={URL+collection.coverImageId} alt="Card" className="card-image" />
      <h3 className="card-title">{collection.title}</h3>
      <div className="card-content">
        <span>Pro</span>
        <Link to='/details' className="card-button">Get Started</Link>
      </div>
    </div>
  );
};

export default Card;