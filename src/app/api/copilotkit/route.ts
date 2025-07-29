import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import OpenAI from "openai";
import { NextRequest } from "next/server";

const openai = new OpenAI({ apiKey: "dummy-key" }); // Use a fake key
const serviceAdapter = new OpenAIAdapter({ openai });

const runtime = new CopilotRuntime({
  remoteEndpoints: [
    {
      url: "http://localhost:8002/copilotkit",
    },
  ],
});

export const POST = async (req: NextRequest) => {
  try {
    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
      runtime,
      serviceAdapter,
      endpoint: "/api/copilotkit",
    });
    return await handleRequest(req);
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Remote endpoint unavailable. No fallback to OpenAI." }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }
};