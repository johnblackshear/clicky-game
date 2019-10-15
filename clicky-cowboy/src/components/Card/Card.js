import react from 'react';
import './Card.css';

const Card = props => {
    <div className="card">
        <div className="card-img">
            <img alt={props.name} src={props.image}/>

        </div>
    </div>
}

export default Card;