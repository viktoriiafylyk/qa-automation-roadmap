const STORAGE_KEY = "qa-automation-roadmap-v2";


const roadmap = [

    {
        id: "phase-1",
        label: "PHASE 1",
        title: "Python Fundamentals",
        duration: "Month 1",
        description:
            "Build a strong Python foundation before moving into test automation.",

        topics: [

            {
                id: "PY-01",
                title: "Python Basics",
                description:
                    "Learn the core syntax and building blocks of Python.",

                tasks: [
                    ["py-variables", "Variables and assignment"],
                    ["py-types", "Basic data types: str, int, float, bool, None"],
                    ["py-conversion", "Type conversion and casting"],
                    ["py-strings", "Strings and common string methods"],
                    ["py-operators", "Arithmetic, comparison and logical operators"],
                    ["py-input", "Basic input and output"],
                ]
            },


            {
                id: "PY-02",
                title: "Conditions & Loops",
                description:
                    "Control program execution and repeat operations.",

                tasks: [
                    ["py-if", "if / elif / else"],
                    ["py-nested-if", "Nested conditions"],
                    ["py-for", "for loops"],
                    ["py-while", "while loops"],
                    ["py-range", "range()"],
                    ["py-break", "break and continue"],
                ]
            },


            {
                id: "PY-03",
                title: "Collections",
                description:
                    "Work confidently with groups of test data.",

                tasks: [
                    ["py-lists", "Lists"],
                    ["py-tuples", "Tuples"],
                    ["py-sets", "Sets"],
                    ["py-dicts", "Dictionaries"],
                    ["py-indexing", "Indexing and slicing"],
                    ["py-nested-data", "Nested lists and dictionaries"],
                ]
            },


            {
                id: "PY-04",
                title: "Functions",
                description:
                    "Create reusable pieces of automation code.",

                tasks: [
                    ["py-functions", "Defining and calling functions"],
                    ["py-arguments", "Function arguments"],
                    ["py-defaults", "Default arguments"],
                    ["py-return", "return values"],
                    ["py-scope", "Local and global scope"],
                    ["py-lambda", "Basic lambda functions"],
                ]
            },


            {
                id: "PY-05",
                title: "Exceptions & Files",
                description:
                    "Handle failures and work with external data.",

                tasks: [
                    ["py-exceptions", "try / except / else / finally"],
                    ["py-raise", "Raising exceptions"],
                    ["py-files", "Reading and writing files"],
                    ["py-pathlib", "Working with pathlib"],
                    ["py-json", "Reading and writing JSON"],
                    ["py-csv", "Reading and writing CSV"],
                ]
            },


            {
                id: "PY-06",
                title: "Modules, Packages & Environments",
                description:
                    "Understand how real Python projects are structured.",

                tasks: [
                    ["py-imports", "import and from ... import"],
                    ["py-modules", "Creating your own modules"],
                    ["py-packages", "Python packages"],
                    ["py-pip", "Installing packages with pip"],
                    ["py-venv", "Creating virtual environments"],
                    ["py-requirements", "requirements.txt"],
                ]
            },


            {
                id: "PY-07",
                title: "Object-Oriented Programming",
                description:
                    "Learn the OOP concepts used heavily in automation frameworks.",

                tasks: [
                    ["py-classes", "Classes and objects"],
                    ["py-init", "__init__"],
                    ["py-attributes", "Attributes"],
                    ["py-methods", "Methods"],
                    ["py-inheritance", "Inheritance"],
                    ["py-encapsulation", "Encapsulation"],
                    ["py-polymorphism", "Polymorphism"],
                ]
            },


            {
                id: "PY-08",
                title: "Intermediate Python",
                description:
                    "Develop the Python skills needed for maintainable automation.",

                tasks: [
                    ["py-comprehensions", "List and dictionary comprehensions"],
                    ["py-unpacking", "Unpacking"],
                    ["py-args", "*args and **kwargs"],
                    ["py-map-filter", "map(), filter() and practical use cases"],
                    ["py-enumerate", "enumerate()"],
                    ["py-zip", "zip()"],
                    ["py-generators", "Basic generators"],
                ]
            }

        ]
    },


    {
        id: "phase-2",
        label: "PHASE 2",
        title: "Python for QA",
        duration: "Month 1–2",
        description:
            "Turn general Python knowledge into practical QA automation skills.",

        topics: [

            {
                id: "QA-PY-01",
                title: "Assertions & Test Thinking",
                description:
                    "Learn to express expected behaviour in code.",

                tasks: [
                    ["qa-assert", "Python assert statements"],
                    ["qa-expected", "Expected vs actual result"],
                    ["qa-positive", "Positive test data"],
                    ["qa-negative", "Negative test data"],
                    ["qa-edge", "Boundary and edge-case data"],
                    ["qa-test-readable", "Writing readable test logic"],
                ]
            },


            {
                id: "QA-PY-02",
                title: "Strings, Regex & Data Processing",
                description:
                    "Process and validate real application data.",

                tasks: [
                    ["qa-string-search", "String searching and validation"],
                    ["qa-split", "split() and join()"],
                    ["qa-replace", "replace()"],
                    ["qa-regex", "Regular expressions"],
                    ["qa-regex-email", "Validate common formats with regex"],
                    ["qa-data-clean", "Basic data transformation"],
                ]
            },


            {
                id: "QA-PY-03",
                title: "JSON, CSV & Test Data",
                description:
                    "Create reusable test data instead of hardcoding everything.",

                tasks: [
                    ["qa-json-read", "Read JSON test data"],
                    ["qa-json-write", "Generate JSON data"],
                    ["qa-csv-data", "Use CSV for test data"],
                    ["qa-dicts-data", "Represent test cases with dictionaries"],
                    ["qa-test-data", "Separate test data from test logic"],
                    ["qa-data-builder", "Basic test data builders"],
                ]
            },


            {
                id: "QA-PY-04",
                title: "Dates, Time & Random Data",
                description:
                    "Generate realistic dynamic test data.",

                tasks: [
                    ["qa-datetime", "datetime module"],
                    ["qa-date-format", "Date formatting"],
                    ["qa-date-comparison", "Date comparison"],
                    ["qa-timedelta", "timedelta"],
                    ["qa-random", "Random test data"],
                    ["qa-unique-data", "Generate unique values"],
                ]
            },


            {
                id: "QA-PY-05",
                title: "Configuration & Environment Variables",
                description:
                    "Keep credentials and environment-specific settings out of test logic.",

                tasks: [
                    ["qa-env", "Environment variables"],
                    ["qa-config", "Configuration files"],
                    ["qa-env-separation", "Separate dev / test / staging settings"],
                    ["qa-secrets", "Understand secrets management"],
                    ["qa-config-class", "Create a configuration object"],
                ]
            },


            {
                id: "QA-PY-06",
                title: "Logging & Debugging",
                description:
                    "Understand what your automated tests are doing when they fail.",

                tasks: [
                    ["qa-print-debug", "Temporary debugging with print()"],
                    ["qa-logging", "Python logging"],
                    ["qa-log-levels", "INFO / WARNING / ERROR / DEBUG"],
                    ["qa-traceback", "Read Python tracebacks"],
                    ["qa-debugger", "Basic debugger usage"],
                ]
            },


            {
                id: "QA-PY-07",
                title: "Type Hints & Clean Python",
                description:
                    "Write automation code that is easier to understand and maintain.",

                tasks: [
                    ["qa-type-hints", "Basic type hints"],
                    ["qa-return-types", "Function return types"],
                    ["qa-clean-code", "Readable naming"],
                    ["qa-small-functions", "Keep functions focused"],
                    ["qa-duplication", "Recognise and reduce duplication"],
                ]
            }

        ]
    },


    {
        id: "phase-3",
        label: "PHASE 3",
        title: "Git & pytest",
        duration: "Month 2",
        description:
            "Learn the tools used to build and maintain Python test suites.",

        topics: [

            {
                id: "GIT-01",
                title: "Git Fundamentals",
                description:
                    "Become comfortable working with automation code in Git.",

                tasks: [
                    ["git-clone", "git clone"],
                    ["git-status", "git status"],
                    ["git-add", "git add"],
                    ["git-commit", "git commit"],
                    ["git-push", "git push"],
                    ["git-pull", "git pull"],
                    ["git-branch", "Branches"],
                    ["git-merge", "Basic merging"],
                    ["git-conflict", "Resolve merge conflicts"],
                ]
            },


            {
                id: "PYTEST-01",
                title: "pytest Basics",
                description:
                    "Build your first real Python test suite.",

                tasks: [
                    ["pytest-install", "Install pytest"],
                    ["pytest-naming", "Test file and function naming"],
                    ["pytest-test", "Write a basic test"],
                    ["pytest-assert", "Assertions"],
                    ["pytest-run", "Run tests from terminal"],
                    ["pytest-output", "Understand pytest output"],
                ]
            },


            {
                id: "PYTEST-02",
                title: "Fixtures & conftest",
                description:
                    "Create reusable setup and teardown logic.",

                tasks: [
                    ["pytest-fixtures", "pytest fixtures"],
                    ["pytest-scope", "Fixture scopes"],
                    ["pytest-conftest", "conftest.py"],
                    ["pytest-setup", "Test setup"],
                    ["pytest-teardown", "Test teardown"],
                    ["pytest-reuse", "Reuse fixtures across tests"],
                ]
            },


            {
                id: "PYTEST-03",
                title: "Parametrization & Markers",
                description:
                    "Run the same test against multiple scenarios.",

                tasks: [
                    ["pytest-param", "Parametrization"],
                    ["pytest-multiple-data", "Multiple test data sets"],
                    ["pytest-markers", "Custom markers"],
                    ["pytest-skip", "Skip tests"],
                    ["pytest-xfail", "Expected failures"],
                ]
            },


            {
                id: "PYTEST-04",
                title: "Test Organization",
                description:
                    "Structure a test project so it can grow without becoming chaotic.",

                tasks: [
                    ["pytest-folders", "Organise test folders"],
                    ["pytest-naming2", "Consistent naming conventions"],
                    ["pytest-smoke", "Smoke test suite"],
                    ["pytest-regression", "Regression test suite"],
                    ["pytest-tags", "Test categories"],
                ]
            },


            {
                id: "PYTEST-05",
                title: "Test Quality",
                description:
                    "Learn what makes an automated test valuable.",

                tasks: [
                    ["pytest-independent", "Independent tests"],
                    ["pytest-deterministic", "Deterministic tests"],
                    ["pytest-readable", "Readable test scenarios"],
                    ["pytest-fast", "Keep tests efficient"],
                    ["pytest-maintain", "Maintainable assertions"],
                ]
            }

        ]
    },


    {
        id: "phase-4",
        label: "PHASE 4",
        title: "Automation Fundamentals",
        duration: "Month 2",
        description:
            "Understand the fundamental concepts behind UI automation.",

        topics: [

            {
                id: "AUTO-01",
                title: "What Test Automation Is",
                description:
                    "Understand what should and should not be automated.",

                tasks: [
                    ["auto-purpose", "Purpose of test automation"],
                    ["auto-manual", "Automation vs manual testing"],
                    ["auto-candidates", "Choose good automation candidates"],
                    ["auto-maintenance", "Understand automation maintenance cost"],
                    ["auto-pyramid", "Understand the test pyramid"],
                ]
            },


            {
                id: "AUTO-02",
                title: "Locators",
                description:
                    "Find elements reliably instead of relying on fragile selectors.",

                tasks: [
                    ["auto-id", "ID locators"],
                    ["auto-text", "Text-based locators"],
                    ["auto-css", "CSS selectors"],
                    ["auto-xpath", "XPath basics"],
                    ["auto-accessibility", "Accessibility-based locators"],
                    ["auto-stable", "Choose stable locators"],
                ]
            },


            {
                id: "AUTO-03",
                title: "Waits & Synchronization",
                description:
                    "Understand one of the most important sources of flaky tests.",

                tasks: [
                    ["auto-waits", "Explicit waits"],
                    ["auto-implicit", "Understand implicit waits"],
                    ["auto-conditions", "Wait for conditions"],
                    ["auto-timeouts", "Timeouts"],
                    ["auto-flaky", "Recognise synchronization problems"],
                ]
            },


            {
                id: "AUTO-04",
                title: "Browser Automation Concepts",
                description:
                    "Use your previous Selenium/Playwright experience as a bridge into mobile automation.",

                tasks: [
                    ["auto-dom", "Understand the DOM"],
                    ["auto-browser", "Browser automation lifecycle"],
                    ["auto-navigation", "Navigation and page actions"],
                    ["auto-forms", "Forms and inputs"],
                    ["auto-browser-debug", "Debug automated browser tests"],
                ]
            },


            {
                id: "AUTO-05",
                title: "Page Object / Screen Object",
                description:
                    "Separate test scenarios from application interaction logic.",

                tasks: [
                    ["auto-po", "Page Object concept"],
                    ["auto-screen", "Screen Object concept"],
                    ["auto-elements", "Store element locators"],
                    ["auto-actions", "Reusable actions"],
                    ["auto-assertions", "Keep assertions in appropriate places"],
                ]
            },


            {
                id: "AUTO-06",
                title: "Automation Debugging",
                description:
                    "Learn to investigate failed automation instead of blindly rerunning tests.",

                tasks: [
                    ["auto-debug-screenshot", "Use screenshots"],
                    ["auto-debug-logs", "Use logs"],
                    ["auto-debug-stack", "Read stack traces"],
                    ["auto-reproduce", "Reproduce failures manually"],
                    ["auto-root-cause", "Find the automation vs product root cause"],
                ]
            }

        ]
    },


    {
        id: "phase-5",
        label: "PHASE 5",
        title: "Automation Framework Architecture",
        duration: "Month 2–3",
        description:
            "Build a maintainable automation framework instead of a collection of scripts.",

        topics: [

            {
                id: "FRAME-01",
                title: "Framework Structure",
                description:
                    "Understand how a real automation repository is organised.",

                tasks: [
                    ["frame-folders", "Separate tests and framework code"],
                    ["frame-pages", "Pages / screens"],
                    ["frame-utils", "Utilities"],
                    ["frame-data", "Test data"],
                    ["frame-config", "Configuration"],
                    ["frame-reports", "Reports and artifacts"],
                ]
            },


            {
                id: "FRAME-02",
                title: "Configuration",
                description:
                    "Make the framework adaptable to different environments.",

                tasks: [
                    ["frame-env", "Environment configuration"],
                    ["frame-base-url", "Base URLs"],
                    ["frame-device", "Device configuration"],
                    ["frame-config-object", "Configuration object"],
                    ["frame-defaults", "Safe defaults"],
                ]
            },


            {
                id: "FRAME-03",
                title: "Driver Management",
                description:
                    "Create a clean way to initialise and close automation drivers.",

                tasks: [
                    ["frame-driver", "Driver concept"],
                    ["frame-init", "Driver initialisation"],
                    ["frame-teardown", "Driver cleanup"],
                    ["frame-fixture", "Driver fixture"],
                    ["frame-reuse", "Driver lifecycle"],
                ]
            },


            {
                id: "FRAME-04",
                title: "Reusable Components",
                description:
                    "Avoid duplicating the same interaction logic across tests.",

                tasks: [
                    ["frame-component", "Reusable components"],
                    ["frame-navigation", "Navigation helpers"],
                    ["frame-common", "Common actions"],
                    ["frame-helper", "Utility helpers"],
                    ["frame-abstraction", "Useful abstraction vs overengineering"],
                ]
            },


            {
                id: "FRAME-05",
                title: "Artifacts & Reports",
                description:
                    "Make failures understandable from CI or local runs.",

                tasks: [
                    ["frame-screenshot", "Automatic screenshots"],
                    ["frame-video", "Understand test video recording"],
                    ["frame-html", "HTML reports"],
                    ["frame-allure", "Allure basics"],
                    ["frame-artifacts", "Store failure artifacts"],
                ]
            },


            {
                id: "FRAME-06",
                title: "Maintainability",
                description:
                    "Keep the framework healthy as test coverage grows.",

                tasks: [
                    ["frame-duplication", "Reduce duplicated automation code"],
                    ["frame-naming", "Consistent naming"],
                    ["frame-review", "Code review basics"],
                    ["frame-refactor", "Refactoring"],
                    ["frame-debt", "Recognise automation technical debt"],
                ]
            }

        ]
    },


    {
        id: "phase-6",
        label: "PHASE 6",
        title: "API Automation",
        duration: "Month 2–3",
        description:
            "Automate backend/API checks using Python.",

        topics: [

            {
                id: "API-01",
                title: "HTTP Fundamentals",
                description:
                    "Strengthen the HTTP knowledge needed for API testing.",

                tasks: [
                    ["api-methods", "GET / POST / PUT / PATCH / DELETE"],
                    ["api-status", "HTTP status codes"],
                    ["api-headers", "Request and response headers"],
                    ["api-body", "Request body"],
                    ["api-query", "Query parameters"],
                    ["api-path", "Path parameters"],
                    ["api-auth", "Authentication basics"],
                ]
            },


            {
                id: "API-02",
                title: "Python requests",
                description:
                    "Send API requests directly from Python.",

                tasks: [
                    ["api-requests", "requests library"],
                    ["api-get", "GET requests"],
                    ["api-post", "POST requests"],
                    ["api-put", "PUT and PATCH"],
                    ["api-delete", "DELETE requests"],
                    ["api-timeout", "Request timeouts"],
                ]
            },


            {
                id: "API-03",
                title: "API Assertions",
                description:
                    "Validate API behaviour at multiple levels.",

                tasks: [
                    ["api-status-assert", "Assert status codes"],
                    ["api-header-assert", "Assert response headers"],
                    ["api-body-assert", "Assert response body"],
                    ["api-json-assert", "Validate JSON fields"],
                    ["api-schema", "Understand schema validation"],
                ]
            },


            {
                id: "API-04",
                title: "Authentication",
                description:
                    "Automate APIs that require authenticated sessions.",

                tasks: [
                    ["api-basic-auth", "Basic authentication"],
                    ["api-token", "Token authentication"],
                    ["api-bearer", "Bearer tokens"],
                    ["api-login", "Login flow"],
                    ["api-refresh", "Understand refresh tokens"],
                ]
            },


            {
                id: "API-05",
                title: "CRUD Automation",
                description:
                    "Build complete API test scenarios.",

                tasks: [
                    ["api-create", "Create resource"],
                    ["api-read", "Read resource"],
                    ["api-update", "Update resource"],
                    ["api-delete-resource", "Delete resource"],
                    ["api-chain", "Chain dependent requests"],
                ]
            },


            {
                id: "API-06",
                title: "API Test Architecture",
                description:
                    "Move from individual requests to a maintainable API suite.",

                tasks: [
                    ["api-client", "Create reusable API client"],
                    ["api-endpoints", "Endpoint abstraction"],
                    ["api-data", "Separate API test data"],
                    ["api-fixtures", "API fixtures"],
                    ["api-negative", "Negative API testing"],
                    ["api-cleanup", "Test data cleanup"],
                ]
            }

        ]
    },


    {
        id: "phase-7",
        label: "PHASE 7",
        title: "Appium Fundamentals",
        duration: "Month 3",
        description:
            "Start mobile automation with Python and Appium.",

        topics: [

            {
                id: "APP-01",
                title: "Appium Architecture",
                description:
                    "Understand how Appium communicates with mobile applications.",

                tasks: [
                    ["app-server", "Appium server concept"],
                    ["app-client", "Appium Python client"],
                    ["app-driver", "WebDriver concept"],
                    ["app-session", "Appium sessions"],
                    ["app-command", "Client → server → device flow"],
                ]
            },


            {
                id: "APP-02",
                title: "Appium + Python",
                description:
                    "Create the first mobile automation test.",

                tasks: [
                    ["app-install", "Install Appium Python client"],
                    ["app-driver-init", "Create driver"],
                    ["app-session-start", "Start mobile session"],
                    ["app-find", "Find mobile elements"],
                    ["app-click", "Tap elements"],
                    ["app-input", "Enter text"],
                ]
            },


            {
                id: "APP-03",
                title: "Mobile Locators",
                description:
                    "Learn reliable strategies for finding mobile elements.",

                tasks: [
                    ["app-accessibility", "Accessibility ID"],
                    ["app-resource-id", "Resource ID"],
                    ["app-xpath", "XPath on mobile"],
                    ["app-class", "Class name"],
                    ["app-platform", "Platform-specific locators"],
                ]
            },


            {
                id: "APP-04",
                title: "Gestures & Interactions",
                description:
                    "Automate real mobile interactions.",

                tasks: [
                    ["app-swipe", "Swipe"],
                    ["app-scroll", "Scroll"],
                    ["app-longpress", "Long press"],
                    ["app-drag", "Drag and drop"],
                    ["app-touch", "Touch actions"],
                ]
            },


            {
                id: "APP-05",
                title: "Mobile System Interactions",
                description:
                    "Handle interactions outside the application's main UI.",

                tasks: [
                    ["app-keyboard", "Mobile keyboard"],
                    ["app-permissions", "Permissions"],
                    ["app-alerts", "Alerts"],
                    ["app-notifications", "Notifications"],
                    ["app-back", "Back navigation"],
                ]
            },


            {
                id: "APP-06",
                title: "App Lifecycle",
                description:
                    "Control the application state during tests.",

                tasks: [
                    ["app-launch", "Launch app"],
                    ["app-close", "Close app"],
                    ["app-reset", "Reset application"],
                    ["app-background", "Background / foreground"],
                    ["app-install-app", "Install application"],
                ]
            },


            {
                id: "APP-07",
                title: "Hybrid Apps & Contexts",
                description:
                    "Understand native and web contexts inside mobile applications.",

                tasks: [
                    ["app-native", "Native context"],
                    ["app-webview", "WebView context"],
                    ["app-contexts", "List available contexts"],
                    ["app-switch", "Switch contexts"],
                    ["app-hybrid-debug", "Debug hybrid applications"],
                ]
            }

        ]
    },


    {
        id: "phase-8",
        label: "PHASE 8",
        title: "Android Automation",
        duration: "Month 3",
        description:
            "Learn the Android-specific knowledge needed for reliable automation.",

        topics: [

            {
                id: "ANDROID-01",
                title: "Android Fundamentals",
                description:
                    "Understand the Android application model.",

                tasks: [
                    ["android-apk", "APK"],
                    ["android-package", "Application package"],
                    ["android-activity", "Activities"],
                    ["android-intent", "Basic intents"],
                    ["android-permission", "Permissions"],
                ]
            },


            {
                id: "ANDROID-02",
                title: "ADB",
                description:
                    "Use Android Debug Bridge to inspect and control devices.",

                tasks: [
                    ["adb-install", "Install APK with ADB"],
                    ["adb-devices", "List connected devices"],
                    ["adb-shell", "Use adb shell"],
                    ["adb-logcat", "Read logcat"],
                    ["adb-uninstall", "Uninstall applications"],
                    ["adb-clear", "Clear application data"],
                ]
            },


            {
                id: "ANDROID-03",
                title: "Android Emulator",
                description:
                    "Run automation on virtual Android devices.",

                tasks: [
                    ["android-emulator", "Create emulator"],
                    ["android-avd", "Understand AVD"],
                    ["android-device-config", "Configure device"],
                    ["android-install", "Install application"],
                    ["android-reset", "Reset emulator state"],
                ]
            },


            {
                id: "ANDROID-04",
                title: "Real Android Device",
                description:
                    "Run automated tests on physical hardware.",

                tasks: [
                    ["android-usb", "Connect physical device"],
                    ["android-debugging", "Enable USB debugging"],
                    ["android-device-id", "Identify device"],
                    ["android-device-run", "Run Appium against device"],
                    ["android-device-debug", "Debug device-specific issues"],
                ]
            }

        ]
    },


    {
        id: "phase-9",
        label: "PHASE 9",
        title: "iOS Automation",
        duration: "Month 3–4",
        description:
            "Learn the iOS-specific ecosystem required for Appium automation.",

        topics: [

            {
                id: "IOS-01",
                title: "iOS Fundamentals",
                description:
                    "Understand the basic iOS application model.",

                tasks: [
                    ["ios-ipa", "IPA concept"],
                    ["ios-bundle", "Bundle ID"],
                    ["ios-app", "Application lifecycle"],
                    ["ios-permissions", "Permissions"],
                    ["ios-deep-links", "Deep links"],
                ]
            },


            {
                id: "IOS-02",
                title: "iOS Simulator",
                description:
                    "Run and debug automation without a physical iPhone.",

                tasks: [
                    ["ios-simulator", "Create simulator"],
                    ["ios-device-types", "Simulator device types"],
                    ["ios-install", "Install application"],
                    ["ios-reset", "Reset simulator"],
                    ["ios-debug", "Inspect simulator behaviour"],
                ]
            },


            {
                id: "IOS-03",
                title: "Xcode",
                description:
                    "Understand the tools behind iOS automation.",

                tasks: [
                    ["ios-xcode", "Xcode basics"],
                    ["ios-build", "Build application"],
                    ["ios-run", "Run application"],
                    ["ios-console", "Read console logs"],
                    ["ios-devices", "Devices and Simulators"],
                ]
            },


            {
                id: "IOS-04",
                title: "WebDriverAgent",
                description:
                    "Understand the component Appium uses for iOS automation.",

                tasks: [
                    ["ios-wda", "What WebDriverAgent is"],
                    ["ios-wda-install", "WDA setup concept"],
                    ["ios-wda-session", "WDA session"],
                    ["ios-wda-errors", "Common WDA failures"],
                ]
            },


            {
                id: "IOS-05",
                title: "Signing & Real iPhone",
                description:
                    "Understand the concepts needed to automate a physical iPhone.",

                tasks: [
                    ["ios-signing", "Code signing concept"],
                    ["ios-provision", "Provisioning profiles"],
                    ["ios-certificates", "Development certificates"],
                    ["ios-real-device", "Connect real iPhone"],
                    ["ios-real-run", "Run Appium on real device"],
                ]
            }

        ]
    },


    {
        id: "phase-10",
        label: "PHASE 10",
        title: "Mobile Automation Framework",
        duration: "Month 4",
        description:
            "Combine everything into a reusable mobile automation framework.",

        topics: [

            {
                id: "MOBILE-01",
                title: "Screen Object Model",
                description:
                    "Create maintainable screen abstractions.",

                tasks: [
                    ["mobile-screen", "Screen Object pattern"],
                    ["mobile-elements", "Screen locators"],
                    ["mobile-actions", "Reusable screen actions"],
                    ["mobile-navigation", "Screen navigation"],
                    ["mobile-assertions", "Screen-level assertions"],
                ]
            },


            {
                id: "MOBILE-02",
                title: "Cross-Platform Architecture",
                description:
                    "Support Android and iOS without duplicating everything.",

                tasks: [
                    ["mobile-platform", "Platform-specific behaviour"],
                    ["mobile-shared", "Shared test logic"],
                    ["mobile-ios", "iOS-specific implementation"],
                    ["mobile-android", "Android-specific implementation"],
                    ["mobile-abstraction", "Useful cross-platform abstraction"],
                ]
            },


            {
                id: "MOBILE-03",
                title: "Test Data & Environments",
                description:
                    "Make mobile tests configurable and repeatable.",

                tasks: [
                    ["mobile-test-data", "Test data management"],
                    ["mobile-env", "Environment configuration"],
                    ["mobile-dev", "Development environment"],
                    ["mobile-stage", "Staging environment"],
                    ["mobile-secrets", "Secrets"],
                ]
            },


            {
                id: "MOBILE-04",
                title: "Flaky Tests & Stability",
                description:
                    "Make automation reliable enough for regular execution.",

                tasks: [
                    ["mobile-flaky", "Identify flaky tests"],
                    ["mobile-sync", "Improve synchronization"],
                    ["mobile-retry", "Understand retries"],
                    ["mobile-clean-state", "Clean application state"],
                    ["mobile-isolation", "Test isolation"],
                ]
            },


            {
                id: "MOBILE-05",
                title: "Parallel Execution",
                description:
                    "Understand how automation can run across multiple devices.",

                tasks: [
                    ["mobile-parallel", "Parallel test execution"],
                    ["mobile-workers", "Workers"],
                    ["mobile-devices", "Multiple devices"],
                    ["mobile-device-matrix", "Device matrix"],
                    ["mobile-resource", "Device resource management"],
                ]
            }

        ]
    },


    {
        id: "phase-11",
        label: "PHASE 11",
        title: "CI/CD & Professional Automation",
        duration: "Month 4",
        description:
            "Run your automation automatically and integrate it into a QA workflow.",

        topics: [

            {
                id: "CI-01",
                title: "GitHub Actions",
                description:
                    "Learn the basics of CI using your GitHub repository.",

                tasks: [
                    ["ci-actions", "What GitHub Actions is"],
                    ["ci-workflow", "Workflow files"],
                    ["ci-trigger", "Workflow triggers"],
                    ["ci-job", "Jobs"],
                    ["ci-step", "Steps"],
                    ["ci-runner", "Runners"],
                ]
            },


            {
                id: "CI-02",
                title: "Running Tests in CI",
                description:
                    "Execute pytest automatically after code changes.",

                tasks: [
                    ["ci-python", "Set up Python"],
                    ["ci-dependencies", "Install dependencies"],
                    ["ci-tests", "Run pytest"],
                    ["ci-failure", "Understand failed workflows"],
                    ["ci-status", "Use CI status checks"],
                ]
            },


            {
                id: "CI-03",
                title: "Reports & Artifacts",
                description:
                    "Make CI results useful for the whole QA team.",

                tasks: [
                    ["ci-report", "Generate test report"],
                    ["ci-allure", "Allure in CI"],
                    ["ci-artifacts", "Upload artifacts"],
                    ["ci-screenshot", "Store screenshots"],
                    ["ci-logs", "Inspect CI logs"],
                ]
            },


            {
                id: "CI-04",
                title: "Secrets & Environments",
                description:
                    "Keep credentials safe while running automation remotely.",

                tasks: [
                    ["ci-secrets", "GitHub secrets"],
                    ["ci-env", "Environment variables"],
                    ["ci-config", "Environment configuration"],
                    ["ci-sensitive", "Do not commit credentials"],
                ]
            },


            {
                id: "CI-05",
                title: "Professional Automation Workflow",
                description:
                    "Understand where automation fits into real QA processes.",

                tasks: [
                    ["ci-smoke", "Run smoke tests after deployment"],
                    ["ci-regression", "Run regression suites"],
                    ["ci-nightly", "Scheduled test execution"],
                    ["ci-pr", "Automation on pull requests"],
                    ["ci-maintenance", "Maintain automation as the product changes"],
                ]
            }

        ]
    },


    {
        id: "phase-12",
        label: "PHASE 12",
        title: "Final Project & Portfolio",
        duration: "Final stage",
        description:
            "Build one complete project that demonstrates your automation skills.",

        topics: [

            {
                id: "FINAL-01",
                title: "Choose a Real Mobile Application",
                description:
                    "Select an application with enough functionality for meaningful automation.",

                tasks: [
                    ["final-app", "Choose an application"],
                    ["final-features", "List testable features"],
                    ["final-critical", "Identify critical user flows"],
                    ["final-risk", "Identify high-risk functionality"],
                ]
            },


            {
                id: "FINAL-02",
                title: "Design the Automation Framework",
                description:
                    "Plan the framework before writing dozens of tests.",

                tasks: [
                    ["final-architecture", "Define project architecture"],
                    ["final-screen", "Define screen objects"],
                    ["final-data", "Define test data strategy"],
                    ["final-config", "Define configuration"],
                    ["final-reporting", "Choose reporting approach"],
                ]
            },


            {
                id: "FINAL-03",
                title: "Automate Critical Flows",
                description:
                    "Create meaningful end-to-end mobile automation.",

                tasks: [
                    ["final-login", "Automate authentication flow"],
                    ["final-core", "Automate main business flow"],
                    ["final-negative", "Add negative scenarios"],
                    ["final-edge", "Add edge cases"],
                    ["final-regression", "Create regression suite"],
                ]
            },


            {
                id: "FINAL-04",
                title: "Add API & CI",
                description:
                    "Connect UI, API and CI skills into one project.",

                tasks: [
                    ["final-api", "Add API tests"],
                    ["final-api-data", "Use API for test data preparation"],
                    ["final-ci", "Run tests in CI"],
                    ["final-report", "Generate CI report"],
                    ["final-artifacts", "Store screenshots/logs"],
                ]
            },


            {
                id: "FINAL-05",
                title: "Refactor & Document",
                description:
                    "Turn the project into something you can confidently show.",

                tasks: [
                    ["final-refactor", "Refactor duplicated code"],
                    ["final-readme", "Write README"],
                    ["final-install", "Document installation"],
                    ["final-run", "Document how to run tests"],
                    ["final-architecture-doc", "Document architecture"],
                ]
            },


            {
                id: "FINAL-06",
                title: "Automation Interview Preparation",
                description:
                    "Prepare to explain your automation decisions in interviews.",

                tasks: [
                    ["final-python-interview", "Python QA interview questions"],
                    ["final-pytest-interview", "pytest questions"],
                    ["final-api-interview", "API automation questions"],
                    ["final-appium-interview", "Appium questions"],
                    ["final-framework-interview", "Framework architecture questions"],
                    ["final-ci-interview", "CI/CD questions"],
                ]
            }

        ]
    }

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

    const total =
        topic.tasks.length;

    const completed =
        topic.tasks.filter(
            task => progress[task[0]]
        ).length;


    if (completed === 0) {

        return "not-started";

    }


    if (completed === total) {

        return "done";

    }


    return "in-progress";

}



function getTopicPercentage(topic, progress) {

    const completed =
        topic.tasks.filter(
            task => progress[task[0]]
        ).length;


    return Math.round(
        completed / topic.tasks.length * 100
    );

}



function getPhasePercentage(phase, progress) {

    let total = 0;

    let completed = 0;


    phase.topics.forEach(topic => {

        total += topic.tasks.length;


        completed +=
            topic.tasks.filter(
                task => progress[task[0]]
            ).length;

    });


    if (total === 0) {

        return 0;

    }


    return Math.round(
        completed / total * 100
    );

}



function getOverallPercentage(progress) {

    let total = 0;

    let completed = 0;


    roadmap.forEach(phase => {

        phase.topics.forEach(topic => {

            total += topic.tasks.length;


            completed +=
                topic.tasks.filter(
                    task => progress[task[0]]
                ).length;

        });

    });


    if (total === 0) {

        return 0;

    }


    return Math.round(
        completed / total * 100
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


        phaseElement.className =
            "phase";


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

                </div>


                <div class="phase-progress">

                    <span class="phase-progress-label">
                        PROGRESS
                    </span>

                    <strong
                        class="phase-progress-value"
                        data-phase="${phase.id}"
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


            topicElement.className =
                `topic ${
                    currentFilter !== "all" &&
                    currentFilter !== status
                        ? "hidden"
                        : ""
                }`;


            topicElement.dataset.status =
                status;


            const taskHTML =
                topic.tasks.map(
                    (task, index) => {

                        const checked =
                            progress[task[0]]
                                ? "checked"
                                : "";


                        return `

                            <label class="task ${
                                checked ? "completed" : ""
                            }">

                                <input
                                    type="checkbox"
                                    data-task="${task[0]}"
                                    ${checked}
                                >

                                <span class="task-number">
                                    ${String(index + 1).padStart(2, "0")}
                                </span>

                                <span>
                                    ${task[1]}
                                </span>

                            </label>

                        `;

                    }
                ).join("");


            topicElement.innerHTML = `

                <button class="topic-header">

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
                            STARTING POINT
                        </span>

                        <p>
                            ${phase.description}
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

    updateOverallProgress();

}



function addTopicListeners() {

    document
        .querySelectorAll(".topic-header")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const topic =
                        button.closest(".topic");


                    topic.classList.toggle(
                        "open"
                    );

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
                    ] =
                        checkbox.checked;


                    saveProgress(
                        progress
                    );


                    const task =
                        checkbox.closest(".task");


                    task.classList.toggle(
                        "completed",
                        checkbox.checked
                    );


                    updateTopicStatuses();

                    updateOverallProgress();

                }
            );

        });

}



function updateTopicStatuses() {

    const progress =
        loadProgress();


    document
        .querySelectorAll(".topic")
        .forEach(topicElement => {

            const checkboxes =
                topicElement.querySelectorAll(
                    'input[type="checkbox"]'
                );


            const completed =
                [...checkboxes].filter(
                    checkbox =>
                        checkbox.checked
                ).length;


            const total =
                checkboxes.length;


            let status;


            if (completed === 0) {

                status =
                    "not-started";

            } else if (
                completed === total
            ) {

                status =
                    "done";

            } else {

                status =
                    "in-progress";

            }


            topicElement.dataset.status =
                status;


            const badge =
                topicElement.querySelector(
                    ".status"
                );


            badge.className =
                `status status-${status}`;


            badge.textContent =
                statusLabel(status);

        });


    roadmap.forEach(phase => {

        const progressValue =
            getPhasePercentage(
                phase,
                progress
            );


        const element =
            document.querySelector(
                `[data-phase="${phase.id}"]`
            );


        if (element) {

            element.textContent =
                `${progressValue}%`;

        }

    });

}



function updateOverallProgress() {

    const progress =
        loadProgress();


    const percentage =
        getOverallPercentage(
            progress
        );


    document.getElementById(
        "overallProgress"
    ).textContent =
        `${percentage}%`;


    document.getElementById(
        "overallProgressBar"
    ).style.width =
        `${percentage}%`;

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
                        .forEach(
                            otherButton => {

                                otherButton
                                    .classList
                                    .remove(
                                        "active"
                                    );

                            }
                        );


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
        .querySelectorAll(".topic")
        .forEach(topic => {

            const status =
                topic.dataset.status;


            if (
                currentFilter === "all" ||
                currentFilter === status
            ) {

                topic.classList.remove(
                    "hidden"
                );

            } else {

                topic.classList.add(
                    "hidden"
                );

            }

        });

}



renderRoadmap();

setupFilters();

updateOverallProgress();
