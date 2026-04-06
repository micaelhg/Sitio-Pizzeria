
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos CSS
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer";

function App() {
 
  return (
    <>
      <div>
        <NavBar></NavBar>
        <Home></Home>
        <Footer></Footer>
      </div>
    </>
  );
}
export default App;
