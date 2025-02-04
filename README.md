# Govllminer

Govllminer Public Link [govllminer.com](https://govllminer.com)

## Table of Content:

- [About The App](#about-the-app)
- [Technologies](#technologies)
- [Setup](#setup)
- [Contributing](#contributing)
- [Conventions & Rules](#conventions-&-rules)

## About The App

**Govllminer** is a specialized software tool designed for efficient data mining and analysis within governmental or regulatory frameworks. It helps streamline data extraction, processing, and visualization, enabling organizations to make data-driven decisions and uncover valuable insights from large datasets.

## Technologies

The frontend architecture use `Nextjs` as the JavaScript Framework written in `TypeScript` and Using `Tailwind` for UI Styling.

It is recommended to install the following tools:

- VSCode: [SpellChecker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- VSCode: [HeadWind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind) - TailWindCSS classname sorter
- VSCode [TailWindIntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

It is **required** to learn about the following tools:

1. [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - Global app storage
2. [Husky - Git hooks](https://typicode.github.io/husky/#/) - pre-push & pre-commit validator
3. [classNames](https://github.com/JedWatson/classnames) - Helper function for the Styling tool
4. [TailwindCSS ](https://tailwindcss.com/) - Styling tool
5. [React Query](https://tanstack.com/query/v3/) - for managing server state, simplifying data fetching, caching, synchronization, and updating

## Setup

### Prerequisites

Before getting started, ensure that you have a NextJS Framework knowledge, Tailwind CSS knowledge. **Please make sure you've read Conventions & Rules before starting.**

### Download or clone the repository

### Install dependencies

```bash

yarn install
```

### After, run the development server:

```bash

yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Status

**Govllminer** development is still in progress. `Version 1` will be out soon.

## Contributing

We are using a branching model called [GitHub flow](https://guides.github.com/introduction/flow/) which consists of creating a branch from `develop`, working on the feature, and creating a Pull Request to merge it back into `develop`. The branch name should follow the convention `feature/<feature-name>` or `bugfix/<bug-name>`. The naming should be concise and meaningful.

### Commit messages

Please, use the following convention to commit messages:

    <type>: <description>
    eg. feat: implement google login

Where `<type>` can be:

- `feat`: for new features
- `fix`: for bug fixes
- `docs`: for documentation changes
- `style`: for changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: for adding or updating tests
- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)

### Pull Requests

- Have a descriptive title
- Have link to the related Notion task
- Provide a clear description of the changes made
- Be approved by at least one team member
- Pass the automated checks (build, tests, linting, danger, chromatic, formatting)
- Have a clean commit history with meaningful messages

### Testing

We use [Jest](https://jestjs.io/) as our testing framework. All components and hooks should have corresponding tests. Tests should cover the happy path as well as the edge cases. Use `describe` and `it` blocks to organize your tests. You can run tests with the following command:

    yarn test

## Conventions & Rules

### Rules

1. Make your React components as simple as possible, avoid having any logic inside of the componnets, move your logic to custom hooks.

```
    const AuthSocialLogin = () => {
    const { googleLogin, initGoogleLogin } = useSocialLogin(); // logic here
    return (
        <MyTSX>
       <button onClick={initGoogleLogin}>Sign In with Google</button>
        </MyTSX> // this part is as dumb as possible
    )
    }
```

2. Use Typescript correctly, don’t use `any` and other workarounds.

3. Make code as easiest to read for other developers. Don’t try to implement very complicated code solutions. The code should be easy to read as a book.

4. Use the project’s folder structure.

5. Try to avoid writing too long components, divide them into smaller ones. Component should be maximum 150-180 lines of code.

6. Please try to avoid `deep prop drilling`. Please use hooks, that will rely on apollo cache or redux store.

7. Don’t add any external styles (inline css etc) - we are using only [Tailwind](https://tailwindcss.com/docs/flex)

8. Following naming conventions (isEnabled - boolean, handleFormSubmit - function, onFormSubmit - function prop, etc)

9. Tests. When writing a new feature, _always have tests_. When fixing a bug, consider of adding a test in order not to fix issue again.

### Folder structure

We group logic with [Split project files by feature or route](https://nextjs.org/docs/app/building-your-application/routing/colocation#split-project-files-by-feature-or-route).

### Naming: [Booleans](https://dev.to/michi/tips-on-naming-boolean-variables-cleaner-code-35ig)

- ❌ isDisabled 🧐 Negative
- ❌ isNotActive 🤯 Just imagine !isNotActive
- ❌ hasNoBillingAddress 😞 No need for "no"
- ✅ isEnabled / isActive / hasBillingAddress

### Naming: [React Functions](https://javascript.plainenglish.io/handy-naming-conventions-for-event-handler-functions-props-in-react-fc1cbb791364)

- ❌ onClick | submit | clear 😞 Too generic
- ❌ resetPassword 😞 Clear, but better won't be consistent
- ✅❌ onFormReset 🧐 OK, but better to use for React fn props instead
- ✅ handleFormReset | handleResetPassword

### Naming: React props

- ❌ submit | clear 😞 Too generic
- ❌ formReset 😞 Clear, but won't be consistent
- ✅ onFormReset - Clear, and works well with React function naming

```
<MyFormComponent onFormReset={handleFormReset} />
```

### Naming: Functions

Recommended naming convention for functions:
`format...` `convert...` `normalize...` `transform...` `get...` `set...`

- ✅ formatCurrencyAmount: This function takes a number as input and formats it as a currency string with proper separators and symbols.
- ✅ convertDateToISOString: This function takes a Date object as input and converts it to an ISO-8601 formatted string.
- ✅ normalizePhoneNumber: This function takes a phone number string as input and normalizes it to a consistent format, such as removing spaces, dashes, or parentheses.
- ✅ transformUserInputToUpperCase: This function takes a user input string and transforms it to uppercase.
- ✅ getUserToken: This functions gets user's token
- ✅ formatUserBetslip: This function formats user betslip into a proper format.
- ✅ formatOrderSummary: This function formats order summary into a proper format.
- ❌ convert | calc | process: This function could potentially do many things, requires checking internals before usage.
- ❌ calculateTotalPriceForAllItemsInCartAndApplyDiscountIfUserHasGoldStatus: Too long

Ideal scenario:

```
<SomeComponent
  onNameChange={handleNameChange}
  onFormReset={handleFormReset}
/>
```
