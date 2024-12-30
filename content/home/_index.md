---
title: "Homepage"
type: "widget_page"
headless: true
outputs:
- html
---

sections:
  - widget: hero
    active: true
    weight: 5
    content:
      title: "Welcome"
      subtitle: "Hello from the hero widget!"
      # Add more Hero widget settings if needed, e.g. cta.label, cta.url, etc.

  - widget: about
    active: true
    weight: 10
    content:
      author: "admin"      # uses content/profiles/admin/_index.md
      title: "About Me"
      # Add more fields if desired
