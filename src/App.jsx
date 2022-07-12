import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import "./styles/main.sass";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
