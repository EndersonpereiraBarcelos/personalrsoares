import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Foto1 from "../public/personalrsoares/Patriocinio.png";
import Foto2 from "../public/personalrsoares/ConsultoriaOnline.png";
import Foto3 from "../public/personalrsoares/antes_depois.png";

export default function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={Foto1} className="d-block" height={360} width={300} />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Foto2} className="d-block" height={360} width={300} />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={Foto3} className="d-block" height={360} width={300} />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
