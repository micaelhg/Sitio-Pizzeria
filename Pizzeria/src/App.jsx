
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos CSS
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer";
import Register from "./components/Register";

function App() {
 
  return (
    <>
      <div>
        <NavBar></NavBar>
        <Register></Register>
        <Home></Home>
        <Footer></Footer>
      </div>
    </>
  );
}
export default App;
