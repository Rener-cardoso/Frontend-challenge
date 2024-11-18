export interface RestaurantProps {
  address1: string;
  address2: string;
  address3: null
  ccy: string;
  ccySymbol: string;
  city: string;
  country: string;
  county: string;
  currency: string;
  demoFlag: number;
  description: null
  id: number;
  internalName: string;
  liveFlag: number
  locale: string;
  name: string;
  postcode: string;
  timeZone: string;
  timezoneOffset: string;
  webSettings: {
    backgroundColour: string;
    bannerImage: string;
    id: number;
    navBackgroundColour: string;
    primaryColour: string;
    primaryColourHover: string;
    venueId: number;
  }
}

export interface MenuProps {
  sections: {
    description: null;
    id: number;
    images: {
      id: number;
      image: string;
    }[];
    items: {
      alcoholic: number;
      availabilityType: string;
      available: boolean;
      description: string;
      id: number;
      images: {
        id: string;
        image: string;
      }[];
      name: string;
      position: number;
      price: number;
      sku: string;
      modifiers: {
        id: string;
        name: string;
        minChoices: number;
        maxChoices: number;
        items: {
          id: number;
          name: string;
          price: number;
          maxChoices: number;
          position: number;
          visible: number;
          availabilityType: string;
          available: boolean;
        }[];
      }[];
      visible: number;
    }[];
    name: string;
    position: number;
    visible: number;
  }[];
}

interface CartItem {
  name: string;
  unityPrice: number;
  quantity: number;
  modifierItemSelected: {
    name: string;
    price: number;
  };
}

interface MenuState {
  cart: CartItem[];
}

export interface CartSelectorProps {
  menu: MenuState;
}