import { llmsIndex } from "@/lib/llms";

/** Reads no request data, so it is prerendered at build time. */
export function GET() {
  return new Response(llmsIndex(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
