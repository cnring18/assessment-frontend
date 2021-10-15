import { IPageFetchResponse } from './fetchUtilsModel';
import { IWeatherData } from '../types/types';

export const fetchPage = (id: string) => {
  return fetch(
    `http://localhost:3030/page/${id}`,
    {
      method: 'GET',
    }
  )
  .then(res => res.json())
  .then((response) => {
    if (response.data) {
      return response.data as IPageFetchResponse;
    }

    return Promise.reject(response.error);
  });
};

export const fetchWeather = (lat: number, lon: number) => {
  return fetch(
    `http://localhost:3030/integration/weather?lat=${lat}&lon=${lon}`,
    {
      method: 'GET',
    }
  )
  .then(res => res.json())
  .then((response) => {
    if (response.data) {
      return response.data as IWeatherData;
    }

    return Promise.reject(response.error);
  });
};