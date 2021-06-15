import { createRemoteJWKSet } from 'jose/jwks/remote';
import { jwtVerify } from 'jose/jwt/verify';
const JWKS = createRemoteJWKSet(
  new URL(
    process.env.AAD_JWKS || 'https://login.microsoftonline.com/common/discovery/keys'
  )
);
export const authCheckerFunction = async (token: string) => {

  if (token) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { protectedHeader, payload } = await jwtVerify(token, JWKS);
      if (
        true // check for specific payload data here

        // authorizedRoles.length &&
        // (payload as any)['custom-roles']?.some((role) => authorizedRoles.includes(role))
      ) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      throw new Error('Token Validation Error: '+error.message);
    }
  }
  return false;
} 

