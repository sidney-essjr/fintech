import "./Style.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Summary from "./pages/Summary";

function App() {
  return (
    <>
      <SideNav />
      <main>
        <Header />
        <Summary />
      </main>
    </>
  );
}

export default App;
