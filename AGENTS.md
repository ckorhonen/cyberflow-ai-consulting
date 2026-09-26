# Cyberflow Component Instructions

`src/CyberflowAI.js` is the entire tracked application surface: a React JSX component using `lucide-react` icons, Tailwind classes, and local menu state. No package manifest, application entrypoint, build configuration, or test harness is checked in. Do not invent npm commands or claim this component can run standalone.

Preserve the existing component API, content, styling conventions, and responsive menu behavior. Start with `git status --short` and keep unrelated edits intact. For source-only changes, inspect JSX/imports and run `git diff --check`; `node --check` alone cannot parse JSX. If a compatible consuming app is supplied within the task, use its actual dependencies/build checks and inspect desktop/mobile menu interaction. Otherwise report the missing React/lucide/Tailwind harness as the runtime-validation blocker rather than creating one implicitly. Finish with changed paths, checks actually run, and unverified behavior.
