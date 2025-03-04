import axios from 'axios';

const API_BASE_URL = 'https://your-backend-api-url.com';

export const fetchDevices = async () => {
    const response = await axios.get(`${API_BASE_URL}/devices`);
    return response.data;
};

export const fetchDeviceById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/devices/${id}`);
    return response.data;
};

export const updateDevice = async (id, updatedData) => {
    const response = await axios.put(`${API_BASE_URL}/devices/${id}`, updatedData);
    return response.data;
};