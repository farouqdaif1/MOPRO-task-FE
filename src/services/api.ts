import axios from 'axios';
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
const API_BASE_URL = 'http://127.0.0.1:8000';

export const fetchDevices = async () => {
    const response = await axios.get(`${API_BASE_URL}/devices/`);
    return response.data;
};

export const fetchDeviceById = async (id: string) => {
    const response = await axios.get(`${API_BASE_URL}/devices/${id}`);
    return response.data;
};

export const updateDevice = async (id: string, updatedData: Device) => {
    const response = await axios.put(`${API_BASE_URL}/devices/${id}`, updatedData);
    return response.data;
};

export const createDevice = async (newData: Device) => {
    const response = await axios.post(`${API_BASE_URL}/devices/`, newData);
    return response.data;
}

