// This file was empty and caused a build error. Exporting a default handler to make it a valid module.
export default function handler() {
  return new Response('Not implemented', { status: 501 });
}
