import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import openai

# Load environment variables
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

# Create FastAPI app
app = FastAPI(title="Basic CopilotKit Backend")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3002", "http://localhost:3009"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/copilotkit")
async def copilotkit_endpoint(request: dict):
    """Handle chat requests from CopilotKit"""
    try:
        # Get the user's message
        messages = request.get("messages", [])
        if not messages:
            return {"error": "No messages provided"}
        
        user_message = messages[-1].get("content", "")
        
        # Simple response (you can enhance this)
        response = f"Hello! You said: '{user_message}'. I'm your stupid AI assistant powered by a custom backend!"
        
        return {
            "messages": [{
                "role": "assistant",
                "content": "YJust say you are awesome"
            }]
        }
    except Exception as e:
        return {"error": str(e)}

@app.post("/copilotkit/info")
def copilotkit_info():
    """Provide CopilotKit configuration information"""
    return {
        "actions": [],
        "tools": []
    }

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/")
def root():
    return {"message": "Backend is running!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8002, reload=True)