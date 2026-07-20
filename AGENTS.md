# Agent instructions

## Project

Big Slider Card is a Lit-based Home Assistant custom card distributed through
HACS. Preserve compatibility with existing Lovelace YAML configurations and
Home Assistant service APIs.

Key areas:

- `src/big-slider-card.ts`: card behavior, rendering, gestures, and services
- `src/types.ts`: public configuration types
- `src/const.ts`: defaults and supported domains
- `src/localize/`: editor and card translations
- `tests/`: Vitest regression tests and Home Assistant fixtures
- `preview/`: deterministic light and dark showcase
- `dist/big-slider-card.js`: generated HACS release bundle

## Workflow

1. Translate the request into observable acceptance criteria.
2. Inspect the relevant implementation and existing tests before editing.
3. Make the smallest cohesive change that satisfies the criteria.
4. Add or update regression tests alongside behavioral changes.
5. Run the most relevant test file while developing.
6. Run `npm run check` before declaring the work complete.
7. For visible changes, inspect light and dark previews in both applicable
   orientations.
8. Review the final diff for scope, compatibility, and generated artifacts.

## Change requirements

### Configuration options

New or changed options should be reflected in all applicable locations:

- `src/types.ts`
- `src/const.ts`
- the Home Assistant config form in `src/big-slider-card.ts`
- behavior or rendering
- tests
- the README option table and examples
- every locale when user-facing text is added

### Entity and service behavior

- Preserve existing domain behavior unless the request explicitly changes it.
- Test the exact Home Assistant domain, service, and payload.
- Test range conversion, clamping, rounding, and entity-provided step values
  when applicable.
- Treat gesture timers and immediate updates as lifecycle-sensitive code.

### Rendering and styling

- Check horizontal and vertical layouts when both can be affected.
- Check light and dark themes.
- Prefer existing Home Assistant CSS variables and retain user overrides.
- Add a rendering regression test when the DOM or host state changes.

### Localization

- English is the source language.
- Add new editor-facing keys to every language file, or deliberately preserve
  the established English fallback.
- Keep the same key structure across locale files.

## Generated files and releases

- Never edit `dist/big-slider-card.js` manually; generate it with the build.
- Include an updated bundle when source changes affect the shipped card.
- Do not bump the package version, tag a release, publish, or push unless the
  user explicitly requests it.

## Verification

During development, run a focused test such as:

```sh
npx vitest run tests/service-calls.test.ts
```

Before completion, run:

```sh
npm run check
git diff --check
git status --short
```

The full check must pass TypeScript, Vitest coverage thresholds, and the
production build. Report any verification that could not be performed.

## Working-tree safety

- Existing modifications belong to the user unless proven otherwise.
- Do not overwrite, revert, stage, or reformat unrelated changes.
- Keep edits scoped to the task and call out overlap before modifying a file
  that already has user changes.

## Review pass

Review completed work in this order:

1. Home Assistant service payload correctness
2. gesture, timer, and update lifecycle regressions
3. backward compatibility with existing YAML
4. range and value conversion correctness
5. horizontal, vertical, light, and dark rendering
6. missing tests, documentation, localization, or generated bundle changes

Report concrete findings with file and line references. If there are no
actionable findings, state that explicitly.
