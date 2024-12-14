export interface TokenData {
  accessToken: string;
  refreshToken: string;
}

export interface DecodedToken {
  unique_name: string;
  role: string;
  exp: number; // Token expiration timestamp
}
