import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { valorCL } from "../utils/valorCL";

const cardPizza = ({ nombre, precio, ingredientes, img_url }) => {
  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Img
          variant="top"
          src={img_url}
          style={{ height: "180px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <hr></hr>
          <div className="text-center">
            <p>Ingredientes:</p>
            <p className="fs-6">🍕 {ingredientes.join(", ")}.</p>{" "}
            {/*el metodo .join recorre el arreglo y pone el caracter "," */}
            <hr></hr>
            <Card.Title>Precio ${valorCL(precio)}</Card.Title>
            <div className="d-flex justify-content-between">
              <Button variant="outline-secondary">Ver más 👀</Button>
              <Button variant="dark">Añadir 🛒</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default cardPizza;
