import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { toast } from 'sonner';

const BASE_URL = '';

// Interface for request options
interface RequestOptions extends AxiosRequestConfig {
  showToast?: boolean; // Optional flag to show toast messages
}

// Custom response and error types for type safety
interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  type?: 'success' | 'error' | 'warn';
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor to inject Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers && typeof config.headers.set === 'function') {
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Helper function to handle success responses
const onSuccess = <T>(response: AxiosResponse<ApiResponse<T>>, showToast?: boolean): T => {
  const { data } = response;
  if (showToast && data.message) {
    toast.success(data.message);
  }
  return data.data;
};

// Helper function to handle errors
const onError = (error: AxiosError): Promise<never> => {
  if (error.response && error.response.data) {
    const { data } = error.response as AxiosResponse<ApiResponse>;
    const description = data.message || 'An error occurred';

    switch (data.type) {
      case 'error':
        toast.error(description);
        break;
      case 'warn':
        toast.warning(description);
        break;
      default:
        toast.error(description);
        break;
    }
  } else if (error.request) {
    toast.error('Failed to connect to the server. Please check your connection.');
  } else {
    toast.error('An unexpected error occurred.');
  }

  return Promise.reject(error);
};

// Response interceptor for global error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => onError(error),
);

// Main request function
export const apiClient = async <T>(options: RequestOptions): Promise<T> => {
  const response = await axiosInstance(options);
  return onSuccess<T>(response, options.showToast);
};
