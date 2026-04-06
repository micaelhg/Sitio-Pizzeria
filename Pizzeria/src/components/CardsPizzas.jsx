import { dbPizzas } from "../utils/dbFicticia";
import CardPizza from "./CardPizza";

export const CardsPizzas = () => {
  const allCards = dbPizzas.map((pizza) => (
    <CardPizza
      key={pizza.id}
      nombre={pizza.nombre}
      precio={pizza.precio}
      ingredientes={pizza.ingredientes}
      img_url={pizza.img}
    />
  ));

  return <>{allCards}</>;
};


