import './Card.css';
const MyCard = ({ collection}) => {
    const URL='https://www.educative.io/'
    console.log(collection.cover_image_serving_url)
    
  return (
    <div className="card">
      <img src={URL+collection.cover_image_serving_url} alt="Card" className="card-image" />
      <h3 className="card-title">{collection.title}</h3>
      <div className="card-content">
        <p>Pro</p>
        <button className="card-button">Get Started</button>
      </div>
    </div>
  );
};

export default MyCard;