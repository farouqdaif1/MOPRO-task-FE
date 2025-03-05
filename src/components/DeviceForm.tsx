import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDeviceById, updateDevice } from "../services/api";
import { Link } from "react-router-dom";

const DeviceForm = () => {
  const { deviceuuid } = useParams();
  const [formData, setFormData] = useState({
    deviceuuid: deviceuuid || "",
    handlerType: "",
    model: "",
    manufacturer: "",
    os: "",
    type: "",
    screen: { size: "", wide: "", narrow: "", orientation: "" },
    model_full: "",
  });

  useEffect(() => {
    const loadDevice = async () => {
      if (deviceuuid) {
        const data = await fetchDeviceById(deviceuuid);
        if (data) {
          setFormData({
            ...data,
            screen: {
              ...data.screen,
              wide: data.screen.wide.toString(),
              narrow: data.screen.narrow.toString(),
              orientation: data.screen.orientation || "",
            },
          });
        } else {
          console.error("Fetched data is undefined");
        }
      } else {
        console.error("Device UUID is undefined");
      }
    };
    loadDevice();
  }, [deviceuuid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleScreenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      screen: { ...formData.screen, [name]: value },
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!deviceuuid) {
      alert("Device UUID is missing!");
      return;
    }
    await updateDevice(deviceuuid, {
      ...formData,
      screen: {
        ...formData.screen,
        wide: Number(formData.screen.wide),
        narrow: Number(formData.screen.narrow),
      },
    });
    alert("Device updated successfully!");
  };

  return (
    <div className="container w-[50%] h-[100vh] mx-auto p-4  flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border-2 p-4 rounded-lg shadow border-gray-200"
      >
        <div className="flex flex-row flex-wrap space-x-4  space-y-4">
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
          <label className="text-xl font-bold flex flex-col">
            Model Full:
            <input
              className="border-2 p-2 rounded-lg mt-2"
              type="text"
              name="model_full"
              value={formData.model_full}
              onChange={handleChange}
            />
          </label>

          <label className="text-xl font-bold flex flex-col">
            orientation:
            <input
              className="border-2 p-2 rounded-lg mt-2"
              type="text"
              name="orientation"
              value={formData.screen.orientation}
              onChange={handleScreenChange}
            />
          </label>

          <label className="text-xl font-bold flex flex-col">
            Screen Size:
            <input
              className="border-2 p-2 rounded-lg mt-2"
              type="text"
              name="size"
              value={formData.screen.size}
              onChange={handleScreenChange}
            />
          </label>
        </div>

        <div className="w-full flex flex-row justify-between mt-4 items-center">
          <Link
            to={`/device/${deviceuuid}`}
            className="text-blue-500 underline"
          >
            Back to device
          </Link>
          <button className="bg-[#2A4DD0] p-4 rounded-lg text-xl" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeviceForm;
