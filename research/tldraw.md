# tldraw

**Category:** Extensible infinite-canvas SDK and collaborative whiteboard
**Researched:** 2026-09-22
**Primary sources:**
- https://www.tldraw.com/
- https://github.com/tldraw/tldraw
- https://tldraw.dev/docs

## Snapshot

tldraw positions itself as an instant collaborative whiteboard and as a React SDK for building canvas products. Its strongest differentiator is that the canvas engine is the product foundation, not just a finished drawing UI.

## Relevant capabilities

- Freehand drawing with pressure sensitivity
- Shapes, rich text, arrows, snapping, images, video, and export
- Multiplayer collaboration through `@tldraw/sync`
- Browser, touch, tablet, and mobile support
- Runtime Editor API
- Starter kits for common canvas products

## Extensibility signal

The official repository explicitly supports custom shapes, tools, bindings, UI components, side effects, event hooks, and AI integrations. This makes tldraw a direct benchmark for a simple app that wants an upgrade path without replacing its rendering model.

## Competitive lesson

A two-tool pencil/eraser app should not copy the full tldraw surface. The useful lesson is the separation between canvas state, tool behavior, and UI registration. That structure makes later additions such as shapes, undo/redo, or multiplayer possible.

## Opportunity for this app

Compete on focus and zero setup: a fast, quiet drawing surface with fewer decisions than an infinite whiteboard. Preserve extensibility internally, but reveal only pencil and eraser until users need more.
