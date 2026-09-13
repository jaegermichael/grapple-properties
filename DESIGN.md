---
name: Grapple Properties
description: A precise Harare property dossier built around evidence and place.
colors:
  forest-deep: "#10271f"
  forest-night: "#071f17"
  paper: "#f4f0e8"
  bone: "#f8f5f0"
  bronze-note: "#d6c4a1"
  ink: "#18181a"
  ink-muted: "#5c5b57"
  rule: "#e2deda"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(3.4rem, 7.2vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.85
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  none: "0"
  control: "3px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "64px"
components:
  button-primary:
    backgroundColor: "{colors.bronze-note}"
    textColor: "{colors.forest-deep}"
    rounded: "{rounded.none}"
    padding: "14px 19px"
  button-primary-hover:
    backgroundColor: "#e3d4b8"
    textColor: "{colors.forest-deep}"
---

# Design System: Grapple Properties

## Overview

**Creative North Star: "The Harare Field Dossier"**

The system presents property as something inspected, documented, and understood—not merely advertised. Architectural photography supplies emotion; survey-like rules, compact evidence rows, and restrained editorial typography supply confidence. The tone is discreet, locally informed, and materially quiet.

**Key Characteristics:**

- Evidence-led property presentation
- Forest survey surfaces with warm paper notes
- Editorial asymmetry and decisive photography
- Fine rules, square controls, and sparse bronze emphasis
- One deliberate reveal rather than scattered motion

## Colors

Forest tones carry authority, paper neutrals carry reading surfaces, and bronze marks high-intent actions or verified facts.

**The Evidence Accent Rule.** Bronze appears on actions and decision-critical details; it is never used as general decoration.

## Typography

**Display Font:** Bodoni Moda (with Georgia fallback)  
**Body Font:** Manrope (with system-ui fallback)  
**Label/Mono Font:** Manrope for labels; the platform monospace stack only for identifiers and measurements.

The high-contrast display face gives property names and major statements architectural gravity. Manrope keeps descriptions, controls, and evidence highly legible.

**The Six-Rem Ceiling Rule.** Display copy never exceeds the recorded 6rem cap and keeps tracking no tighter than -0.035em.

## Layout

Marketing surfaces use containers up to 1440–1600px with generous horizontal padding. The first viewport uses a 43/57 text-to-image split on large screens and stacks evidence before imagery on mobile. Listing collections prefer asymmetric spans over repeated equal cards. Section spacing expands from roughly 6rem on mobile to 9rem on desktop.

## Elevation & Depth

The system is flat by default. Hairline rules and tonal contrast establish hierarchy; a soft, downward-tinted shadow is reserved for a field-note panel placed over photography.

**The Flat Evidence Rule.** Cards and controls use either a rule or a shadow, never both for routine decoration.

## Shapes

Primary actions, portfolio cards, and evidence panels are square-edged. Small radii are reserved for compact utility controls such as the legacy navigation CTA; pills do not structure content.

## Components

### Buttons

- **Primary:** square bronze field-note action with forest text and firm medium weight.
- **Hover / Focus:** lifts 2px on hover; a 2px bronze outline with 4px offset preserves keyboard visibility.
- **Tertiary:** underlined text link with generous underline offset and an arrow indicating direction.

### Cards / Containers

Property cards use white or forest surfaces, 1px warm rules, square corners, unmasked photography, and evidence rows. Their spans may vary to create editorial rhythm.

### Navigation

Navigation floats over the first viewport, remains minimal, and switches to a full-screen forest menu on mobile. Labels use sentence case; contact remains the single emphasized action.

### Field-note panel

The signature panel sits over decisive property photography and pairs one property name, its reference, asking price, and a square directional action. It may use backdrop blur only when it behaves as a real overlay over imagery.

## Do's and Don'ts

### Do:

- **Do** lead with title, water, power, security, land, or locality evidence.
- **Do** use one strong image at meaningful scale.
- **Do** preserve asymmetry and calm negative space.

### Don't:

- **Don't** use generic luxury gradients, decorative gold flourishes, or equal card towers as the page thesis.
- **Don't** add eyebrow text above headings; metadata belongs beside or below the content it qualifies.
- **Don't** use monospace as a technical costume outside identifiers, measurements, and data.
