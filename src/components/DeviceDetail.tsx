import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDeviceById } from "../services/api";
import { Link, useNavigate } from "react-router-dom";

interface Screen {
  size: string;
  wide: number;
  narrow: number;
  orientation?: string;
}

interface Device {
  deviceuuid: string;
  handlerType: string;
  manufacturer: string;
  model: string;
  os: string;
  screen: Screen;
  type: string;
  disabledUntil?: number;
  model_full?: string;
}

const DeviceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [device, setDevice] = useState<Device | null>(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    if (!id) {
      return;
    }
    const loadDevice = async () => {
      const data = await fetchDeviceById(id);
      if (data) {
        setDevice(data);
      } else {
        console.error("Device not found");
      }
    };
    loadDevice();
  }, [id]);

  if (!device) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4 h-[100vh] flex flex-col items-center justify-center">
      <div className=" w-[50%] p-4 rounded-lg shadow border border-gray-200 flex flex-col space-y-4">
        <h1 className="text-4xl font-bold">{device.model} Details</h1>
        <p className="text-xl   italic">
          <strong>Manufacturer:</strong> {device.manufacturer}
        </p>
        <p className="text-xl   italic">
          <strong>OS:</strong> {device.os}
        </p>
        <p className="text-xl   italic">
          <strong>Type:</strong> {device.type}
        </p>
        <p className="text-xl   italic">
          <strong>Screen Size:</strong> {device.screen.size}
        </p>
        {device.screen.orientation && (
          <p className="text-xl   italic">
            <strong>Orientation:</strong> {device.screen.orientation}
          </p>
        )}
        {device.model_full && (
          <p className="text-xl   italic">
            <strong>Full Model:</strong> {device.model_full}
          </p>
        )}
        <div className="mt-4 space-x-4">
          <Link to="/" className="text-blue-500 underline">
            Back to list
          </Link>
          <button
            onClick={() => navigate(`/device/${id}/edit`)} // Navigate to the edit page
            className="bg-[#2A4DD0] text-white px-4 py-2 rounded hover:bg-[#2a4ed0dc]"
          >
            Edit Device
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetail;
