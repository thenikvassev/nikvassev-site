import { createNitrosendPublicClient } from "@nitrosend/sdk/browser";

/** Public website key. Safe to ship in the browser; cannot read or mutate the account. */
export const NITROSEND_PUBLIC_KEY =
  "wpkey_live_ccb20defc06a39b57265a7a00a607014";

/** Newsletter list in Nitrosend. */
export const NEWSLETTER_LIST_ID = "10418";

export const nitro = createNitrosendPublicClient({
  publicKey: NITROSEND_PUBLIC_KEY,
});
