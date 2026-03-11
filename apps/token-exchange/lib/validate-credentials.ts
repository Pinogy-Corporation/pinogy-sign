/**
 * Validates third-party credentials for the credential-based exchange flow.
 * Returns false for the trusted exchange flow (which uses TOKEN_EXCHANGE_SECRET instead).
 */
export async function validateThirdPartyCredentials(
  _credentials: Record<string, unknown>,
): Promise<boolean> {
  return Promise.resolve(false);
}
