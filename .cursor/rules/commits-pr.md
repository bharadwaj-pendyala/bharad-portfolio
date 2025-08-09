# GitHub Commits and Pull Requests Rules

Standards for commits, branches, and PRs to keep history clean and reviews fast. Applies even when working solo.

## Commits
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `style:`, `test:`. Optional scope: `feat(nav): ...`.
- Write imperative, present tense subjects under ~72 chars. Example: `fix(theme): prevent flash on initial load`.
- One logical change per commit. Avoid bundling unrelated edits.
- Provide a body when needed: what changed, why, trade-offs. Wrap at ~100 cols.
- Reference issues in the body when relevant: `Closes #123`.
- Avoid `WIP` commits on main. Use branches and squash fixups before merge.

## Branching
- Create short-lived branches:
  - `feature/<slug>` for features
  - `fix/<slug>` for bug fixes
  - `chore/<slug>` for tooling/infra
  - `docs/<slug>` for documentation
- Rebase onto `main` to keep history linear. Resolve conflicts locally.

## Pull Requests
- Open PRs for all code/config changes. Direct-commit to `main` only for trivial docs.
- Keep PRs small and focused (preferably < 300 LOC net). Split if needed.
- Title mirrors Conventional Commit style: `feat: add site config and sitemap`.
- Use the PR template checklist. Include:
  - What/why summary and scope
  - Screenshots for UI changes
  - Notes about config/hosting implications
  - Linked issues (e.g., `Closes #123`)
- Labels (suggested): `enhancement`, `bug`, `chore`, `docs`, `refactor`.
- Required checks before merge: build, lint, type-check (and tests when present).

## Review and merge
- Self-review the diff before requesting review/merging. Ensure no debug logs or commented code.
- Prefer "Squash and merge" with a clean, Conventional Commit-style message summarizing the PR.
- Delete the branch after merge.

## Solo workflow note
- Even as a solo dev, use PRs for any change that can break build/runtime/deploy. This provides a gating checklist and an audit trail. Direct commits are fine for typos or pure docs.
