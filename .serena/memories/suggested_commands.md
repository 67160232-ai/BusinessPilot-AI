# Suggested Commands (Windows)

Run from `C:\\DWB_Work_Space\\BusinessPilot-AI-Backend-main`.

- Create virtual environment: `py -m venv .venv`
- Activate in PowerShell: `.\\.venv\\Scripts\\Activate.ps1`
- Install dependencies: `py -m pip install -r requirements.txt`
- Start dev API: `py -m uvicorn main:app --reload`
- Interactive API docs: open `http://127.0.0.1:8000/docs`; ReDoc: `http://127.0.0.1:8000/redoc`.
- Stop the dev server with `Ctrl+C`.
- No project-specific test/lint/format commands are configured or documented in the inspected files. `database.db` is runtime data; avoid deleting or resetting it casually.