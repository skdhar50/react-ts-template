# React + TypeScript template

This template provides a setup with necessary packages and folders.

## Installation

1. Clone the template. (Replace **_my-app_** with your project name)
```base
npx degit skdhar50/react-ts-template my-app
```

2. Cleanup the setup

```base
cd my-app

# On powershall
Move-Item -Path README_TEMPLATE.md -Destination README.md -Force

# On git bash / mac os / Linux
mv -f README_TEMPLATE.md README.md

yarn install
git init
```

3. Run dev (use **_yarn_**):

```base
yarn dev
```

## Packages used
- react query (v5+)
- shadcn (base theme - New york)
- react-error-boundary
- date-fns (v4+)
- axios
- react-router (v7+)
- tailwind (v4+)

## Folder structure
```
src/
├── assets/                  # Static assets (images, fonts, etc.)
├── components/              # Reusable components
│   ├── common/              # Common shared components
│   ├── layouts/             # Layout components
│   └── ui/                  # UI components (using shadcn)
├── error/                   # Error handling components
│   ├── ErrorBoundary.tsx
│   └── ErrorFallback.tsx
├── features/                # Feature-based modules
│   └── dashboard/           # Dashboard feature
│       ├── api/             # Dashboard API logic
│       │   ├── mutations.ts
│       │   ├── queries.ts
│       │   └── types.ts
│       └── components/      # Dashboard-specific components
├── hooks/                   # Custom React hooks
├── lib/                     # Library/utility code
│   ├── api/                 # API configuration
│   │   ├── transformers/    # Response transformers
│   │   ├── client.ts        # API client
│   │   └── endpoints.ts     # API endpoints
│   └── utils.ts             # Utility functions
├── providers/               # Context providers
│   ├── ReactQueryProvider.tsx
│   ├── RouterProvider.tsx
│   └── index.tsx            # Combined providers
├── routes/                  # Routing configuration
│   ├── private.tsx          # Private routes
│   ├── public.tsx           # Public routes
│   └── index.tsx            # Main router
└── styles/                  # Global styles
```