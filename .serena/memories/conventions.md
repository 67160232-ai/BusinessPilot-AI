# Code Conventions

- Current implementation is concentrated in `main.py`, grouped with uppercase comment banners by concern/endpoint.
- API handlers are synchronous `def` functions; request payloads are declared as Pydantic models.
- Database access uses `SessionLocal()` and manually closes sessions on return/error paths; if refactoring, prefer a shared `yield`-based dependency to guarantee cleanup.
- Authenticated endpoints use `Depends(get_current_user)` and expect JWT payload keys `user_id` and `username`.
- API errors use `HTTPException` with status code and a `detail` string.
- CSV analysis now requires explicit column mappings: `date_column`, `revenue_column`, `expense_column`, `profit_column`. Upload returns the header list as `columns`; `profit_column="__calculated__"` means calculate profit as revenue minus expense. Mapping values must exactly match CSV headers.
- CSV dates currently parse as `%Y-%m-%d`; invalid individual rows are skipped, and valid rows are sorted chronologically before calculations.
- Preserve endpoint paths and JSON response field names unless intentionally coordinating a breaking API change.
- Existing style uses descriptive snake_case names and comments; some comments/messages are Thai.