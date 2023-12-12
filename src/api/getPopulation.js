import axios from 'axios';

export const getPopulation = async (population) => {
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/`);
    const planets = response.data.results;

    // Filtrar planetas com base na população
    const filteredPlanets = planets.filter((planet) => {
      return parseInt(planet.population, 10) === population;
    });

    return filteredPlanets;
  } catch (error) {
    console.error('Erro ao obter planetas:', error);
    throw error;
  }
};
