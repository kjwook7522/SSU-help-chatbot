import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_SERVER_ADDRESS } from 'common/address';

/* global SearchBookBody, BookInfromation, RecommendBookBody */

export const fetchSearchBook = async (body: SearchBookBody): Promise<AxiosResponse<BookInfromation> | undefined> => {
  try {
    const formData = new FormData();
    formData.append('text', body.text);
    formData.append('option', body.option);

    const response = await axios.post(`${API_SERVER_ADDRESS}/ai/search`, formData);
    return response;
  } catch (error) {
    const { response } = error as AxiosError<BookInfromation>;

    return response;
  }
};

export const fetchBarcodeBook = async (barcode: string): Promise<AxiosResponse<BookInfromation> | undefined> => {
  try {
    const response = await axios.get(`${API_SERVER_ADDRESS}/ai/search?barcode=${barcode}`);
    return response;
  } catch (error) {
    const { response } = error as AxiosError<BookInfromation>;

    return response;
  }
};

export const fetchRecommendBooks = async (body: RecommendBookBody): Promise<AxiosResponse<BookInfromation[]> | undefined> => {
  try {
    const formData = new FormData();
    formData.append('text', body.text);
    formData.append('option', body.option);

    const response = await axios.post(`${API_SERVER_ADDRESS}/ai/recommend`, formData);
    return response;
  } catch (error) {
    const { response } = error as AxiosError<BookInfromation[]>;

    return response;
  }
};
