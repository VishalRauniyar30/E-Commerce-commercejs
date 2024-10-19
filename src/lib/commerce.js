import Commerce from "@chec/commerce.js";

const apiKey = import.meta.env.VITE_CHEC_PUBLIC_KEY;

export const commerce = new Commerce(apiKey, true);


