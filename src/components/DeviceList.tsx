import { useState, useEffect } from "react";
import { fetchDevices } from "../services/fakeapi";
import { Link } from "react-router-dom";

interface Screen {
  size: string;
  wide: number;
  narrow: number;
  orientation?: string; // Optional because not all objects have this property
}

interface Device {
  deviceuuid: string;
  handlerType: string;
  manufacturer: string;
  model: string;
  os: string;
  screen: Screen;
  type: string;
  disabledUntil?: number; // Optional because not all objects have this property
  model_full?: string; // Optional, only present in some iOS devices
}

const DeviceList = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadDevices = async () => {
      const data = await fetchDevices();
      setDevices(data);
    };
    loadDevices();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredDevices = devices.filter((device) => {
    const searchLower = search.toLowerCase();

    // Check if the search term exists in any of the relevant fields
    return (
      device.model.toLowerCase().includes(searchLower) ||
      device.manufacturer.toLowerCase().includes(searchLower) ||
      device.os.toLowerCase().includes(searchLower) ||
      device.type.toLowerCase().includes(searchLower) ||
      device.screen.size.toLowerCase().includes(searchLower) ||
      (device.model_full &&
        device.model_full.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold">Device Management</h1>
      <input
        type="text"
        placeholder="Search by model, manufacturer, OS, type, screen size, etc."
        value={search}
        onChange={handleSearch}
        className="border rounded-xl p-2 my-4 w-full"
      />
      <ul className="flex flex-wrap items-center justify-between space-x-4 ">
        {filteredDevices.map((device) => (
          <Link
            to={`/device/${device.deviceuuid}`}
            key={device.deviceuuid}
            className={`p-4 border-2 my-2 rounded-xl w-[30%] h-[150px] hover:border-6 hover:border-[#2A4DD0] hover:bg-[#2A4DD0] ${
              device.disabledUntil
                ? "bg-red-500 text-white hover:border-6 hover:border-[#2A4DD0] hover:bg-[#2A4DD0]"
                : ""
            }`}
          >
            <li>
              <h1 className="text-xl mb-2">
                <strong>{device.model}</strong> - {device.manufacturer} (
                {device.os})
              </h1>
              <p className="text-lg text-[#909193] italic">
                Type: {device.type}
              </p>
              <p className="text-lg text-[#909193] italic">
                Screen: {device.screen.size}
              </p>
              {device.model_full && (
                <p className="text-lg text-[#909193] italic">
                  Full Model: {device.model_full}
                </p>
              )}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DeviceList;
