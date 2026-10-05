/** WhatsApp number and link builder. Kept tiny so client components can import it cheaply. */
export const WA_NUMBER = "918336097642";

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
