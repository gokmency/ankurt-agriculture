# ANKURT — Existing Site Design Contract

**Theme:** light

The existing ANKURT storefront and workshop identity is authoritative. This is a Turkish marketing and product-catalog site: visitors find equipment, assess suitability, and contact the workshop. Preserve the logo, real workshop photography and industrial editorial typography. The old Mode BI reference is archived in `docs/legacy-mode-design-reference.md`; its serif/lime identity is not the runtime design.

## Tokens — Colors

| Name | Value | Role |
|------|-------|------|
| Workshop Green | `#0f5d35` | Primary actions, headings |
| Harvest Gold | `#e7b23f` | Accent with dark text |
| Paper | `#fbfaf6` | Cards and menus |
| Canvas | `#f2f0e9` | Page background |
| Ink | `#121713` | Body and dark surfaces |
| Secondary | `#464c47` | Supporting copy |
| WhatsApp | `#075e54` | White-text contact action |

## Tokens — Typography

- Barlow Condensed, weights 600/700: editorial display headings; responsive 28–84px.
- Manrope: body and controls; body copy 14–16px with relaxed line height.
- Eyebrows: short uppercase labels only. Avoid long uppercase body copy.

## Layout and Interaction

- Content width 1200px; responsive 16/24/32px side padding.
- Product grids: one, two, three columns as space allows.
- Buttons and keyboard targets: at least 44px on primary interactions.
- Visible keyboard focus; anchor offset below sticky header.
- Native modal dialog for full product photographs, Escape and focus return.
- Product images contain the equipment without cropping; unverified photographs are omitted.
- Form errors name the problem and focus its first field; success means a prepared WhatsApp message, never a confirmed sale or sent lead.
- All filter controls share URL state; Back/Forward restores both controls and results.
- Respect reduced motion, keep decorative effects restrained, account for mobile safe area.

## Verification

Review desktop and mobile catalog, detail, menu and contact flow in Brave. Check consent rejection and acceptance, keyboard navigation, image dialog and form errors. Automated checks cover static crawlability, truthful schema, search normalization, filter serialization and inquiry validation. Field Core Web Vitals remain unavailable until enough real Google samples exist.
