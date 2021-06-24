import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container } from "react-bootstrap"; 
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from './screens/CartScreen';
function App() {
  return (
    <div>
      <Router>     
        <Header />
        <main className="py-3">         
           <Container> 
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen}/>  
           </Container>
        </main>
      
      <Footer/> 
      </Router>
      
    </div>
  );
}

export default App;
