---
name: develop-big-slider-card
description: Implement, fix, extend, or review the Big Slider Card Home Assistant custom card. Use for changes involving entity domains, Home Assistant service calls, slider calculations, gestures and timers, configuration options or the editor schema, Lit rendering and styling, localization, tests, documentation, previews, or the generated HACS bundle.
---

# Develop Big Slider Card

Use a test-first, compatibility-preserving workflow for this repository.

## Establish the task

1. Convert the request into observable acceptance criteria.
2. Inspect `git status --short` and preserve existing changes.
3. Read the relevant implementation and its existing tests before editing.
4. Identify affected behavior, documentation, localization, previews, and the
   distributed bundle.

## Locate the work

Use this map to select the smallest relevant surface:

| Concern | Primary files | Focused verification |
| --- | --- | --- |
| Values, ranges, configuration | `src/big-slider-card.ts`, `src/const.ts`, `src/types.ts` | `tests/calculations.test.ts` |
| Entity services and payloads | `src/big-slider-card.ts` | `tests/service-calls.test.ts` |
| Gestures, holds, and timers | `src/big-slider-card.ts` | `tests/actions-lifecycle.test.ts` |
| DOM, host state, and styling | `src/big-slider-card.ts` | `tests/rendering.test.ts` and `preview/` |
| Test entities and Home Assistant mocks | `tests/fixtures.ts`, `tests/setup.ts` | affected test file |
| Editor-facing text | `src/localize/` | typecheck, tests, and locale-key comparison |
| Public configuration | source files above and `README.md` | README option/example review |

## Implement the change

- Make the smallest cohesive change satisfying the acceptance criteria.
- Preserve existing YAML behavior unless the request explicitly changes it.
- Match established Lit, Home Assistant, and test patterns.

For a configuration option, update every applicable surface:

- `src/types.ts`
- `src/const.ts` when a default is needed
- the config form in `src/big-slider-card.ts`
- runtime behavior or rendering
- regression tests
- the README option table and examples
- locale files for user-facing editor text

For entity or service behavior:

- Test the exact domain, service name, and payload.
- Cover range conversion, clamping, rounding, and entity-provided steps when
  applicable.
- Check zero/off and unavailable/unknown behavior.

For gestures or immediate updates:

- Treat timers, pointer cancellation, teardown, tap/hold separation, and
  settling as lifecycle-sensitive.
- Verify that callbacks cannot fire after cancellation or disconnection.

For rendering or styling:

- Retain Home Assistant CSS variables and user overrides.
- Add a DOM regression test when structure, classes, attributes, or host state
  changes.
- Inspect horizontal and vertical layouts in both light and dark themes when
  they can be affected.

For localization:

- Treat English as the source language.
- Keep the same key structure across locale files or deliberately preserve the
  established English fallback.

## Verify progressively

Run the smallest relevant test during development, for example:

```sh
npx vitest run tests/service-calls.test.ts
```

Before completion, run:

```sh
npm run check
git diff --check
git status --short
```

`npm run check` must pass TypeScript, Vitest coverage thresholds, and the
production build. The build generates `dist/big-slider-card.js`; never edit the
bundle manually.

For visible changes, run `npm run dev` and inspect:

- `/preview/?theme=light`
- `/preview/?theme=dark`
- applicable default variants and horizontal/vertical examples

If browser inspection is unavailable, say so rather than claiming visual QA.

## Review the final diff

Review in this order:

1. Home Assistant service payload correctness
2. gesture, timer, and update lifecycle regressions
3. backward compatibility with existing YAML
4. range and value conversion correctness
5. horizontal, vertical, light, and dark rendering
6. missing tests, documentation, localization, or generated bundle changes
7. unrelated modifications or release actions outside the request

For a review-only request, do not implement fixes. Report actionable findings
with file and line references; state explicitly when there are none.

## Report completion

Lead with the behavioral outcome. Summarize changed files, focused and full
verification, visual checks when applicable, and remaining risks. Never claim a
test or preview was run unless it was actually performed.
