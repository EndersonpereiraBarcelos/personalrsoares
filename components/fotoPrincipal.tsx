import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Foto1 from "../public/personalrsoares/Patriocinio.png";

export default function UncontrolledExample() {
  return (
      <Carousel>
        <Carousel.Item>
          <Image src={Foto1} className="d-block" height={360} width={300} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Foto1} className="d-block" height={360} width={300} />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Foto1} className="d-block" height={360} width={300} />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}
