 import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText } from "ai";
export const maxDuration = 30;
export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Invalid messages" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    const result = streamText({
      model: google("gemini-3.6-flash"),
      messages: await convertToModelMessages(messages),
    });
    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Gemini API error:", error);
    return new Response(
      JSON.stringify({
        error: "Gemini request failed",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
