import Routes from "./Routes/Routes";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  Aos.init({ once: true, duration: 800 });
  return (
    <div className="max-w-[1920px] mx-auto">
      <Routes />
    </div>
  );
}

export default App;
