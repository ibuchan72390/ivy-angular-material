import { Auth0Identity } from './auth0-identity.model';

// This model WAS the Auth0 User model from the original implementation
// As Auth0 switched to an OIDC conformant model, the Auth0OpenIdUser was updated
// Although most of their functionality is OIDC conformant, some calls still return this model
// We're going to maintain this model as a separete Auth0OpenIdUser until we can properly remove it
export class Auth0User {

    email: string;
    email_verified: boolean;
    username: string;
    phone_number: string;
    phone_verified: string;
    user_id: string;
    updated_at: string;
    created_at: string;
    identities: Auth0Identity[];
    picture: string;
    name: string;
    nickname: string;
    roles: string[];
    multifactor: string[];
    last_ip: string;
    last_login: string;
    logins_count: number;
    blocked: boolean;
    given_name: string;
    family_name: string;

    app_metadata: any;
    user_metadata: any;
}