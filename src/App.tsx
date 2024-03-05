import { Fragment } from "react/jsx-runtime";
import "./Style.css";
import DataRange from "./components/DataRange";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Summary from "./pages/Summary";
import { DataContextProvider } from "./context/DataContext";

function App() {
  return (
    <div className="container">
      <DataContextProvider>
        <SideNav />
        <main>
          <Header />
          <DataRange />
          <Summary />
        </main>
      </DataContextProvider>
    </div>
  );
}

export default App;
