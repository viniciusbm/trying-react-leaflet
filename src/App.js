import "./App.css";
import { MapDemo } from "./MapDemo";

function App() {
  const items = [
    {
      position: [-23.9961, -46.3319],
      icon: {
        iconUrl: "ship-icons/big-ship.png",
        iconSize: 80,
      },
      label: "Big ship",
    },
    {
      position: [-23.9921, -46.3419],
      icon: {
        iconUrl: "ship-icons/jet-ski.png",
        iconSize: 80,
      },
      label: "Jet Ski",
    },
    {
      position: [-23.9861, -46.3319],
      icon: {
        iconUrl: "ship-icons/sailboat.png",
        iconSize: 80,
      },
      label: "Sail boat",
    },
    {
      position: [-23.9821, -46.3219],
      icon: {
        iconUrl: "ship-icons/submarine.png",
        iconSize: 80,
      },
      label: "Submarine",
    },
    {
      position: [-23.9761, -46.3419],
      icon: {
        iconUrl: "ship-icons/yacht.png",
        iconSize: 80,
      },
      label: "Yacht",
    },
  ];
  return (
    <div className="App">
      <MapDemo centre={[-23.9801, -46.3119]} items={items} />
    </div>
  );
}

export default App;
