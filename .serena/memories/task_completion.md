# Task Completion / Verification

- No automated test suite, linter, formatter, or type-checker configuration was found during onboarding; do not claim tests passed unless tests are added/run.
- For backend changes, at minimum compile-check: `py -m compileall main.py`.
- For endpoint behavior changes, start `py -m uvicorn main:app --reload` and exercise the relevant route in `http://127.0.0.1:8000/docs` or with an HTTP client; include auth setup for protected routes.
- For changes to CSV analysis, test valid data plus missing headers, invalid dates/numbers, and empty/invalid CSV cases.
- Do not use the live `database.db` for destructive tests. Use a temporary test database or a backup.
- Before declaring production readiness, address the security gaps documented in `mem:core` and test user isolation for uploaded files.