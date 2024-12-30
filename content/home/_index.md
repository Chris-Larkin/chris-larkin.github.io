---
title: "Homepage"
type: "widget_page"
headless: true  # ensures this acts like a headless widget collection
outputs:
- html  # generate normal HTML for the homepage
---

sections:
  - widget: about
    active: true
    weight: 10

    content:
      author: "admin"    # folder = content/profiles/admin
      title: "About Me"