# Tech Stack

- Python backend using FastAPI; ASGI server is `uvicorn[standard]`.
- Request models use Pydantic `BaseModel`.
- Persistence: SQLAlchemy ORM with SQLite (`sqlite:///./database.db`).
- Authentication: PyJWT HS256 and FastAPI `HTTPBearer` dependency.
- CSV upload uses FastAPI `UploadFile`/`File`, `python-multipart`, Python `csv`, and filesystem operations.
- Dependencies in `requirements.txt`: `fastapi`, `uvicorn[standard]`, `sqlalchemy`, `PyJWT`, `python-multipart`.
- Project is on Windows; Serena language server is Python; text encoding UTF-8.
- No frontend package manifest, migration framework, or test framework was found in the project root during onboarding.