<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Copilot / AI Agent Instructions (concise)

Purpose: Quickly bring an AI coding agent up to speed on this small static JavaScript examples repository so it can make safe, precise edits.

- **Big picture:** This repository contains a set of simple, independent static demos grouped by topic. Each topic lives in its own folder and is composed of an `index.html` that loads a single non-module script (e.g., `fun.js`, `math.js`, `obj.js`, `app.js`). There is no build system, bundler, or package manager.

- **Folders of interest:**
  - `Funtions/` — demonstrates basic function usage (note: folder name is misspelled).
  - `Math/` — a small random-number guessing example.
  - `Objects/` — object literal manipulation and property ops.
  - `this/` — intended to demonstrate `this` usage; currently `app.js` is empty.

- **Coding patterns in this repo (concrete examples):**
  - Global scripts only — scripts use `prompt`, `alert`, `console.log` and global functions/variables. Example: `Funtions/fun.js` defines `function OddOrEven(val){ ... }` and calls it with a `prompt` result.
  - Interactive browser behaviour — user input via `prompt` and feedback via `alert` (see `Math/math.js`).
  - Direct DOM is minimal or absent — files primarily run procedural logic at load time.

- **When modifying code:**
  - Preserve the global/script-hosted style unless the user asks to migrate to modules or add a build step.
  - Avoid introducing new dependencies or tooling without explicit user approval.
  - If adding new files or folders, follow the existing pattern: `index.html` + single `<script>` file per example folder.

- **Developer workflows & quick commands:**
  - Run locally by opening `index.html` in a browser, or run a simple static server:

    - Python 3: `python3 -m http.server 8000`
    - Node (if available): `npx http-server -c-1 .`

  - There are no tests or lint configs in the repo; do not attempt to run non-existent test runners.

- **Project-specific conventions / gotchas:**
  - The folder `Funtions` contains a typo; refer to it by exact name when editing paths.
  - Expect global side-effects: scripts prompt on load. When editing examples, wrap interactive code behind functions or a clear `DOMContentLoaded` handler if you want to avoid prompting on import.
  - `this/app.js` is currently empty — it is a safe place to add a `this` demonstration; prefer attaching to DOM events instead of running immediately.

- **Safe edits to propose:**
  - Non-breaking improvements: add `DOMContentLoaded` guards, encapsulate example code into functions, add comments explaining purpose, or fix obvious typos (e.g., offer to rename `Funtions` but only after asking the user — renaming affects paths in HTML).

- **What *not* to do without confirmation:**
  - Do not convert scripts to ESM modules or add bundlers (webpack/rollup) without permission.
  - Do not change folder names (like `Funtions`) unless the user approves a global rename and link updates.

If anything here is unclear or you want me to expand a section (e.g., add recommended DOM patterns, or prepare a migration to modules), tell me which part to iterate on.
