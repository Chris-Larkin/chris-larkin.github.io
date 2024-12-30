---
title: "Home"
type: "widget_page"
headless: true
outputs:
- html
---

sections:
  # 1) Hero Section
  - widget: hero
    active: true
    weight: 5
    content:
      title: "Welcome"
      # This is the hero widget content:
      # Add any text or additional parameters that you'd previously placed in hero.md
      # e.g.:
      subtitle: "Some hero content or tagline here"
      # You can also add more hero widget settings per Wowchemy docs (e.g. cta.label, cta.url, etc.)

  # 2) About Me Section
  - widget: about
    active: true
    weight: 10
    content:
      author: "admin"      # This references content/profiles/admin/_index.md
      title: "About Me"
      # You can add more fields if desired
