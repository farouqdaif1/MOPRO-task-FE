import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DeviceList from "./components/DeviceList";
import DeviceDetail from "./components/DeviceDetail";
import DeviceForm from "./components/DeviceForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DeviceList />} />
        <Route path="/device/:id" element={<DeviceDetail />} />
        <Route path="/device/:deviceuuid/edit" element={<DeviceForm />} />
      </Routes>
    </Router>
  );
};

export default App;
