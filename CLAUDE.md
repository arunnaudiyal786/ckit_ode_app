# CKit ODE App - Claude Reference

## Project Structure
- **Frontend**: Next.js app with CopilotKit integration
- **Backend**: FastAPI server with CopilotKit endpoints
- **Ports**: Frontend on 3000, Backend on 8001

## Development Setup

### Starting Servers
- Frontend: `npm run dev` (runs on localhost:3000)
- Backend: `cd crewai-backend && python basic-agent.py` (runs on localhost:8001)

### Key Files
- Frontend API route: `src/app/api/copilotkit/route.ts`
- Backend server: `crewai-backend/basic-agent.py`
- Main page: `src/app/page.tsx`
- Layout with CopilotKit provider: `src/app/layout.tsx`

## CopilotKit Configuration
- Frontend connects to backend via `/api/copilotkit` route
- Backend provides `/copilotkit` and `/copilotkit/info` endpoints
- No OpenAI integration in frontend - all AI processing done in backend
- CORS configured for localhost:3002 and localhost:3004

## Backend Endpoints
- `POST /copilotkit` - Main chat endpoint
- `POST /copilotkit/info` - CopilotKit configuration
- `GET /health` - Health check
- `GET /` - Root status

## Environment Variables
- Backend uses `OPENAI_API_KEY` from .env file