# BusinessPilot AI Backend — Core

- Single-file FastAPI backend: `main.py`; dependency pins are not present in `requirements.txt`.
- SQLite database file `database.db` at project root; SQLAlchemy model `User` and `Base.metadata.create_all()` run at import/startup.
- Main product flow: register/login → JWT-protected account endpoints → upload CSV → map the user's CSV headers to date/revenue/expense/profit → analyze business data.
- `POST /upload` returns the CSV header names in `columns` so the frontend can populate mapping dropdowns. `POST /analyze` now requires `date_column`, `revenue_column`, `expense_column`, and `profit_column`; use `profit_column="__calculated__"` when profit should be calculated as revenue minus expense.
- CSV date format currently must be `%Y-%m-%d`. Output includes totals, profit/loss, margin, recent-period burn rate/runway, trends, score/status, and recommendations.
- Uploaded files are stored under shared project-level `uploads/`, not partitioned by user. Treat ownership/isolation as a security gap before multi-user deployment.
- Security gaps observed in current implementation: passwords stored and compared as plaintext; hardcoded JWT secret; CORS allows all origins with credentials; logout revocation only in process memory; upload accepts CSV by extension and writes the supplied filename. Do not represent this as production-secure without addressing these.
- Read `mem:tech_stack` for dependencies/runtime, `mem:suggested_commands` for Windows commands, `mem:conventions` for implementation patterns, and `mem:task_completion` for verification expectations.