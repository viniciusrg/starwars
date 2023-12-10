import axiosInstance from './axiosInstance';

export const getPeople = async (item) => {
    try {
        const response = await axiosInstance.get(`${item}`);
        return response.data ? response.data : { data: response };
    } catch (error) {
        console.error('Error: ', error);
    }
};
