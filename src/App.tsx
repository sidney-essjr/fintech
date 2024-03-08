import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import { DataContextProvider } from "./context/DataContext";
import Sales from "./pages/Sales";
import Summary from "./pages/Summary";
import Sale from "./pages/Sale";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <SideNav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/vendas" element={<Sales />} />
              <Route path="/vendas/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
