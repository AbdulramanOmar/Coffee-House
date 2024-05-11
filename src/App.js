import "./App.css";
import {
  Navbar,
  Hero,
  Footer,
  Menu,
  Offer,
  Roast,
  About,
  Delivery,
} from "./Component";
import { BreakfastCards, MenuCards } from "./Component/Assent/Data";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Offer />
      <About />
      <Menu product={MenuCards} />
      <Delivery />
      <Roast />
      <Menu product={BreakfastCards} />
      <Footer />
    </>
  );
}

export default App;
