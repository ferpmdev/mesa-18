import Hotels from '../hoteles.json';
import { useParams } from 'react-router-dom';

export const Details = () => {
  const params = useParams();
  console.log(params);
  const hotel = Hotels[params.id - 1];

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={hotel.ima} class="card-img-top" alt={hotel.name} />
      <div class="card-body">
        <h5 class="card-title">{hotel.name}</h5>
        <p class="card-text">{hotel.description}</p>
      </div>
    </div>
  );
};
