import "./Style.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import { DataContextProvider } from "./context/DataContext";
import Summary from "./pages/Summary";

function App() {
  return (
    <div className="container">
      <DataContextProvider>
        <SideNav />
        <main>
          <Header />
          <Summary />
        </main>
      </DataContextProvider>
    </div>
  );
}

export default App;
