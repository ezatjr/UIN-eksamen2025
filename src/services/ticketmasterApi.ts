import { EventResult, AttractionResult, VenueResult, ApiResponse } from '../types/api';

// Ticketmaster API Key
const API_KEY = 'Ox90qokGcqgD08yQVKM9iDpXjic6b8hD';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

// Helper to handle API errors
const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API Error: ${response.status} ${error}`);
  }
  return response.json();
};

// Fetch featured events for homepage
export const fetchFeaturedEvents = async (size = 6): Promise<EventResult[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/events.json?apikey=${API_KEY}&size=${size}`
    );
    const data = await handleResponse<ApiResponse<EventResult>>(response);
    return data._embedded?.events || [];
  } catch (error) {
    console.error('Error fetching featured events:', error);
    return [];
  }
};

// Fetch events by city for homepage section
export const fetchEventsByCity = async (city: string, size = 10): Promise<EventResult[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/events.json?apikey=${API_KEY}&city=${city}&size=${size}`
    );
    const data = await handleResponse<ApiResponse<EventResult>>(response);
    return data._embedded?.events || [];
  } catch (error) {
    console.error(`Error fetching events for city ${city}:`, error);
    return [];
  }
};

// Fetch single event for event page
export const fetchEvent = async (eventId: string): Promise<EventResult | null> => {
  try {
    const response = await fetch(
      `${BASE_URL}/events/${eventId}.json?apikey=${API_KEY}`
    );
    const data = await handleResponse<EventResult>(response);
    return data;
  } catch (error) {
    console.error(`Error fetching event ${eventId}:`, error);
    return null;
  }
};

// Fetch events for a category page
export const fetchEventsByCategory = async (
  categoryName: string,
  size = 12,
  page = 0,
  countryCode?: string,
  city?: string,
  startDateTime?: string,
  endDateTime?: string
): Promise<ApiResponse<EventResult>> => {
  try {
    let url = `${BASE_URL}/events.json?apikey=${API_KEY}&classificationName=${categoryName}&size=${size}&page=${page}`;
    
    if (countryCode) url += `&countryCode=${countryCode}`;
    if (city) url += `&city=${city}`;
    if (startDateTime) url += `&startDateTime=${startDateTime}`;
    if (endDateTime) url += `&endDateTime=${endDateTime}`;
    
    const response = await fetch(url);
    return await handleResponse<ApiResponse<EventResult>>(response);
  } catch (error) {
    console.error(`Error fetching events for category ${categoryName}:`, error);
    return {};
  }
};

// Fetch attractions for category page
export const fetchAttractions = async (
  keyword?: string,
  size = 12,
  page = 0
): Promise<ApiResponse<AttractionResult>> => {
  try {
    let url = `${BASE_URL}/attractions.json?apikey=${API_KEY}&size=${size}&page=${page}`;
    if (keyword) url += `&keyword=${keyword}`;
    
    const response = await fetch(url);
    return await handleResponse<ApiResponse<AttractionResult>>(response);
  } catch (error) {
    console.error('Error fetching attractions:', error);
    return {};
  }
};

// Fetch venues for category page
export const fetchVenues = async (
  keyword?: string,
  size = 12,
  page = 0,
  countryCode?: string,
  city?: string
): Promise<ApiResponse<VenueResult>> => {
  try {
    let url = `${BASE_URL}/venues.json?apikey=${API_KEY}&size=${size}&page=${page}`;
    if (keyword) url += `&keyword=${keyword}`;
    if (countryCode) url += `&countryCode=${countryCode}`;
    if (city) url += `&city=${city}`;
    
    const response = await fetch(url);
    return await handleResponse<ApiResponse<VenueResult>>(response);
  } catch (error) {
    console.error('Error fetching venues:', error);
    return {};
  }
};

// Search for events, attractions, and venues
export const searchAll = async (keyword: string, size = 5): Promise<{
  events: EventResult[];
  attractions: AttractionResult[];
  venues: VenueResult[];
}> => {
  try {
    // Fetch events
    const eventsResponse = await fetch(
      `${BASE_URL}/events.json?apikey=${API_KEY}&keyword=${keyword}&size=${size}`
    );
    const eventsData = await handleResponse<ApiResponse<EventResult>>(eventsResponse);

    // Fetch attractions
    const attractionsResponse = await fetch(
      `${BASE_URL}/attractions.json?apikey=${API_KEY}&keyword=${keyword}&size=${size}`
    );
    const attractionsData = await handleResponse<ApiResponse<AttractionResult>>(attractionsResponse);

    // Fetch venues
    const venuesResponse = await fetch(
      `${BASE_URL}/venues.json?apikey=${API_KEY}&keyword=${keyword}&size=${size}`
    );
    const venuesData = await handleResponse<ApiResponse<VenueResult>>(venuesResponse);

    return {
      events: eventsData._embedded?.events || [],
      attractions: attractionsData._embedded?.attractions || [],
      venues: venuesData._embedded?.venues || []
    };
  } catch (error) {
    console.error(`Error searching for "${keyword}":`, error);
    return {
      events: [],
      attractions: [],
      venues: []
    };
  }
};