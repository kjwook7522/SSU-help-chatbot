import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_SERVER_ADDRESS } from 'common/address';

/* global SignUpBody, SignUpResponse */

export const fetchSignUp = async (body: SignUpBody): Promise<AxiosResponse<SignUpResponse> | undefined> => {
  const response = await axios
    .post<SignUpResponse>(`${API_SERVER_ADDRESS}/signup`, body)
    .catch((error: AxiosError<SignUpResponse>) => {
      if (error.response?.status !== 409) {
        alert(`error: ${error.response?.statusText}(${error.response?.status})`);
        return undefined;
      }
      return error.response;
    });

  return response;
};
