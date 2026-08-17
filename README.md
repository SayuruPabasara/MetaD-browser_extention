- This repository is part of [AI-Downloads-Organizer](https://github.com/SayuruPabasara/AI-Downloads-Organizer.git).
- A Browser extention that extracts the current page information and passes them to the Python script.
#### workflow
                 Courseweb page
                       │
                       │ content script
                       ▼
              ┌─────────────────┐
              │ Page information│
              │                 │
              │ course ID       │
              │ section/topic   │
              │ link text       │
              │ download URL    │
              └────────┬────────┘
                       │
                       ▼
                 Background.js
                       │
                 download event
                       │
                       ▼
                    Python
                       │
              ┌────────┴────────┐
              ▼                 ▼
        Local mapping       OpenRouter
