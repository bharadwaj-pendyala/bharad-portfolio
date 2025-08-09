# JSON Rules

Standards for JSON configuration files, API responses, and data structures.

## Structure and formatting

- Use consistent indentation (2 spaces for this project).
- Keep line length reasonable; break long arrays/objects across lines.
- Use trailing commas in JSON5/TypeScript, avoid in strict JSON.
- Order object keys logically (required first, optional last, alphabetical within groups).

## Naming conventions

- Use camelCase for property names in application JSON.
- Use kebab-case for configuration file names (`tsconfig.json`, `package.json`).
- Be consistent with naming patterns within the same file/API.
- Avoid abbreviations; use descriptive property names.

## Data types and validation

- Use appropriate data types: strings for text, numbers for quantities, booleans for flags.
- Prefer null over undefined in JSON (undefined isn't valid JSON).
- Use arrays for ordered collections, objects for key-value mapping.
- Include version fields in configuration schemas for future compatibility.

## API design

- Use consistent response structures across endpoints.
- Include metadata for paginated responses (page, limit, total).
- Provide error responses with meaningful codes and messages.
- Use ISO 8601 format for dates (`2024-01-15T10:30:00Z`).

## Configuration files

- Group related settings logically in package.json scripts and configs.
- Use semantic versioning for dependencies.
- Document non-obvious configuration options with comments (in JSON5/JSONC).
- Validate configuration schemas where possible.

## Security

- Never include secrets or sensitive data in JSON files.
- Validate JSON inputs from external sources.
- Use appropriate content-type headers for JSON APIs.
- Sanitize JSON data before displaying to users.

## Performance

- Keep JSON payloads reasonable in size; paginate large datasets.
- Use compression (gzip) for JSON responses.
- Consider binary formats (protobuf, msgpack) for high-frequency APIs.
- Cache JSON responses when appropriate.

## Schema and documentation

- Use JSON Schema for validation when possible.
- Document required vs optional fields clearly.
- Provide examples for complex data structures.
- Version your JSON schemas for backward compatibility.

## Maintenance

- Use linters (ESLint, Prettier) for consistent formatting.
- Remove unused properties and dependencies regularly.
- Keep package.json dependencies up to date.
- Test JSON parsing/serialization edge cases.

## Common files in this project

- `package.json`: Dependencies, scripts, and project metadata.
- `tsconfig.json`: TypeScript compiler configuration.
- `tailwind.config.ts`: Tailwind CSS customization.
- `.eslintrc.json`: Linting rules and configuration.
- API responses: Consistent structure with proper error handling.
