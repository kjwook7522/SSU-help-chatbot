import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_SERVER_ADDRESS } from 'common/address';

/* global SignUpBody, SignUpResponse */

export const fetchSignUp = async (body: SignUpBody): Promise<AxiosResponse<SignUpResponse> | undefined> => {
  try {
    const response = await axios.post<SignUpResponse>(`${API_SERVER_ADDRESS}/signup`, body);
    return response;
  } catch (error) {
    const { response } = error as AxiosError<SignUpResponse>;
    if (response?.status !== 409) {
      alert(`error: ${response?.statusText}(${response?.status})`);
    }
    
    return response;
  }
};
