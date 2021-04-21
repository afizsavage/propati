let accessToken: string = "";

export const setAccessToken = (incomingToken: string) => {
  accessToken = incomingToken;
};

export const getAccessToken = () => {
  return accessToken;
};
