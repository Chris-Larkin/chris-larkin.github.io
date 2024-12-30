---
title: "Home"
type: "widget_page"
---

# Define the homepage sections (widgets):
sections:
  - widget: about            # <-- was block: about
    active: true             # ensures widget is activated
    content:
      author: "admin"        # references content/profiles/admin/_index.md
      title: "About Me"
      weight: 10             # order on the page
