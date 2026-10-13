import { llmsFull } from "@/lib/llms";

/** Reads no request data, so it is prerendered at build time. */
export function GET() {
  return new Response(llmsFull(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
