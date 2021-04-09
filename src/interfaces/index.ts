export interface CUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AUser {
  email: string;
  password: string;
}

export interface OAuthP {
  btnText: string;
  btnIcon: any;
}

export interface InProps {
  register: any;
  placeholder: string;
  type: string;
  name: string;
  label: string;
  errors: any;
}
