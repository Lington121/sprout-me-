# Sprout Me — Splash + Onboarding Flow (Vite + React)

## 1. Goal & Scope
Build a Vite + React app that renders the first 8 screens of the "Sprout Me" mobile flow as a polished, high-fidelity click-through on an iPhone-sized frame, using the defined visual system. The app is functional (selections + name are captured in React state) but has no backend, no auth, no persistence. Out of scope: home/dashboard, real screen-time API, real app-blocking, analytics, accounts.

References in the prompt (flat geometric tree style) were attached but unreadable due to permission rules on `/tmp/attachments/...`. Illustrations are built from the written description: "flat, geometric, bold simple shapes with a round leafy canopy."

## 2. Decisions Locked With User
- Stack: Vite + React (JSX, JavaScript — no TypeScript, no Tailwind).
- Functional click-through: Splash auto-advances, Next/Continue/Continue/Get Started navigate, selections highlight, name field is editable. State held in React (in-memory only — no localStorage, no router).
- Presentation: app runs inside an iPhone frame component centered on a neutral desktop backdrop, sized 390×844 (iPhone 14 logical). Smooth fade transitions between steps.

## 3. Project Layout
Create at workspace root (empty git repo, no existing source to protect):

```
/index.html
/package.json
/vite.config.js
/.gitignore
/README.md
/src/main.jsx
/src/App.jsx
/src/styles.css
/src/theme.js                  // JS export of design tokens (also re-used in CSS via custom props)
/src/illustrations/SproutLogo.jsx
/src/illustrations/TreeFull.jsx
/src/illustrations/TreeSprout.jsx
/src/illustrations/PersonWithPlant.jsx
/src/components/PhoneFrame.jsx
/src/components/PillButton.jsx
/src/components/Dots.jsx
/src/components/OptionRow.jsx
/src/components/Screen.jsx      // wrap with transition key + fade
/src/screens/Splash.jsx
/src/screens/Onboarding.jsx     // one component, data-driven for slides 1–3
/src/screens/StyleSelection.jsx
/src/screens/CreateTree.jsx
/src/screens/DailyLimit.jsx
/src/screens/ModeSelection.jsx
```

## 4. Design Tokens
Defined in `src/theme.js` and mirrored as CSS custom properties in `styles.css`:

Colors
- `--green-600: #0E7A3B` (deep forest)
- `--green-500: #17C662` (primary)
- `--green-400: #3FE08A` (lime highlight)
- `--green-100: #F5FFBC` (light support)
- `--green-50:  #ECFBE0`
- `--ink-900: #0E1A14` (headlines)
- `--ink-700: #2E3A33` (body)
- `--ink-500: #6B756F` (muted)
- `--bg: #FFFFFF`
- `--card: #FFFFFF`

Typography
- `font-family: 'Sora', system-ui, sans-serif;` (loaded via Google Fonts `<link>` in `index.html`)
- Weights: 400 body, 600 subheads/buttons, 700 headlines.
- Sizes: 32/28 headline, 17 body, 15 supporting, 14 muted.

Spacing & shape
- `--radius-card: 24px`
- `--radius-pill: 999px`
- `--radius-input: 16px`
- `--btn-h: 56px`
- `--shadow-card: 0 6px 24px rgba(14,122,59,0.08)`
- Screen padding: 24 horizontal, 32 top, 24 bottom above safe area.

Gradients
- Splash: `linear-gradient(160deg, #0E7A3B 0%, #17C662 45%, #C9F27A 78%, #F5FFBC 100%)`
- Soft accent backgrounds (sparingly): `linear-gradient(180deg, #ECFBE0 0%, #FFFFFF 100%)`

## 5. Flow & State Machine
Single source of truth in `App.jsx`:

```
const [step, setStep] = useState('splash')     // splash | onb1 | onb2 | onb3 | style | tree | limit | mode | done
const [style, setStyle] = useState(null)       // 'gentle' | 'strict'
const [treeName, setTreeName] = useState('')
const [limit, setLimit] = useState(null)       // 30 | 45 | 60 | 'custom'
const [mode, setMode] = useState(null)         // 'smart' | 'simple'
const order = ['splash','onb1','onb2','onb3','style','tree','limit','mode','done']
```

Splash effect: `useEffect` sets a 1800 ms timer, then `setStep('onb1')` with fade. Done screen (out of scope for content) just shows a calm "You're all set" line and the captured selections; a `Start over` button resets state.

Transitions: `<Screen key={step}>` triggers a CSS `fadeUp` (200 ms opacity, 240 ms translateY 8px → 0).

## 6. Screen-by-Screen Spec
All screens share: 390×844 frame, status-bar spacer (44px), 24px horizontal padding, bottom action area is a fixed 120px region (button + optional dots) with `padding-bottom: env(safe-area-inset-bottom)`.

### 6.1 Splash
- Full-bleed gradient (the deep→lime→pale one).
- Centered: white geometric sprout mark (`<SproutLogo/>`, 96px) + "Sprout Me" (Sora 28, 600, white, letter-spacing 0.2).
- No other elements. Auto-advance after 1800 ms with 350 ms cross-fade.

### 6.2 Onboarding slides 1–3
Data-driven. Each renders:
- White background.
- Illustration area (top ~55% of frame, centered). Slides 1/3 = `<TreeFull/>`; slide 2 = `<PersonWithPlant/>`.
- Headline (Sora 28, 700, `--ink-900`).
- Supporting text (Sora 15, 400, `--ink-500`, max-width 300, centered).
- Bottom: 3 dots (active = `--green-500` 8px circle, inactive = `--ink-500` opacity 0.25 6px) + pill button.

Copy (final, used verbatim):
- Slide 1 — headline "Turn scrolling into growth." Supporting: "Sprout Me helps you notice your habits, one gentle pause at a time." Button: "Next".
- Slide 2 — headline "Reflect in seconds, watch your tree grow." Supporting: "A short check-in is all it takes. Each moment of awareness feeds your tree." Button: "Next". Illustration: a person standing, phone in hand, looking down at a small potted sprout beside them.
- Slide 3 — headline "Your awareness, visualized." Supporting: "No streaks to break, no scores to chase. Just quiet proof that you're growing." Button: "Get Started".

### 6.3 Style Selection
- Title (Sora 26, 700): "How would you like Sprout Me to support you?"
- Two stacked cards (white, `--radius-card`, `--shadow-card`, 20px gap).
  - Gentle — title "Gentle", supporting "Soft reminders that help you pause — never pressure, never guilt." Radio dot right-aligned, fills with `--green-500` when selected; card border becomes `--green-500` 1.5px.
  - Strict — title "Strict", supporting "Clearer limits with firmer nudges when you reach them." Same selection styling.
- Bottom: "Continue" pill (disabled until one selected).

### 6.4 Create Your Tree
- Title (Sora 26, 700): "This is your tree."
- Centered `<TreeSprout/>` (small sapling version of the geometric tree, 180px tall).
- Text input below illustration: rounded 16px, 56px tall, border `1.5px solid #E2EAE5`, focus border `--green-500`. Placeholder "Give it a name (optional)".
- "Create Tree" pill (always enabled; empty name is fine).

### 6.5 Set Daily Limit
- Title: "Set your scrolling limit."
- Supporting: "Pick a daily amount that feels realistic. You can change it anytime." (Sora 15, `--ink-500`).
- Vertical stack of 4 `<OptionRow/>` rows (white card list, 14px gap, `--radius-card` outer, internal rows separated by 1px hairlines):
  - 30 min
  - 45 min
  - 60 min
  - Custom (tap → reveals a compact number stepper `–` 30 `+` with min 5, max 180, step 5; default 30).
- Selected row: left radio dot fills with `--green-500`, row background `rgba(23,198,98,0.06)`, text weight 600.
- "Continue" pill (disabled until selected).

### 6.6 Mode Selection
- Title: "Choose your mode."
- Supporting: "Smart Mode learns from your patterns and adapts nudges over time. Simple Mode keeps things straightforward and predictable."
- Two side-by-side cards (on wide phones) or stacked cards (default stacked to match the calm rhythm):
  - Smart Mode — "Adapts to how you actually scroll."
  - Simple Mode — "Same gentle nudges, every day."
- Same selection styling as Style Selection.
- "Continue" pill (disabled until selected).

### 6.7 Done (terminal screen, simple)
- Centered `<TreeFull/>` + headline "You're all set." Supporting summarizes the captured selections in one sentence. "Start over" text button below.

## 7. Illustration Specs (inline SVG, no external assets)
All illustrations live in `src/illustrations/*.jsx`, exported as components taking `size` and `color` props. Style rules: flat fills only, no gradients, no strokes except thin 1.5px on details, geometric primitives, soft shadows avoided, palette limited to `--green-500`, `--green-600`, `--green-400`, `--green-100`, white, `--ink-700` for faces.

- `SproutLogo` (96px): two overlapping leaf shapes (rounded triangles/ellipses) growing from a short stem, white on splash. Lean modern, asymmetric.
- `TreeFull` (260×260): brown trunk (rounded rect, `--ink-700`), three overlapping circles forming a round canopy, plus two smaller leaf-clusters offset. Single highlight circle in `--green-400` on the canopy. No outline strokes.
- `TreeSprout` (180px): shorter trunk, two small canopy circles, a single sprouting leaf pair at the top in `--green-400`. Reads as "early stage" of `TreeFull`.
- `PersonWithPlant` (280×260): flat person silhouette (head circle, rounded torso shape, simple legs) holding a phone in one hand, a small potted sprout (matches `TreeSprout`) on the ground beside them. Face = two dot eyes, no mouth.

## 8. Components
- `PhoneFrame.jsx`: 390×844, border-radius 48px, 12px bezel, 3px inner stroke `--ink-900` at 6% opacity, status-bar (time + dots) and home indicator rendered as static decoration. Receives `children`.
- `PillButton.jsx`: 56px height, full width minus 24px side padding, `--radius-pill`, background `--green-500`, white Sora 17/600. States: `disabled` (opacity 0.4, `cursor: not-allowed`), `pressed` (scale 0.98 via :active).
- `Dots.jsx`: `count`, `active` props; horizontal row, 6px gap.
- `OptionRow.jsx`: card row 72px tall, 20px padding, radio dot 22px (outer ring + inner fill when selected). Shows title and optional subtext.
- `Screen.jsx`: wraps children with `<div className="screen" key={step}>` applying `fadeUp` animation; uses `prefers-reduced-motion` to skip animation.

## 9. CSS Approach
Single `src/styles.css` with CSS custom properties + BEM-ish scoped class names per component. No CSS-in-JS. No Tailwind. Animation: `@keyframes fadeUp { from { opacity:0; transform: translateY(8px);} to { opacity:1; transform:none;} }` applied to `.screen`.

## 10. Dependencies
Runtime: `react`, `react-dom`. Dev: `vite`, `@vitejs/plugin-react`. No other libraries. Vite default config; React plugin enabled.

## 11. Setup Steps (in execution order)
1. Scaffold: create `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/styles.css`, `.gitignore`, `README.md`. Add Google Fonts Sora link in `index.html`.
2. Add design tokens to `src/theme.js` and `src/styles.css` (CSS custom properties, base reset, body centering the phone frame on a neutral `#F3F5F2` background).
3. Build `PhoneFrame`, `PillButton`, `Dots`, `OptionRow`, `Screen`.
4. Build the four illustration components (SproutLogo, TreeFull, TreeSprout, PersonWithPlant) as inline SVG.
5. Build screen components in order: Splash → Onboarding → StyleSelection → CreateTree → DailyLimit → ModeSelection → Done.
6. Wire `App.jsx` step state machine, splash auto-advance, transitions, and final "You're all set" summary.
7. Hand-verify copy and visual rhythm (matches the calm, mature tone — no exclamation marks, no "let's go!").

## 12. Validation
Run inside the implementation agent (not now):
- `npm install`
- `npm run dev` → manually walk the flow in a browser at ~390px width and at desktop width (phone frame should be centered, no horizontal scroll). Confirm: splash fades, 3 dots update, Gentle/Strict + 30/45/60/Custom + Smart/Simple highlight correctly, name input accepts text, Continue buttons disable until a selection is made, fade transitions don't jank, "Get Started" routes to Style Selection, "Create Tree" routes to Daily Limit, final "Continue" routes to Done, "Start over" resets state.
- `npm run build` → must succeed with no errors.

## 13. Risks & Mitigations
- Splash timing feels too fast/slow → 1800 ms is a starting point; tunable in one constant.
- "Custom" limit UX getting too clever → keep it a simple `– value +` stepper in the same row.
- Tree illustration drifting off-brand → constrain all illustrations to a shared 4-color palette and avoid strokes/stroked outlines.
- I couldn't view the attached reference images (read tool blocked by permission rules on the attachment paths) → the tree illustration follows the written brief; if the user provides them later, the illustration components are isolated and easy to swap.

## 14. Out of Scope (explicit)
Backend, auth, persistence, real screen-time API, home/dashboard, settings, push notifications, accessibility audit beyond `prefers-reduced-motion`, tests, CI, deployment, analytics, i18n.
