import { createRemoteJWKSet } from 'jose/jwks/remote';
import { jwtVerify } from 'jose/jwt/verify';
const JWKS = createRemoteJWKSet(
  new URL(
    process.env.AAD_JWKS ||
      // 'https://devfmgidp.b2clogin.com/devfmgidp.onmicrosoft.com/discovery/v2.0/keys?p=b2c_1a_signup_signin'
      'https://sbxfmgidp.b2clogin.com/sbxfmgidp.onmicrosoft.com/discovery/v2.0/keys?p=B2C_1A_signup_signin'
  )
);
export const authCheckerFunction = async (token: string) => {

  console.log(token)
  if (token) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { protectedHeader, payload } = await jwtVerify(token, JWKS);
      if (
        true // check for specific payload data here

        // authorizedRoles.length &&
        // (payload as JWTPayloadWithDCERoles)['dce-roles']?.some((dceRole) => authorizedRoles.includes(dceRole))
      ) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  return false;
} 

