# Agent instructions

Big Slider Card is a Lit-based Home Assistant custom card distributed through
HACS. Preserve compatibility with existing Lovelace YAML and Home Assistant
service APIs.

## Repository rules

- Use the `$develop-big-slider-card` skill for implementation, fixes, reviews,
  configuration, entity support, localization, and visible UI changes.
- Make the smallest cohesive change and add regression tests for changed
  behavior.
- Never edit `dist/big-slider-card.js` manually; generate it with the build and
  include it when source changes affect the shipped card.
- Do not bump versions, tag releases, publish, commit, or push unless explicitly
  requested.
- Treat existing modifications as user-owned. Do not revert, stage, or reformat
  unrelated work.

## Required verification

Before declaring implementation work complete, run:

```sh
npm run check
git diff --check
git status --short
```

Report any verification that could not be performed.
