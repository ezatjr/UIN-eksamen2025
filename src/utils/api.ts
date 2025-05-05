export interface EventImage {
    url: string;
    ratio?: string;
    width?: number;
    height?: number;
    fallback?: boolean;
  }
  
  export interface Classification {
    primary: boolean;
    segment: {
      id: string;
      name: string;
    };
    genre?: {
      id: string;
      name: string;
    };
    subGenre?: {
      id: string;
      name: string;
    };
  }
  
  export interface Venue {
    id: string;
    name: string;
    city: {
      name: string;
    };
    state?: {
      name: string;
    };
    country: {
      name: string;
      countryCode: string;
    };
    address?: {
      line1: string;
    };
    location?: {
      longitude: string;
      latitude: string;
    };
    url?: string;
    images?: EventImage[];
  }
  
  export interface Attraction {
    id: string;
    name: string;
    type: string;
    url?: string;
    locale?: string;
    images?: EventImage[];
    classifications?: Classification[];
    upcomingEvents?: {
      _total: number;
      [key: string]: number;
    };
  }
  
  export interface Price {
    type: string;
    currency: string;
    min: number;
    max: number;
  }
  
  export interface PriceRange {
    type: string;
    currency: string;
    min: number;
    max: number;
  }
  
  export interface EventResult {
    id: string;
    name: string;
    type: string;
    url: string;
    locale?: string;
    images: EventImage[];
    dates: {
      start: {
        localDate: string;
        localTime?: string;
        dateTime?: string;
      };
      timezone?: string;
      status?: {
        code: string;
      };
    };
    classifications?: Classification[];
    priceRanges?: PriceRange[];
    _embedded?: {
      venues?: Venue[];
      attractions?: Attraction[];
    };
    info?: string;
    pleaseNote?: string;
    ticketLimit?: {
      info: string;
    };
  }
  
  export interface VenueResult {
    id: string;
    name: string;
    type: string;
    locale?: string;
    postalCode?: string;
    timezone?: string;
    city: {
      name: string;
    };
    state?: {
      name: string;
      stateCode: string;
    };
    country: {
      name: string;
      countryCode: string;
    };
    address?: {
      line1: string;
    };
    location?: {
      longitude: string;
      latitude: string;
    };
    markets?: {
      id: string;
      name: string;
    }[];
    dmas?: {
      id: number;
      name: string;
    }[];
    url?: string;
    images?: EventImage[];
    parkingDetail?: string;
    accessibleSeatingDetail?: string;
    generalInfo?: {
      generalRule?: string;
      childRule?: string;
    };
  }
  
  export interface AttractionResult {
    id: string;
    name: string;
    type: string;
    locale?: string;
    url?: string;
    externalLinks?: {
      [key: string]: {
        url: string;
      }[];
    };
    images?: EventImage[];
    classifications?: Classification[];
    upcomingEvents?: {
      _total: number;
      [key: string]: number;
    };
  }
  
  export interface ApiResponse<T> {
    _embedded?: {
      events?: EventResult[];
      venues?: VenueResult[];
      attractions?: AttractionResult[];
    };
    _links?: {
      self: {
        href: string;
      };
      next?: {
        href: string;
      };
      prev?: {
        href: string;
      };
    };
    page?: {
      size: number;
      totalElements: number;
      totalPages: number;
      number: number;
    };
  }