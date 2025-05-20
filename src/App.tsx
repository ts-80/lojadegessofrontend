import Header from "./components/Header/Header";
import Home from "./paginas/Produtos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./paginas/Home";
import Carrinho from "./paginas/carrinho";
import Calculadora from "./paginas/Calculadora";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/produtos" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/calculadora" element={<Calculadora />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
