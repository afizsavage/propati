export interface AddPropertyProps {
  address: string;
  propertyType: string;
}
export interface AUser {
  email: string;
  password: string;
}
export interface OAuthP {
  btnText?: string;
  btnIcon: any;
  page?: string;
  subText: string;
}
export interface CUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface DropdownProps {
  buttonText: any;
  styleContent?: string;
  styleButton?: string;
  styleParent?: string;
  listItems: Array<any>;
  changeBtnText: boolean;
  menuId: string;
  autoSelectOption?: boolean;
  trackOptionsDisplay?: any;
}
export interface FCProps {
  heading: string;
  listitems: Array<any>;
}
export interface InProps {
  register?: any;
  placeholder: string;
  type: string;
  name: string;
  label?: string;
  errors?: any;
  onChange?: any;
  value?: number | string;
  customStyle?: string;
}
export interface SocialIconsP {
  link: string;
  icon: any;
}

export interface ServicesProps {
  heading: string;
  heading1: string;
  descriptionParagraph: string;
  order?: string;
  padding: string;
}

export interface MarkerProps {
  children: JSX.Element[] | JSX.Element;
  key: any;
  lat: any;
  lng: any;
  mapBounds?: any;
  handleClick?: (e: any) => void;
}

export interface FilterBtn {
  value: string;
  style?: string;
  state?: any;
  setState?: any;
  icon?: any;
}

export interface AmenityFilter {
  state?: any;
  setState?: any;
}

export interface SelectProps {
  selectStyle?: string;
  optionsStyle?: string;
  options: Array<string>;
  setValue?: boolean;
}
