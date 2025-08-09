# Universal Coding Standards

Core principles that apply across all languages and technologies in this project.

## The Big Four Principles

1. **Clarity over cleverness** - Code should be self-explanatory
2. **Small and focused** - Functions < 20 lines, files < 300 lines
3. **Pure when possible** - Minimize side effects and state mutations
4. **Fail fast** - Validate early, handle errors explicitly

## Function Design

```javascript
// ✅ Good: Small, focused, descriptive
function calculateTotalPrice(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

// ❌ Bad: Large, unclear, multiple responsibilities
function processOrder(data: any) {
  // 50+ lines of mixed validation, calculation, and side effects
}
```

## Naming Patterns

| Type          | Pattern              | Examples                                  |
| ------------- | -------------------- | ----------------------------------------- |
| **Functions** | Verbs (camelCase)    | `loadUser`, `validateEmail`, `formatDate` |
| **Variables** | Nouns (camelCase)    | `userName`, `isLoading`, `totalCount`     |
| **Constants** | SCREAMING_SNAKE_CASE | `API_BASE_URL`, `MAX_RETRY_COUNT`         |
| **Files**     | kebab-case           | `user-profile.tsx`, `date-utils.ts`       |

## Control Flow

```javascript
// ✅ Guard clauses reduce nesting
function processUser(user) {
  if (!user) return null;
  if (!user.isActive) return null;
  if (!user.permissions.includes('read')) return null;

  return user.data;
}

// ❌ Deep nesting is hard to follow
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.permissions.includes('read')) {
        return user.data;
      }
    }
  }
  return null;
}
```

## Error Handling

**Three-tier approach:**

1. **Validate early** - Check inputs at function boundaries
2. **Handle gracefully** - Provide fallbacks and user-friendly messages
3. **Fail meaningfully** - Include context in error messages

```javascript
// ✅ Good error handling
async function fetchUserProfile(userId: string) {
  if (!userId) throw new Error('User ID is required')

  try {
    const response = await api.get(`/users/${userId}`)
    return response.data
  } catch (error) {
    throw new Error(`Failed to fetch user ${userId}: ${error.message}`)
  }
}
```

## Documentation

**Comments should explain "why", not "what":**

```javascript
// ✅ Good: Explains reasoning
// Use debouncing to prevent excessive API calls during typing
const debouncedSearch = debounce(searchUsers, 300);

// ❌ Bad: Explains obvious code
// This function adds two numbers together
function add(a, b) {
  return a + b;
}
```

## Security Essentials

- **Input validation**: All external data must be validated
- **No secrets in code**: Use environment variables
- **Sanitize outputs**: Escape HTML, use parameterized queries
- **External links**: Add `rel="noopener noreferrer"` to `target="_blank"`

## Performance Guidelines

1. **Readability first** - Optimize only when needed
2. **Measure before optimizing** - Use profiling tools
3. **Choose right data structures** - Map vs Object, Set vs Array
4. **Cache expensive operations** - But measure memory impact

## Dependencies

**Before adding any dependency:**

- Is it actively maintained?
- Does it solve a significant problem we can't solve easily?
- What's the bundle size impact?
- Are there security vulnerabilities?

**This project philosophy: minimal dependencies, maximum value.**
