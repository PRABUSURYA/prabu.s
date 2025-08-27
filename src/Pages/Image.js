import Card from 'react-bootstrap/Card';
import im1 from '../assert/is3.jpg'

function Image() {
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center'>
    <Card className="bg-dark text-white" style={{ border:'0', width: '400px', }} >
      <Card.Img src={im1} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card
        </Card.Text>
        <Card.Text>3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
    </div>
  );
}

export default Image;