import Card from 'react-bootstrap/Card';
import im1 from '../assert/is1.jpg'

function Image() {
  return (
    <Card className="bg-dark text-white" style={{ width: '400px' }} >
      <Card.Img src={im1} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card
        </Card.Text>
        <Card.Text>3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Image;