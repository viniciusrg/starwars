import axiosInstance from './axiosInstance';

export const getPlanet = async (planetName) => {
    try{
        const response = await axiosInstance.get(`/planets/?search=${planetName}`);
        return response.data;
    } catch (error) {
        console.error('Error: ', error);
    }
};
