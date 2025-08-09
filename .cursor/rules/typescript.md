# TypeScript Standards

Strict type safety and modern TypeScript patterns for maintainable code.

## Compiler Configuration

**Required settings** (already configured in `tsconfig.json`):

- `strict: true` - All strictness flags enabled
- `moduleResolution: "bundler"` - Modern import resolution
- `noUnusedLocals: true` - No unused variables
- `noUnusedParameters: true` - No unused function parameters

**Import patterns**:

- ✅ `import { utils } from '@/lib/utils'` (path alias)
- ✅ `import type { User } from '@/types'` (type-only imports)
- ❌ `import { utils } from '../../../lib/utils'` (deep relative paths)

## Type Definitions

```typescript
// ✅ Preferred patterns
type Status = 'loading' | 'success' | 'error'; // Union types over enums
type User = {
  id: string;
  name: string;
  email: string | null; // Explicit nullability
};

// ✅ Discriminated unions for complex states
type AsyncState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

// ✅ Utility types for transformations
type PartialUser = Partial<User>;
type UserEmail = Pick<User, 'email'>;

// ❌ Avoid these patterns
enum Status {
  Loading,
  Success,
  Error,
} // Use union types instead
type User = any; // Never use any
```

## Type Safety

**Forbidden patterns**:

- `any` - Use proper types or `unknown`
- `as unknown as T` - Use type guards instead
- `//@ts-ignore` - Fix the underlying issue
- `user!.email` - Use optional chaining `user?.email`

**Type guards and narrowing**:

```typescript
// ✅ Type guard functions
function isUser(value: unknown): value is User {
  return typeof value === 'object' && value !== null && 'id' in value;
}

// ✅ Early returns for narrowing
function processUser(user: User | null) {
  if (!user) return;

  // user is now narrowed to User type
  console.log(user.name);
}
```

## Function Signatures

**Export functions need explicit types**:

```typescript
// ✅ Exported functions with explicit return types
export function getUserById(id: string): Promise<User | null> {
  // Implementation
}

export function formatDate(date: Date): string {
  // Implementation
}

// ✅ Internal functions can use inference
function processData(data: RawData) {
  // Return type inferred
  return data.map((item) => item.value);
}
```

## React Components

```typescript
// ✅ Preferred component pattern
type Props = {
  user: User;
  onSelect?: (id: string) => void;
};

export default function UserCard({ user, onSelect }: Props) {
  // Component implementation
}

// ❌ Avoid React.FC
const UserCard: React.FC<Props> = ({ user, onSelect }) => {
  // Don't use this pattern
};
```

## Error Handling

```typescript
// ✅ Result pattern for recoverable errors
type Result<T, E = string> =
  | { success: true; data: T }
  | { success: false; error: E };

async function fetchUser(id: string): Promise<Result<User>> {
  try {
    const user = await api.getUser(id);
    return { success: true, data: user };
  } catch (error) {
    return { success: false, error: 'Failed to fetch user' };
  }
}

// ✅ Throw only for truly exceptional cases
if (process.env.NODE_ENV === 'production' && !apiKey) {
  throw new Error('API key is required in production');
}
```
