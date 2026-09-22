# Magma (Aggie.io)

**Category:** Multiplayer art platform and shared drawing canvas
**Researched:** 2026-09-22
**Primary sources:**
- https://aggie.io/
- https://magma.com/

## Snapshot

The `aggie.io` address currently resolves to Magma, which describes itself as a multiplayer art platform for art jams and creative workflows. Its core promise is creating on a shared canvas in real time for artists and teams.

## Relevant capabilities

- Real-time shared canvas
- Collaborative sketching and art workflows
- Team-oriented creative sessions
- Art-jam/community use cases

## Extensibility signal

Magma is more workflow- and collaboration-oriented than a tiny standalone drawing surface. The product direction suggests that shared presence, session management, and community features are the extensibility boundary rather than a minimal tool API.

## Competitive lesson

Real-time collaboration can be a compelling reason to use a drawing app, but it changes the product from a personal utility into a social workflow. That introduces identity, synchronization, conflict handling, and session lifecycle requirements.

## Opportunity for this app

Keep the local single-user workflow crisp first. If collaboration becomes important, model strokes as serializable events from the beginning so synchronization can be added without rewriting pointer input and tool logic.
