import { Auth0Identity } from './auth0-identity.model';

// Client-side OIDC Conformant model from id_token
export class Auth0OpenIdUser {

    email: string;
    email_verified: boolean;
    name: string;
    nickname: string;
    picture: string; 
    sub: string; // Was user_id
    updated_at: string;
}