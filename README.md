# Test Hub

Test Hub is a pnpm monorepo containing automated test projects for web APIs,
web interfaces, and a mobile app.

## Requirements

- Node.js
- pnpm

## Setup

Install dependencies from the repository root:

```sh
pnpm install
```

The Playwright projects use browser automation. Install Playwright's browser
before running them for the first time:

```sh
pnpm --filter api-tests exec playwright install
```

## Running tests

Run every workspace's test script:

```sh
pnpm test:all
```

Run a single workspace's tests:

```sh
pnpm --filter api-tests test
pnpm --filter autoPay-ui-tests test
pnpm --filter merchant-portal-ui-tests test
pnpm --filter mobile-app-tests test
```

The API and UI workspaces use Playwright Test. The mobile app workspace uses
Jest. To lint the repository, run:

```sh
pnpm lint
```

Several browser tests visit public demo or example websites, and the API test
suite calls an external API, so those tests require network access. The
Fake Store API test currently expects an HTTP 403 response.

## Repository layout

```text
.
├── api-tests/
│   └── tests/                 # API request and API-mocking tests
├── autoPay-ui-tests/
│   ├── tests/                 # UI smoke tests
│   └── payment.spec.ts        # Payment/cart scenarios and Playwright examples
├── merchant-portal-ui-tests/
│   └── tests/                 # Browser, clock, and todo examples
├── mobile-app-tests/
│   └── tests/                 # Jest tests for the mobile app workspace
├── package.json               # Root scripts and workspace definitions
├── pnpm-workspace.yaml        # pnpm workspace configuration
└── pnpm-lock.yaml             # Locked dependency versions
```

Each workspace has its own `package.json` and test script. Root-level scripts
provide a convenient way to lint the repository and run all workspace test
suites.
