import Hotels from '../hoteles.json';
import { Card } from '../components/card/Card';

const Home = () => {
  const hoteles = Hotels;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {/* <div className="container-sm"> */}
      <h1>Listado de Hoteles en México</h1>
      <Card hoteles={hoteles} />
    </div>
  );
};

export default Home;
