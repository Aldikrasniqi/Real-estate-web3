import { API_AGENT_URL } from '../constants/api';
import axios from 'axios';
const token = localStorage.getItem('user');
export const createProperty = async (
  streetAddress: string,
  city: string,
  state: string,
  zipCode: string,
  status: string,
  property: string,
  badrooms: number,
  bathrooms: number,
  description: string,
  surface: number,
  amentities: string,
  images: string,
  agentId: string
) => {
  const formData = {
    address: {
      streetAddress,
      city,
      state,
      zipCode,
    },
    status,
    property,
    badrooms,
    bathrooms,
    description,
    size: surface,
    amentities,
    images
  };
  try {
    if (token) {
      const user = JSON.parse(token);
      
      const response = await axios.post(`${API_AGENT_URL}properties?agentId=${agentId}`, formData, {
        headers: {
          Authorization: 'Bearer ' + user.access_token,
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      } else {
        throw new Error(`Failed to create property. Status: ${response.status}`);
      }
    }
  } catch (error) {
    console.error('Error creating property:', error);
  }
};
