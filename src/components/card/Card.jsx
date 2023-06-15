import { Link } from 'react-router-dom';

export const Card = ({ hoteles }) => {
  console.log(hoteles);

  return (
    <div className="container-sm">
      {hoteles &&
        hoteles.map((hotel) => (
          <div
            className="row align-items-start p-3"
            style={{
              marginTop: '100px',
              backgroundColor: 'Highlight',
              borderRadius: '10px',
            }}
            key={hotel.id}
          >
            <h4>{hotel.name}</h4>
            <Link className="btn btn-primary p-3" to={`/details/${hotel.id}`}>
              ver detalles
            </Link>
          </div>
        ))}
    </div>
  );
};
