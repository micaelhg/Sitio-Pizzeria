import Header from "./Header";
import { CardsPizzas } from "./CardsPizzas";

function Home() {
  return (
    <>
      <div>
        <Header></Header>
        <div className="m-5 d-flex flex-wrap justify-content-center gap-5">
          <CardsPizzas></CardsPizzas>
        </div>
      </div>
    </>
  );
}
export default Home;
