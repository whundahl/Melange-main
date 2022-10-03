import axios from 'axios';
import config from '../../config.json';

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?format=%l:+%c+%C+%t+Humidity:%h+Rain:%p+Wind:%w+Pressure:%P+Sunrise:%S+Sunset:%s+MoonPhase:%m+MoonDay:%M\n`);
    return data;
  } catch (error) {
    return error;
  }
};


