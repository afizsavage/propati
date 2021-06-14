export interface AddPropertyProps {
  address: string;
  propertyType: string;
}
export interface AUser {
  email: string;
  password: string;
}
export interface OAuthP {
  btnText: string;
  btnIcon: any;
}
export interface CUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
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
