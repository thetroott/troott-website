# Contributing to Troott Website

How to contribute to this repository. For setup, env vars, and routes, see **[README.md](./README.md)**.

## Scope

Public marketing site (`@troott/website`) for troott.com — listener/minister stories, legal, download/demo CTAs, newsletter. **Not** studio or admin product UI (see `troott-studio` / `troott-admin`). Keep MailerLite secrets server-only.

## Branch structure

| Branch | Purpose |
| --- | --- |
| `master` | Production-ready code. Always stable. Protected. |
| `staging` | QA / testing branch for integrating features before a release. |
| `release/vX.Y.Z` | Pre-production branch for final testing before going live. |
| `@username/feature-*` | Feature branches under a personal namespace. |
| `@username/fix-*` | Bug-fix branches under a personal namespace. |

### Branch naming

| Type | Pattern | Example |
| --- | --- | --- |
| Feature | `@username/feature-<short-desc>` | `@topeokuselu/feature-minister-landing` |
| Bug fix | `@username/fix-<short-desc>` | `@damolaoladipo/fix-newsletter-route` |
| Release | `release/v<semver>` | `release/v1.0.2` |

> Use lowercase and hyphens. Be concise and descriptive.

## Development workflow

### 1. Clone (if you haven’t)

```bash
git clone https://github.com/thetroott/troott-website.git
cd troott-website
```

Follow [README.md](./README.md) for install, `.env`, and `npm run dev` (port **3051**).

### 2. Create a feature branch

```bash
git checkout staging
git pull origin staging
git checkout -b @username/feature-your-task-name
```

### 3. Develop

Keep copy and CTAs in `app/` + `components/`; site config in `siteConfig.tsx`. Follow Troott marketing brand (dark shell; white chrome CTAs vs product teal — see `@troott/ui` `DESIGN.md`).

### 4. Sync with staging

```bash
git fetch origin
git rebase origin/staging
```

### 5. Push

```bash
git push origin @username/feature-your-task-name
```

### 6. Open a PR into staging

Target **`staging`**, not `master`. Reference issues (`Closes #502`). Include screenshots for visual changes.

### 7. Create a release branch

```bash
git checkout staging
git pull origin staging
git checkout -b release/v1.0.2
git push origin release/v1.0.2
```

### 8. Merge release into master and staging

```bash
git checkout master
git merge release/v1.0.2
git push origin master

git checkout staging
git merge release/v1.0.2
git push origin staging
```

## Creating an issue

Open a GitHub Issue or notify your team lead for triage.

## Useful commands

| Command | Description |
| --- | --- |
| `npm run dev` | Next.js on **3051** (Turbopack) |
| `npm run build` | Production build |
| `npm start` | `next start` (default **3000**) |
| `npm run lint` | Next lint |

## Pull request notes

- PRs should target **`staging`**.
- Use `Closes #issue-number`.
- Add screenshots for layout/marketing changes; verify mobile viewport.
- Do not commit MailerLite or other secrets.
- Request reviewers before merging.
