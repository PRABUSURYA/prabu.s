import Carousel from 'react-bootstrap/Carousel';
import is1 from '../assert/is1.jpg';
import is2 from '../assert/is2.jpg';
import is3 from '../assert/is3.jpg';

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block vh-100 w-100" src={is1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block vh-100 w-100" src={is2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block vh-100 w-100" src={is3} alt="Third slide" />
      </Carousel.Item>
 </Carousel>
  );
}


export default MyCarousel;
