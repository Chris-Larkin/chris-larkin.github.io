---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false

  - block: collection
    id: papers
    content:
      title: <span class="sticky-title">Projects</span>
      text:
      filters:
        folders:
          - project
    design:
      view: compact
      columns: 1
      css_class: section-content-left #section title on LHS

  - block: collection
    id: news
    content:
      title: <span class="sticky-title">Posts</span>
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: post
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        author: ""
        category: ""
      design:
        css_class: section-content-left

  - block: markdown
    id: contact
    content:
      title: <span class="sticky-title">Contact</span>
      subtitle: ''
      text: ''
    design:
      css_class: section-content-left
---