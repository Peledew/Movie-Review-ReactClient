import { refreshAccessToken } from './userService';

export const customFetch = async (url: string, options: RequestInit = {}) => {
  let accessToken = localStorage.getItem('accessToken');

  // Ensure headers exist and add Authorization
  options.headers = {
    ...(options.headers || {}),
    Authorization: `Bearer ${accessToken ?? ''}`, // Default to an empty string if null
    'Content-Type': 'application/json', // Add content type if needed
  };

  try {
    const response = await fetch(url, options);

    // Handle 401 response: refresh token and retry
    if (response.status === 401) {
      accessToken = await refreshAccessToken();
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);

        // Update Authorization header and retry the request
        options.headers = {
          ...(options.headers || {}),
          Authorization: `Bearer ${accessToken}`,
        };
        return fetch(url, options); // Retry the original request
      }
    }

    return response; // Return original response if no 401
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
