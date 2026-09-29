const STORAGE_KEY = "qa-automation-roadmap-ts-v1";

const roadmap = [
  {
    id: "phase-1",
    label: "PHASE 1",
    title: "JavaScript Fundamentals",
    duration: "Month 1",
    description:
      "Build the JavaScript foundation you need before adding TypeScript and automation frameworks.",

    topics: [
      {
        id: "JS-01",
        title: "Setup & JavaScript Basics",
        description:
          "Set up the environment and learn the core language syntax.",

        tasks: [
          ["js-node", "Install Node.js and understand Node.js vs browser JavaScript"],
          ["js-vscode", "Set up VS Code and useful JavaScript/TypeScript extensions"],
          ["js-console", "Run JavaScript with Node.js and use the browser console"],
          ["js-let-const", "Variables: let and const"],
          ["js-types", "Primitive types: string, number, boolean, null, undefined, bigint, symbol"],
          ["js-typeof", "typeof and basic type checking"],
          ["js-conversion", "Explicit and implicit type conversion"],
          ["js-template", "Template literals"],
        ],
      },

      {
        id: "JS-02",
        title: "Operators, Conditions & Loops",
        description:
          "Control program flow and express test conditions.",

        tasks: [
          ["js-operators", "Arithmetic, assignment and comparison operators"],
          ["js-strict", "Strict equality === and inequality !=="],
          ["js-logical", "Logical operators &&, || and !"],
          ["js-nullish", "Nullish coalescing ?? and optional chaining ?."],
          ["js-if", "if / else if / else"],
          ["js-switch", "switch statements"],
          ["js-ternary", "Ternary operator"],
          ["js-for", "for loops"],
          ["js-forof", "for...of"],
          ["js-while", "while and do...while"],
          ["js-break", "break and continue"],
        ],
      },

      {
        id: "JS-03",
        title: "Arrays & Objects",
        description:
          "Work with the data structures you will use constantly in automation.",

        tasks: [
          ["js-arrays", "Create, read and update arrays"],
          ["js-array-methods", "push, pop, shift, unshift, includes and indexOf"],
          ["js-slice", "slice and splice"],
          ["js-objects", "Create and update objects"],
          ["js-properties", "Dot vs bracket notation"],
          ["js-nested", "Nested arrays and objects"],
          ["js-destructure", "Array and object destructuring"],
          ["js-spread", "Spread and rest syntax"],
          ["js-json", "JSON.parse and JSON.stringify"],
        ],
      },

      {
        id: "JS-04",
        title: "Functions",
        description:
          "Write reusable logic instead of repetitive scripts.",

        tasks: [
          ["js-function", "Function declarations and expressions"],
          ["js-arrow", "Arrow functions"],
          ["js-params", "Parameters and arguments"],
          ["js-default", "Default parameters"],
          ["js-return", "Return values"],
          ["js-scope", "Block, function and global scope"],
          ["js-closure", "Understand closures at a practical level"],
          ["js-callback", "Callbacks"],
        ],
      },

      {
        id: "JS-05",
        title: "Array Methods for QA",
        description:
          "Use functional array methods to process API responses and test data.",

        tasks: [
          ["js-foreach", "forEach()"],
          ["js-map", "map()"],
          ["js-filter", "filter()"],
          ["js-find", "find() and findIndex()"],
          ["js-some", "some() and every()"],
          ["js-reduce", "reduce() basics"],
          ["js-sort", "sort() and numeric/string sorting"],
          ["js-chain", "Chain array methods safely"],
        ],
      },

      {
        id: "JS-06",
        title: "Errors, Modules & Clean Code",
        description:
          "Structure JavaScript code so it can grow into an automation project.",

        tasks: [
          ["js-errors", "Error objects and common runtime errors"],
          ["js-try", "try / catch / finally"],
          ["js-throw", "throw custom errors"],
          ["js-modules", "ES modules: import and export"],
          ["js-files", "Split code into modules"],
          ["js-naming", "Readable naming conventions"],
          ["js-dry", "Recognise duplication and apply DRY carefully"],
          ["js-debug", "Use debugger, breakpoints and console effectively"],
        ],
      },
    ],
  },

  {
    id: "phase-2",
    label: "PHASE 2",
    title: "Asynchronous JavaScript & Node.js",
    duration: "Month 1",
    description:
      "Master asynchronous code and the Node.js ecosystem because modern web and mobile automation depends on it.",

    topics: [
      {
        id: "ASYNC-01",
        title: "Promises & async/await",
        description:
          "Understand the asynchronous model used by Playwright and WebdriverIO.",

        tasks: [
          ["async-sync", "Synchronous vs asynchronous execution"],
          ["async-promise", "Promise states and basic Promise usage"],
          ["async-then", ".then(), .catch() and .finally()"],
          ["async-await", "async functions and await"],
          ["async-errors", "Error handling with async/await"],
          ["async-all", "Promise.all() and parallel async work"],
          ["async-sequential", "Sequential vs parallel execution"],
          ["async-missing-await", "Recognise bugs caused by missing await"],
        ],
      },

      {
        id: "NODE-01",
        title: "Node.js & npm",
        description:
          "Learn how JavaScript automation projects are installed, configured and executed.",

        tasks: [
          ["node-project", "Create a Node.js project with npm init"],
          ["node-package", "Understand package.json"],
          ["node-install", "Install dependencies and devDependencies"],
          ["node-scripts", "Create and run npm scripts"],
          ["node-lock", "Understand package-lock.json"],
          ["node-modules", "Understand node_modules and why it is gitignored"],
          ["node-semver", "Basic semantic versioning"],
          ["node-npx", "Use npx"],
        ],
      },

      {
        id: "NODE-02",
        title: "Files, Paths & Environment",
        description:
          "Work with configuration and test data from Node.js.",

        tasks: [
          ["node-fs", "Read and write files with fs"],
          ["node-path", "Work with paths"],
          ["node-json", "Load and save JSON test data"],
          ["node-env", "Read environment variables with process.env"],
          ["node-dotenv", "Use .env files locally"],
          ["node-secrets", "Keep secrets out of source control"],
          ["node-process", "Understand process arguments and exit codes"],
        ],
      },
    ],
  },

  {
    id: "phase-3",
    label: "PHASE 3",
    title: "TypeScript Fundamentals",
    duration: "Month 1–2",
    description:
      "Add static typing to JavaScript and learn the TypeScript features most useful in automation frameworks.",

    topics: [
      {
        id: "TS-01",
        title: "TypeScript Setup & Basic Types",
        description:
          "Convert JavaScript knowledge into strongly typed TypeScript.",

        tasks: [
          ["ts-install", "Install TypeScript and create tsconfig.json"],
          ["ts-compile", "Compile TypeScript and understand transpilation"],
          ["ts-basic", "string, number, boolean, null and undefined types"],
          ["ts-arrays", "Typed arrays and tuples"],
          ["ts-any", "any vs unknown and why to avoid unnecessary any"],
          ["ts-union", "Union types"],
          ["ts-literal", "Literal types"],
          ["ts-inference", "Type inference"],
        ],
      },

      {
        id: "TS-02",
        title: "Functions, Objects & Interfaces",
        description:
          "Model test data, page objects and configuration safely.",

        tasks: [
          ["ts-function", "Typed parameters and return values"],
          ["ts-optional", "Optional parameters and properties"],
          ["ts-object", "Object types"],
          ["ts-interface", "Interfaces"],
          ["ts-type", "Type aliases"],
          ["ts-interface-vs-type", "Interface vs type at a practical level"],
          ["ts-readonly", "readonly properties"],
          ["ts-enum", "Enums and alternatives"],
        ],
      },

      {
        id: "TS-03",
        title: "Classes & OOP for Automation",
        description:
          "Learn the OOP concepts used in page/screen object models.",

        tasks: [
          ["ts-class", "Classes and instances"],
          ["ts-constructor", "Constructors"],
          ["ts-access", "public, private and protected"],
          ["ts-inherit", "Inheritance"],
          ["ts-abstract", "Abstract classes"],
          ["ts-implements", "implements with interfaces"],
          ["ts-static", "Static members"],
          ["ts-composition", "Composition vs inheritance"],
        ],
      },

      {
        id: "TS-04",
        title: "Generics & Utility Types",
        description:
          "Use reusable typed abstractions without overengineering.",

        tasks: [
          ["ts-generics", "Generic functions and classes"],
          ["ts-record", "Record"],
          ["ts-partial", "Partial"],
          ["ts-pick", "Pick and Omit"],
          ["ts-required", "Required and Readonly"],
          ["ts-keyof", "keyof basics"],
          ["ts-narrow", "Type narrowing and guards"],
        ],
      },
    ],
  },

  {
    id: "phase-4",
    label: "PHASE 4",
    title: "Git & Automation Project Basics",
    duration: "Month 2",
    description:
      "Work confidently with automation repositories and establish professional project habits.",

    topics: [
      {
        id: "GIT-01",
        title: "Git Fundamentals",
        description:
          "Manage your automation code safely with Git.",

        tasks: [
          ["git-clone", "git clone"],
          ["git-status", "git status"],
          ["git-add", "git add"],
          ["git-commit", "git commit and meaningful commit messages"],
          ["git-push", "git push"],
          ["git-pull", "git pull"],
          ["git-ignore", ".gitignore"],
          ["git-branch", "Create and switch branches"],
          ["git-merge", "Merge branches"],
          ["git-conflict", "Resolve basic merge conflicts"],
        ],
      },

      {
        id: "PROJ-01",
        title: "Project Structure & Code Quality",
        description:
          "Create a clean baseline for automation projects.",

        tasks: [
          ["proj-structure", "Organise src, tests, config, data and utilities"],
          ["proj-eslint", "Set up ESLint"],
          ["proj-prettier", "Set up Prettier"],
          ["proj-tsconfig", "Configure tsconfig for an automation project"],
          ["proj-scripts", "Create useful npm scripts"],
          ["proj-readme", "Write a basic README"],
          ["proj-env-example", "Add .env.example without secrets"],
        ],
      },
    ],
  },

  {
    id: "phase-5",
    label: "PHASE 5",
    title: "Playwright Fundamentals",
    duration: "Month 2",
    description:
      "Learn modern UI automation concepts on the web before applying the same engineering habits to mobile.",

    topics: [
      {
        id: "PW-01",
        title: "Playwright Setup & First Tests",
        description:
          "Create and run a real TypeScript Playwright project.",

        tasks: [
          ["pw-install", "Create a Playwright TypeScript project"],
          ["pw-structure", "Understand tests, config and generated files"],
          ["pw-test", "Write the first test"],
          ["pw-run", "Run all tests and a single test"],
          ["pw-headed", "Headed vs headless execution"],
          ["pw-browsers", "Chromium, Firefox and WebKit projects"],
          ["pw-ui", "Use Playwright UI Mode"],
        ],
      },

      {
        id: "PW-02",
        title: "Locators & User Actions",
        description:
          "Interact with web applications using resilient locators.",

        tasks: [
          ["pw-role", "getByRole()"],
          ["pw-label", "getByLabel()"],
          ["pw-text", "getByText()"],
          ["pw-testid", "getByTestId()"],
          ["pw-css", "CSS locators when needed"],
          ["pw-filter", "Filter and chain locators"],
          ["pw-click", "Click and double click"],
          ["pw-fill", "Fill and clear inputs"],
          ["pw-select", "Select options"],
          ["pw-check", "Checkboxes and radio buttons"],
          ["pw-upload", "File upload"],
        ],
      },

      {
        id: "PW-03",
        title: "Assertions & Auto-Waiting",
        description:
          "Write stable assertions and understand why arbitrary sleeps are a problem.",

        tasks: [
          ["pw-expect", "Playwright expect()"],
          ["pw-visible", "Visibility assertions"],
          ["pw-text-assert", "Text assertions"],
          ["pw-value", "Value assertions"],
          ["pw-count", "Count assertions"],
          ["pw-url", "URL assertions"],
          ["pw-auto-wait", "Understand Playwright auto-waiting"],
          ["pw-timeout", "Timeouts"],
          ["pw-no-sleep", "Avoid fixed sleeps"],
        ],
      },

      {
        id: "PW-04",
        title: "Test Lifecycle & Isolation",
        description:
          "Keep tests independent and predictable.",

        tasks: [
          ["pw-before", "beforeEach and beforeAll"],
          ["pw-after", "afterEach and afterAll"],
          ["pw-context", "Browser contexts"],
          ["pw-isolation", "Test isolation"],
          ["pw-auth-state", "Storage state basics"],
          ["pw-clean-data", "Clean test data strategy"],
        ],
      },

      {
        id: "PW-05",
        title: "Page Object Model",
        description:
          "Separate test intent from UI implementation details.",

        tasks: [
          ["pw-pom", "Create Page Object classes"],
          ["pw-locators", "Store locators cleanly"],
          ["pw-actions", "Create reusable page actions"],
          ["pw-return", "Return useful data from page methods"],
          ["pw-no-overabstract", "Avoid overabstracting simple tests"],
          ["pw-components", "Reusable component objects"],
        ],
      },
    ],
  },

  {
    id: "phase-6",
    label: "PHASE 6",
    title: "Advanced Playwright & Framework Design",
    duration: "Month 2–3",
    description:
      "Turn individual Playwright tests into a maintainable automation framework.",

    topics: [
      {
        id: "PWA-01",
        title: "Fixtures",
        description:
          "Use Playwright fixtures for reusable setup and dependencies.",

        tasks: [
          ["pwa-fixtures", "Built-in fixtures"],
          ["pwa-custom", "Custom fixtures"],
          ["pwa-extend", "Extend base test"],
          ["pwa-scope", "Test vs worker scope"],
          ["pwa-dependency", "Fixture dependencies"],
        ],
      },

      {
        id: "PWA-02",
        title: "Configuration & Projects",
        description:
          "Run the same suite across environments and browsers.",

        tasks: [
          ["pwa-config", "playwright.config.ts"],
          ["pwa-baseurl", "baseURL"],
          ["pwa-projects", "Projects"],
          ["pwa-env", "Environment-specific configuration"],
          ["pwa-device", "Device/browser emulation basics"],
          ["pwa-retries", "Retries"],
          ["pwa-workers", "Workers and parallelism"],
        ],
      },

      {
        id: "PWA-03",
        title: "Debugging & Reports",
        description:
          "Collect enough evidence to understand failures.",

        tasks: [
          ["pwa-debug", "Playwright Inspector"],
          ["pwa-trace", "Trace Viewer"],
          ["pwa-screenshot", "Screenshots"],
          ["pwa-video", "Video"],
          ["pwa-html", "HTML report"],
          ["pwa-console", "Capture useful logs"],
        ],
      },

      {
        id: "PWA-04",
        title: "Network & Advanced Browser Testing",
        description:
          "Use browser/network control where it adds testing value.",

        tasks: [
          ["pwa-network", "Inspect requests and responses"],
          ["pwa-route", "Route and mock requests"],
          ["pwa-response", "Wait for API responses"],
          ["pwa-cookie", "Cookies and storage"],
          ["pwa-download", "Downloads"],
          ["pwa-popup", "Tabs, pages and popups"],
          ["pwa-frame", "iframes"],
        ],
      },
    ],
  },

  {
    id: "phase-7",
    label: "PHASE 7",
    title: "API Automation with TypeScript",
    duration: "Month 2–3",
    description:
      "Automate backend checks and use APIs to make UI/mobile tests faster and more reliable.",

    topics: [
      {
        id: "API-01",
        title: "HTTP Fundamentals",
        description:
          "Strengthen the protocol knowledge behind API testing.",

        tasks: [
          ["api-methods", "GET, POST, PUT, PATCH and DELETE"],
          ["api-status", "HTTP status codes"],
          ["api-header", "Request and response headers"],
          ["api-query", "Query parameters"],
          ["api-path", "Path parameters"],
          ["api-body", "JSON request bodies"],
          ["api-cookie", "Cookies"],
          ["api-idempotency", "Idempotency basics"],
        ],
      },

      {
        id: "API-02",
        title: "API Requests in TypeScript",
        description:
          "Send and validate API requests from automation code.",

        tasks: [
          ["api-pw-request", "Playwright APIRequestContext"],
          ["api-get", "GET requests"],
          ["api-post", "POST requests"],
          ["api-put", "PUT/PATCH requests"],
          ["api-delete", "DELETE requests"],
          ["api-headers2", "Custom headers"],
          ["api-query2", "Query parameters"],
          ["api-response", "Parse JSON responses"],
        ],
      },

      {
        id: "API-03",
        title: "Authentication",
        description:
          "Work with common authentication mechanisms.",

        tasks: [
          ["api-basic", "Basic Auth"],
          ["api-bearer", "Bearer tokens"],
          ["api-login", "Login and token retrieval"],
          ["api-refresh", "Refresh-token concept"],
          ["api-auth-header", "Reusable authentication headers"],
          ["api-secrets", "Keep tokens and credentials out of Git"],
        ],
      },

      {
        id: "API-04",
        title: "API Assertions & Negative Testing",
        description:
          "Validate more than just HTTP 200.",

        tasks: [
          ["api-status-assert", "Assert status codes"],
          ["api-body-assert", "Assert response body"],
          ["api-header-assert", "Assert headers"],
          ["api-schema", "JSON schema validation concept"],
          ["api-negative", "Invalid payload scenarios"],
          ["api-auth-negative", "Unauthorized/forbidden scenarios"],
          ["api-boundary", "Boundary API data"],
          ["api-error-contract", "Validate error response contracts"],
        ],
      },

      {
        id: "API-05",
        title: "API Framework Architecture",
        description:
          "Create reusable API clients and test-data helpers.",

        tasks: [
          ["api-client", "Reusable API client"],
          ["api-endpoint", "Endpoint abstraction"],
          ["api-types", "Type API request/response data"],
          ["api-builder", "Test data builders/factories"],
          ["api-setup", "Use API for test setup"],
          ["api-cleanup", "Use API for test cleanup"],
          ["api-ui", "Combine API and UI tests responsibly"],
        ],
      },
    ],
  },

  {
    id: "phase-8",
    label: "PHASE 8",
    title: "Mobile Automation Fundamentals",
    duration: "Month 3",
    description:
      "Understand what changes when automation moves from browsers to native mobile applications.",

    topics: [
      {
        id: "MOB-01",
        title: "Native, Web & Hybrid Apps",
        description:
          "Recognise the application type and choose the correct automation approach.",

        tasks: [
          ["mob-native", "Native applications"],
          ["mob-web", "Mobile web"],
          ["mob-hybrid", "Hybrid applications"],
          ["mob-webview", "WebViews"],
          ["mob-context", "Native vs web contexts"],
          ["mob-playwright-limit", "Understand why Playwright is not the primary native-app automation tool"],
        ],
      },

      {
        id: "MOB-02",
        title: "Mobile Automation Concepts",
        description:
          "Learn the concepts shared across Android and iOS automation.",

        tasks: [
          ["mob-session", "Automation sessions"],
          ["mob-device", "Simulator/emulator vs real device"],
          ["mob-locators", "Mobile locator strategies"],
          ["mob-gestures", "Touch gestures"],
          ["mob-keyboard", "Virtual keyboard"],
          ["mob-permission", "System permissions"],
          ["mob-alert", "System alerts"],
          ["mob-orientation", "Orientation"],
          ["mob-lifecycle", "Application lifecycle"],
        ],
      },

      {
        id: "MOB-03",
        title: "Mobile Test Strategy",
        description:
          "Choose valuable mobile automation coverage rather than automating everything.",

        tasks: [
          ["mob-smoke", "Define mobile smoke coverage"],
          ["mob-regression", "Define regression coverage"],
          ["mob-device-matrix", "Device/OS coverage strategy"],
          ["mob-risk", "Risk-based mobile automation"],
          ["mob-real-vs-sim", "Choose real devices vs simulators/emulators"],
          ["mob-flaky", "Understand common mobile flakiness sources"],
        ],
      },
    ],
  },

  {
    id: "phase-9",
    label: "PHASE 9",
    title: "WebdriverIO Fundamentals",
    duration: "Month 3",
    description:
      "Learn the TypeScript automation runner and client that will connect your tests to Appium.",

    topics: [
      {
        id: "WDIO-01",
        title: "WebdriverIO Setup",
        description:
          "Create a WebdriverIO TypeScript project and understand its architecture.",

        tasks: [
          ["wdio-install", "Create a WebdriverIO project"],
          ["wdio-config", "Understand wdio.conf.ts"],
          ["wdio-runner", "Understand the WDIO test runner"],
          ["wdio-spec", "Create and run a spec"],
          ["wdio-hooks", "before/after hooks"],
          ["wdio-services", "Understand WDIO services"],
        ],
      },

      {
        id: "WDIO-02",
        title: "Selectors & Element Commands",
        description:
          "Learn WebdriverIO interaction syntax before adding Appium.",

        tasks: [
          ["wdio-dollar", "$ and $$ selectors"],
          ["wdio-accessibility", "Accessibility selectors"],
          ["wdio-text", "Text selectors"],
          ["wdio-click", "click()"],
          ["wdio-setvalue", "setValue() and addValue()"],
          ["wdio-gettext", "getText()"],
          ["wdio-attribute", "Get attributes"],
          ["wdio-state", "Displayed/enabled/existing state"],
        ],
      },

      {
        id: "WDIO-03",
        title: "Waits & Assertions",
        description:
          "Synchronise tests with application state and write readable expectations.",

        tasks: [
          ["wdio-waitfor", "waitForDisplayed / waitForExist"],
          ["wdio-waituntil", "waitUntil"],
          ["wdio-expect", "WebdriverIO expect assertions"],
          ["wdio-timeout", "Timeout configuration"],
          ["wdio-no-pause", "Avoid browser.pause() as a synchronization strategy"],
        ],
      },

      {
        id: "WDIO-04",
        title: "Page/Screen Objects",
        description:
          "Build reusable abstractions using TypeScript classes.",

        tasks: [
          ["wdio-page", "Create a Page/Screen Object"],
          ["wdio-getters", "Element getters"],
          ["wdio-methods", "Reusable interaction methods"],
          ["wdio-components", "Reusable components"],
          ["wdio-types", "Type shared data/configuration"],
        ],
      },
    ],
  },

  {
    id: "phase-10",
    label: "PHASE 10",
    title: "Appium Fundamentals",
    duration: "Month 3",
    description:
      "Connect WebdriverIO to native mobile apps through Appium.",

    topics: [
      {
        id: "APP-01",
        title: "Appium Architecture",
        description:
          "Understand the client-server-driver model instead of treating Appium as magic.",

        tasks: [
          ["app-server", "Appium Server"],
          ["app-client", "WebdriverIO as the client"],
          ["app-protocol", "WebDriver protocol concept"],
          ["app-driver", "Appium drivers"],
          ["app-session", "Session creation"],
          ["app-command-flow", "Test → WebdriverIO → Appium → platform driver → device"],
          ["app-plugin", "Understand Appium plugins at a high level"],
        ],
      },

      {
        id: "APP-02",
        title: "Appium Setup",
        description:
          "Install Appium and validate the local environment.",

        tasks: [
          ["app-node", "Verify Node.js/npm environment"],
          ["app-install", "Install Appium"],
          ["app-version", "Check Appium version"],
          ["app-driver-install", "Install platform drivers"],
          ["app-doctor", "Use environment diagnostics where applicable"],
          ["app-server-run", "Start Appium Server"],
          ["app-inspector", "Install and use Appium Inspector"],
        ],
      },

      {
        id: "APP-03",
        title: "Capabilities / Options",
        description:
          "Configure which app, device and platform Appium should automate.",

        tasks: [
          ["app-platform-name", "platformName"],
          ["app-device-name", "Device name"],
          ["app-platform-version", "Platform version"],
          ["app-automation-name", "automationName"],
          ["app-app-path", "Application path or identifier"],
          ["app-no-reset", "noReset / fullReset concepts"],
          ["app-cap-debug", "Debug session-creation failures"],
        ],
      },

      {
        id: "APP-04",
        title: "Mobile Locators",
        description:
          "Choose stable native locators and avoid unnecessary XPath.",

        tasks: [
          ["app-a11y", "Accessibility ID"],
          ["app-id", "Android resource-id"],
          ["app-ios-predicate", "iOS predicate strings"],
          ["app-ios-chain", "iOS class chain"],
          ["app-xpath", "XPath and its trade-offs"],
          ["app-inspector-loc", "Inspect the native element tree"],
          ["app-locator-strategy", "Create a locator priority strategy"],
        ],
      },

      {
        id: "APP-05",
        title: "Gestures & System Interactions",
        description:
          "Automate interactions unique to touch devices and mobile operating systems.",

        tasks: [
          ["app-swipe", "Swipe"],
          ["app-scroll", "Scroll"],
          ["app-long", "Long press"],
          ["app-drag", "Drag and drop"],
          ["app-permission", "Permissions"],
          ["app-alert", "System alerts"],
          ["app-keyboard", "Hide/show keyboard"],
          ["app-back", "Android back navigation"],
        ],
      },

      {
        id: "APP-06",
        title: "App Lifecycle & Contexts",
        description:
          "Control application state and automate hybrid applications.",

        tasks: [
          ["app-activate", "Activate app"],
          ["app-terminate", "Terminate app"],
          ["app-background", "Background/foreground"],
          ["app-install2", "Install/remove app"],
          ["app-reset2", "Reset application state"],
          ["app-context-list", "Get available contexts"],
          ["app-context-switch", "Switch NATIVE_APP / WEBVIEW"],
          ["app-deeplink", "Deep-link automation concept"],
        ],
      },
    ],
  },

  {
    id: "phase-11",
    label: "PHASE 11",
    title: "Android Automation",
    duration: "Month 3–4",
    description:
      "Learn Android-specific tooling and Appium automation with UiAutomator2.",

    topics: [
      {
        id: "ANDROID-01",
        title: "Android Fundamentals",
        description:
          "Understand the Android concepts that appear constantly in mobile QA.",

        tasks: [
          ["android-apk", "APK"],
          ["android-package", "Package name"],
          ["android-activity", "Activity"],
          ["android-intent", "Intent basics"],
          ["android-permission", "Android permissions"],
          ["android-version", "Android versions/API levels"],
        ],
      },

      {
        id: "ANDROID-02",
        title: "ADB",
        description:
          "Use Android Debug Bridge for setup, debugging and investigation.",

        tasks: [
          ["adb-devices", "adb devices"],
          ["adb-install", "Install APK"],
          ["adb-uninstall", "Uninstall app"],
          ["adb-shell", "adb shell basics"],
          ["adb-pm-clear", "Clear application data"],
          ["adb-logcat", "Read logcat"],
          ["adb-package", "Find package/activity information"],
          ["adb-screenshot", "Capture screenshots"],
        ],
      },

      {
        id: "ANDROID-03",
        title: "Android Emulator",
        description:
          "Create reproducible Android test environments.",

        tasks: [
          ["android-studio", "Android Studio basics for QA"],
          ["android-sdk", "Android SDK"],
          ["android-avd", "AVD Manager"],
          ["android-emulator", "Create and start emulator"],
          ["android-image", "System images"],
          ["android-config", "Configure OS/device version"],
          ["android-snapshot", "Snapshots and clean state"],
        ],
      },

      {
        id: "ANDROID-04",
        title: "Appium UiAutomator2",
        description:
          "Run native Android automation through the Appium UiAutomator2 driver.",

        tasks: [
          ["uia2-driver", "Install UiAutomator2 driver"],
          ["uia2-session", "Create Android Appium session"],
          ["uia2-app", "Configure appPackage/appActivity or app"],
          ["uia2-locators", "Use Android locator strategies"],
          ["uia2-scroll", "Android scrolling"],
          ["uia2-permissions", "Permission flows"],
          ["uia2-deeplink", "Android deep links"],
          ["uia2-log", "Debug with Appium logs and logcat"],
        ],
      },

      {
        id: "ANDROID-05",
        title: "Real Android Device",
        description:
          "Run the same framework against physical Android hardware.",

        tasks: [
          ["android-usb", "Enable Developer Options and USB debugging"],
          ["android-authorise", "Authorise the Mac/computer"],
          ["android-udid", "Use device UDID"],
          ["android-real-session", "Create real-device Appium session"],
          ["android-real-app", "Install test builds"],
          ["android-real-debug", "Investigate real-device-only failures"],
        ],
      },
    ],
  },

  {
    id: "phase-12",
    label: "PHASE 12",
    title: "iOS Automation",
    duration: "Month 4",
    description:
      "Learn Apple's tooling and Appium automation with the XCUITest driver.",

    topics: [
      {
        id: "IOS-01",
        title: "iOS Fundamentals",
        description:
          "Understand the application and device concepts required for iOS automation.",

        tasks: [
          ["ios-app-ipa", ".app vs .ipa"],
          ["ios-bundle", "Bundle ID"],
          ["ios-version", "iOS versions"],
          ["ios-permission", "iOS permissions"],
          ["ios-deeplink", "URL schemes / universal links concept"],
          ["ios-sim-real", "Simulator vs real iPhone differences"],
        ],
      },

      {
        id: "IOS-02",
        title: "Xcode & Simulator",
        description:
          "Use the Apple tooling required by iOS automation.",

        tasks: [
          ["ios-xcode", "Install and navigate Xcode"],
          ["ios-cli", "Xcode command-line tools"],
          ["ios-sim-create", "Create iOS simulator"],
          ["ios-sim-boot", "Boot/shutdown simulator"],
          ["ios-sim-install", "Install application on simulator"],
          ["ios-sim-reset", "Erase/reset simulator"],
          ["ios-console", "Inspect device/simulator logs"],
        ],
      },

      {
        id: "IOS-03",
        title: "XCUITest & WebDriverAgent",
        description:
          "Understand the iOS automation chain used by Appium.",

        tasks: [
          ["ios-xcuitest", "XCUITest concept"],
          ["ios-driver", "Install Appium XCUITest driver"],
          ["ios-wda", "What WebDriverAgent is"],
          ["ios-wda-build", "Build/run WDA concept"],
          ["ios-session", "Create simulator Appium session"],
          ["ios-locators", "Accessibility ID, predicate and class chain"],
          ["ios-wda-debug", "Recognise common WDA/session errors"],
        ],
      },

      {
        id: "IOS-04",
        title: "Signing & Real iPhone",
        description:
          "Learn the extra setup required to automate physical Apple devices.",

        tasks: [
          ["ios-apple-dev", "Apple Developer/signing concept"],
          ["ios-cert", "Development certificates"],
          ["ios-provision", "Provisioning profiles"],
          ["ios-signing", "Code signing"],
          ["ios-trust", "Trust/developer settings on device"],
          ["ios-udid", "Device UDID"],
          ["ios-wda-sign", "Sign WebDriverAgent"],
          ["ios-real-session", "Create Appium session on real iPhone"],
        ],
      },

      {
        id: "IOS-05",
        title: "iOS-Specific Automation",
        description:
          "Handle common behaviours that differ from Android.",

        tasks: [
          ["ios-alert", "iOS system alerts"],
          ["ios-perm", "Permission handling"],
          ["ios-scroll", "iOS scrolling"],
          ["ios-keyboard", "Keyboard behaviour"],
          ["ios-picker", "Picker wheels"],
          ["ios-deep-run", "Deep-link testing"],
          ["ios-debug-real", "Investigate simulator vs real-device differences"],
        ],
      },
    ],
  },

  {
    id: "phase-13",
    label: "PHASE 13",
    title: "Mobile Automation Framework",
    duration: "Month 4",
    description:
      "Combine TypeScript, WebdriverIO and Appium into a maintainable cross-platform framework.",

    topics: [
      {
        id: "FRAME-01",
        title: "Framework Architecture",
        description:
          "Design a project that can grow without becoming a collection of scripts.",

        tasks: [
          ["frame-structure", "Define tests/screens/config/data/utils structure"],
          ["frame-config", "Central configuration"],
          ["frame-driver", "Driver/session configuration"],
          ["frame-hooks", "Global hooks"],
          ["frame-base", "Decide whether a base screen abstraction adds value"],
          ["frame-types", "Type configuration and test data"],
        ],
      },

      {
        id: "FRAME-02",
        title: "Screen Object Model",
        description:
          "Create readable mobile tests while keeping locators and interactions maintainable.",

        tasks: [
          ["frame-screen", "Create Screen Object classes"],
          ["frame-locator", "Centralise screen locators"],
          ["frame-action", "Reusable screen actions"],
          ["frame-component", "Reusable components"],
          ["frame-nav", "Navigation methods"],
          ["frame-assert", "Choose where assertions belong"],
        ],
      },

      {
        id: "FRAME-03",
        title: "Cross-Platform Android/iOS Design",
        description:
          "Share test intent without pretending Android and iOS are identical.",

        tasks: [
          ["frame-shared", "Share cross-platform test scenarios"],
          ["frame-platform-loc", "Platform-specific locators"],
          ["frame-platform-action", "Platform-specific interactions"],
          ["frame-detect", "Platform detection/configuration"],
          ["frame-avoid-if", "Avoid excessive if/else inside tests"],
          ["frame-diff", "Document intentional platform differences"],
        ],
      },

      {
        id: "FRAME-04",
        title: "Test Data & Environment Management",
        description:
          "Keep tests repeatable across staging builds, users and devices.",

        tasks: [
          ["frame-env", "Environment configuration"],
          ["frame-device-config", "Device capabilities/configuration"],
          ["frame-data", "Test data files/factories"],
          ["frame-users", "Test-user strategy"],
          ["frame-secret", "Secret management"],
          ["frame-clean", "Test data cleanup"],
        ],
      },

      {
        id: "FRAME-05",
        title: "Logging, Screenshots & Reporting",
        description:
          "Produce enough evidence to debug failures without rerunning blindly.",

        tasks: [
          ["frame-log", "Structured logging"],
          ["frame-fail-shot", "Screenshot on failure"],
          ["frame-appium-log", "Collect Appium logs"],
          ["frame-device-log", "Collect useful device logs"],
          ["frame-allure", "Allure reporting"],
          ["frame-artifact", "Store reports/logs/screenshots as artifacts"],
        ],
      },

      {
        id: "FRAME-06",
        title: "Flaky Test Prevention",
        description:
          "Treat stability as a framework feature, not an afterthought.",

        tasks: [
          ["frame-wait", "Use condition-based waits"],
          ["frame-state", "Control starting application state"],
          ["frame-isolation", "Keep tests independent"],
          ["frame-data-isolation", "Avoid shared mutable test data"],
          ["frame-retry", "Use retries carefully"],
          ["frame-root", "Investigate root cause of flaky tests"],
          ["frame-track", "Track flaky tests instead of ignoring them"],
        ],
      },
    ],
  },

  {
    id: "phase-14",
    label: "PHASE 14",
    title: "CI/CD & Automated Execution",
    duration: "Month 4–5",
    description:
      "Run automation consistently outside your laptop and integrate it into the development process.",

    topics: [
      {
        id: "CI-01",
        title: "GitHub Actions Fundamentals",
        description:
          "Understand the CI concepts behind automated test execution.",

        tasks: [
          ["ci-workflow", "Workflow YAML files"],
          ["ci-trigger", "push, pull_request, workflow_dispatch and schedule triggers"],
          ["ci-job", "Jobs"],
          ["ci-step", "Steps"],
          ["ci-runner", "Runners"],
          ["ci-action", "Reusable actions"],
          ["ci-cache", "Dependency caching basics"],
        ],
      },

      {
        id: "CI-02",
        title: "Run TypeScript & Playwright Tests in CI",
        description:
          "Start with web/API automation because it is straightforward to execute on hosted runners.",

        tasks: [
          ["ci-checkout", "Checkout repository"],
          ["ci-node", "Set up Node.js"],
          ["ci-npm-ci", "Install dependencies with npm ci"],
          ["ci-pw-browser", "Install Playwright browser dependencies"],
          ["ci-test", "Run tests"],
          ["ci-report", "Upload reports"],
          ["ci-artifact", "Upload traces/screenshots/videos"],
        ],
      },

      {
        id: "CI-03",
        title: "Secrets & Environment Configuration",
        description:
          "Run tests safely against different environments.",

        tasks: [
          ["ci-secret", "GitHub Actions secrets"],
          ["ci-vars", "Repository/environment variables"],
          ["ci-envs", "Dev/staging environment configuration"],
          ["ci-no-secret", "Never commit credentials/tokens"],
          ["ci-mask", "Understand secret masking limitations"],
        ],
      },

      {
        id: "CI-04",
        title: "Mobile CI Concepts",
        description:
          "Understand why mobile CI is more infrastructure-heavy than browser CI.",

        tasks: [
          ["ci-android-emulator", "Android emulator in CI concept"],
          ["ci-macos", "macOS runners for iOS"],
          ["ci-simulator", "iOS simulator execution concept"],
          ["ci-real-device", "Real-device/cloud-device strategy"],
          ["ci-app-build", "Obtain/install app builds in CI"],
          ["ci-appium", "Start Appium and drivers in CI"],
          ["ci-cost", "Understand time/cost constraints of mobile CI"],
        ],
      },

      {
        id: "CI-05",
        title: "Automation in Delivery Workflow",
        description:
          "Use automation as a feedback system rather than just a collection of scripts.",

        tasks: [
          ["ci-pr", "Run fast checks on pull requests"],
          ["ci-smoke", "Post-deployment smoke tests"],
          ["ci-nightly", "Scheduled regression"],
          ["ci-tag", "Select suites by tags/capabilities"],
          ["ci-fail", "Define what should block a pipeline"],
          ["ci-result", "Share useful test results with the team"],
        ],
      },
    ],
  },

  {
    id: "phase-15",
    label: "PHASE 15",
    title: "Advanced Automation Engineering",
    duration: "Ongoing",
    description:
      "Develop the engineering habits that distinguish maintainable automation from fragile scripts.",

    topics: [
      {
        id: "ADV-01",
        title: "Parallel & Multi-Device Execution",
        description:
          "Scale execution while keeping test data and devices isolated.",

        tasks: [
          ["adv-parallel", "Parallel workers"],
          ["adv-device", "Multiple-device execution"],
          ["adv-cap", "Capability matrices"],
          ["adv-data", "Parallel-safe test data"],
          ["adv-resource", "Device/resource allocation"],
          ["adv-report", "Merge/report parallel results"],
        ],
      },

      {
        id: "ADV-02",
        title: "Maintainability & Refactoring",
        description:
          "Keep the automation suite understandable as it grows.",

        tasks: [
          ["adv-review", "Code review automation changes"],
          ["adv-refactor", "Refactor duplication"],
          ["adv-abstraction", "Avoid premature abstractions"],
          ["adv-naming", "Consistent naming conventions"],
          ["adv-dead", "Remove dead/obsolete tests"],
          ["adv-doc", "Document non-obvious framework decisions"],
          ["adv-deps", "Keep dependencies maintained"],
        ],
      },

      {
        id: "ADV-03",
        title: "Observability & Failure Analysis",
        description:
          "Separate product defects, environment failures and automation defects quickly.",

        tasks: [
          ["adv-triage", "Failure triage workflow"],
          ["adv-product", "Product bug vs test bug vs environment issue"],
          ["adv-logs", "Correlate client, Appium and backend logs"],
          ["adv-network", "Use network/API evidence when useful"],
          ["adv-history", "Track recurring failures and flakiness"],
          ["adv-metrics", "Useful automation health metrics"],
        ],
      },
    ],
  },

  {
    id: "phase-16",
    label: "PHASE 16",
    title: "Final Portfolio Project & Interview Preparation",
    duration: "Final stage",
    description:
      "Build a complete TypeScript automation project that demonstrates web/API/mobile engineering skills.",

    topics: [
      {
        id: "FINAL-01",
        title: "Plan the Project",
        description:
          "Choose a realistic app and define a sensible automation scope.",

        tasks: [
          ["final-app", "Choose a testable mobile app or demo app"],
          ["final-risk", "Identify critical user journeys and risks"],
          ["final-scope", "Define smoke and regression scope"],
          ["final-platform", "Define Android/iOS coverage"],
          ["final-api-scope", "Identify useful API coverage/setup"],
          ["final-arch-plan", "Sketch framework architecture before implementation"],
        ],
      },

      {
        id: "FINAL-02",
        title: "Build the TypeScript Framework",
        description:
          "Create a portfolio-quality repository rather than disconnected scripts.",

        tasks: [
          ["final-ts", "Strict TypeScript configuration"],
          ["final-wdio", "WebdriverIO + Appium setup"],
          ["final-screens", "Screen Object architecture"],
          ["final-config", "Environment/device configuration"],
          ["final-data", "Test data strategy"],
          ["final-log", "Logging and artifacts"],
          ["final-report", "Allure or equivalent reporting"],
        ],
      },

      {
        id: "FINAL-03",
        title: "Automate Mobile Scenarios",
        description:
          "Implement meaningful mobile coverage on Android and iOS.",

        tasks: [
          ["final-auth", "Authentication/onboarding flow"],
          ["final-core", "Core business flow"],
          ["final-negative", "Negative scenarios"],
          ["final-perm", "Permission/system interaction scenario"],
          ["final-deep", "Deep-link or app lifecycle scenario"],
          ["final-android", "Run on Android"],
          ["final-ios", "Run on iOS"],
          ["final-flaky", "Stabilise and document known limitations"],
        ],
      },

      {
        id: "FINAL-04",
        title: "Add Web/API & CI",
        description:
          "Demonstrate that the same TypeScript skill set covers multiple testing layers.",

        tasks: [
          ["final-pw", "Add a small Playwright web suite if relevant"],
          ["final-api", "Add API tests or API test-data setup"],
          ["final-ci-web", "Run web/API checks in GitHub Actions"],
          ["final-ci-mobile", "Document or implement mobile CI strategy"],
          ["final-artifacts", "Publish reports and failure artifacts"],
          ["final-readme", "Document setup, architecture and commands in README"],
        ],
      },

      {
        id: "FINAL-05",
        title: "Interview Preparation",
        description:
          "Be able to explain both the code and the testing decisions behind it.",

        tasks: [
          ["int-js", "JavaScript event loop, promises and async/await questions"],
          ["int-ts", "TypeScript types, interfaces, generics and OOP questions"],
          ["int-pw", "Playwright locators, fixtures, waits and isolation questions"],
          ["int-api", "HTTP/API automation questions"],
          ["int-wdio", "WebdriverIO architecture and runner questions"],
          ["int-appium", "Appium architecture, sessions, locators and contexts questions"],
          ["int-android", "ADB/Android automation questions"],
          ["int-ios", "Xcode/WDA/iOS automation questions"],
          ["int-framework", "Framework architecture and flaky-test questions"],
          ["int-ci", "CI/CD and test execution strategy questions"],
          ["int-demo", "Practice a 10-minute walkthrough of your portfolio project"],
        ],
      },
    ],
  },
];


let currentFilter = "all";


function loadProgress() {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEY)
    ) || {};
  } catch {
    return {};
  }
}


function saveProgress(progress) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(progress)
  );
}


function getTopicStatus(topic, progress) {

  const completed =
    topic.tasks.filter(
      task => progress[task[0]]
    ).length;

  if (completed === 0) {
    return "not-started";
  }

  if (completed === topic.tasks.length) {
    return "done";
  }

  return "in-progress";
}


function getPhasePercentage(phase, progress) {

  const tasks =
    phase.topics.flatMap(
      topic => topic.tasks
    );

  if (!tasks.length) {
    return 0;
  }

  return Math.round(
    tasks.filter(
      task => progress[task[0]]
    ).length / tasks.length * 100
  );
}


function getOverallPercentage(progress) {

  const tasks =
    roadmap.flatMap(
      phase =>
        phase.topics.flatMap(
          topic => topic.tasks
        )
    );

  if (!tasks.length) {
    return 0;
  }

  return Math.round(
    tasks.filter(
      task => progress[task[0]]
    ).length / tasks.length * 100
  );
}


function statusLabel(status) {

  if (status === "done") {
    return "DONE";
  }

  if (status === "in-progress") {
    return "IN PROGRESS";
  }

  return "NOT STARTED";
}


function renderRoadmap() {

  const container =
    document.getElementById("roadmap");

  const progress =
    loadProgress();

  container.innerHTML = "";


  roadmap.forEach(phase => {

    const phaseElement =
      document.createElement("section");

    phaseElement.className = "phase";
    phaseElement.dataset.phase = phase.id;

    const phasePercentage =
      getPhasePercentage(
        phase,
        progress
      );


    phaseElement.innerHTML = `
      <div class="phase-header">

        <div>

          <span class="phase-label">
            ${phase.label}
          </span>

          <h2 class="phase-title">
            ${phase.title}
          </h2>

          <p class="phase-duration">
            ${phase.duration}
          </p>

          <p class="phase-description">
            ${phase.description}
          </p>

        </div>


        <div class="phase-progress">

          <span class="phase-progress-label">
            PROGRESS
          </span>

          <strong
            class="phase-progress-value"
            data-phase-progress="${phase.id}"
          >
            ${phasePercentage}%
          </strong>

        </div>

      </div>
    `;


    phase.topics.forEach(topic => {

      const status =
        getTopicStatus(
          topic,
          progress
        );

      const topicElement =
        document.createElement("article");

      topicElement.className = "topic";

      topicElement.dataset.status =
        status;


      const taskHTML =
        topic.tasks.map(
          (task, index) => {

            const checked =
              Boolean(
                progress[task[0]]
              );

            return `
              <label
                class="task ${
                  checked
                    ? "completed"
                    : ""
                }"
              >

                <input
                  type="checkbox"
                  data-task="${task[0]}"
                  ${
                    checked
                      ? "checked"
                      : ""
                  }
                >

                <span class="task-number">
                  ${
                    String(index + 1)
                      .padStart(2, "0")
                  }
                </span>

                <span class="task-text">
                  ${task[1]}
                </span>

              </label>
            `;
          }
        ).join("");


      topicElement.innerHTML = `

        <button
          class="topic-header"
          type="button"
        >

          <div class="topic-title">

            <span class="topic-id">
              ${topic.id}
            </span>

            <div>

              <div class="topic-name">
                ${topic.title}
              </div>

              <div class="topic-description">
                ${topic.description}
              </div>

              <span
                class="status status-${status}"
              >
                ${statusLabel(status)}
              </span>

            </div>

          </div>


          <span class="chevron">
            ⌄
          </span>

        </button>


        <div class="topic-content">

          <div class="starting-point">

            <span class="section-label">
              WHY THIS MATTERS
            </span>

            <p>
              ${topic.description}
            </p>

          </div>


          <div>

            <div
              class="section-label tasks-title"
            >
              STEPS TO LEARN
            </div>

            ${taskHTML}

          </div>

        </div>
      `;


      phaseElement.appendChild(
        topicElement
      );

    });


    container.appendChild(
      phaseElement
    );

  });


  addTopicListeners();

  updateAllUI();
}


function addTopicListeners() {

  document
    .querySelectorAll(".topic-header")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          button
            .closest(".topic")
            .classList
            .toggle("open");

        }
      );

    });


  document
    .querySelectorAll(
      'input[type="checkbox"]'
    )
    .forEach(checkbox => {

      checkbox.addEventListener(
        "change",
        () => {

          const progress =
            loadProgress();

          progress[
            checkbox.dataset.task
          ] = checkbox.checked;

          saveProgress(
            progress
          );

          checkbox
            .closest(".task")
            .classList
            .toggle(
              "completed",
              checkbox.checked
            );

          updateAllUI();

        }
      );

    });
}


function updateAllUI() {

  const progress =
    loadProgress();


  roadmap.forEach(phase => {

    const phaseEl =
      document.querySelector(
        `[data-phase="${phase.id}"]`
      );

    if (!phaseEl) {
      return;
    }


    phase.topics.forEach(
      (topic, index) => {

        const topicEl =
          phaseEl
            .querySelectorAll(".topic")
            [index];

        const status =
          getTopicStatus(
            topic,
            progress
          );

        topicEl.dataset.status =
          status;


        const badge =
          topicEl.querySelector(
            ".status"
          );

        badge.className =
          `status status-${status}`;

        badge.textContent =
          statusLabel(status);

      }
    );


    const phaseProgress =
      document.querySelector(
        `[data-phase-progress="${phase.id}"]`
      );

    if (phaseProgress) {

      phaseProgress.textContent =
        `${
          getPhasePercentage(
            phase,
            progress
          )
        }%`;

    }

  });


  const overall =
    getOverallPercentage(
      progress
    );


  document.getElementById(
    "overallProgress"
  ).textContent =
    `${overall}%`;


  document.getElementById(
    "overallProgressBar"
  ).style.width =
    `${overall}%`;


  applyFilter();
}


function setupFilters() {

  document
    .querySelectorAll(".filter-button")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          currentFilter =
            button.dataset.filter;


          document
            .querySelectorAll(
              ".filter-button"
            )
            .forEach(item => {

              item.classList.remove(
                "active"
              );

            });


          button.classList.add(
            "active"
          );


          applyFilter();

        }
      );

    });
}


function applyFilter() {

  document
    .querySelectorAll(".phase")
    .forEach(phase => {

      let visibleTopics = 0;


      phase
        .querySelectorAll(".topic")
        .forEach(topic => {

          const visible =
            currentFilter === "all" ||
            topic.dataset.status ===
              currentFilter;


          topic.classList.toggle(
            "hidden",
            !visible
          );


          if (visible) {
            visibleTopics += 1;
          }

        });


      phase.classList.toggle(
        "hidden-phase",
        visibleTopics === 0
      );

    });
}


renderRoadmap();

setupFilters();
