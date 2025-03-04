import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDeviceById, updateDevice } from "../services/api";
import { Link } from "react-router-dom";

const DeviceForm = () => {
  const { deviceuuid } = useParams();
  const [formData, setFormData] = useState({
    model: "",
    manufacturer: "",
    os: "",
    type: "",
    screen: { size: "", wide: "", narrow: "", orientation: "" },
  });

  useEffect(() => {
    const loadDevice = async () => {
      const data = await fetchDeviceById(deviceuuid);
      setFormData(data);
    };
    loadDevice();
  }, [deviceuuid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateDevice(deviceuuid, formData);
    alert("Device updated successfully!");
  };

  return (
    <div className="container mx-auto p-4 h-[100vh] flex flex-col items-center justify-center">
      <form
        className="flex flex-col h-[80%] border-2 p-4 rounded-lg shadow border border-gray-200 space-y-4"
        onSubmit={handleSubmit}
      >
        <label className="text-xl font-bold flex flex-col">
          Model:
          <input
            className="border-2 p-2 rounded-lg mt-2"
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </label>
        <label className="text-xl font-bold flex flex-col">
          Manufacturer:
          <input
            className="border-2 p-2 rounded-lg mt-2"
            type="text"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
          />
        </label>
        <label className="text-xl font-bold flex flex-col">
          OS:
          <input
            className="border-2 p-2 rounded-lg mt-2"
            type="text"
            name="os"
            value={formData.os}
            onChange={handleChange}
          />
        </label>
        <label className="text-xl font-bold flex flex-col">
          Type:
          <input
            className="border-2 p-2 rounded-lg mt-2"
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </label>
        <button className="bg-[#2A4DD0] p-4 rounded-lg text-xl" type="submit">
          Update
        </button>
        <Link to={`/device/${deviceuuid}`} className="text-blue-500 underline">
          Back to device
        </Link>
      </form>
    </div>
  );
};

export default DeviceForm;
