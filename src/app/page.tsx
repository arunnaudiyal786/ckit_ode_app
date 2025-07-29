"use client";
import { CopilotChat } from "@copilotkit/react-ui";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-gray-100 p-4 border-b">
        <h1 className="text-2xl font-bold">CrewAI Flows + CopilotKit</h1>
      </header>
      <div className="flex-1">
        <CopilotChat
          instructions="You are a helpful assistant powered by CrewAI Flows."
          labels={{
            title: "CrewAI Flow Assistant",
            initial: "Hi! I'm powered by CrewAI Flows. How can I help you?",
          }}
        />
      </div>
    </div>
  );
}