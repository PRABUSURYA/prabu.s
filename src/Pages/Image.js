import Card from 'react-bootstrap/Card';
import im1 from '../assert/is1.jpg'

function Image() {
  return (
    <Card className="bg-dark text-white" style={{width:'200px'}} >
      <Card.Img src={im1} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Image;