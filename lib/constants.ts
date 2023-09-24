export const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://octoart.vercel.app/api/webhook"
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/webhook`
    : `${process.env.NGROK_URL}/api/webhook`;

export const DEFAULT_PATTERN =
  "https://w3hp0wwfpdgpzwdt.public.blob.vercel-storage.com/kk49gtk-XpDOG1662fNHYhVAQu8q7qEFema4S9.png";
