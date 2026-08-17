- This repository is part of [AI-Downloads-Organizer](https://github.com/SayuruPabasara/AI-Downloads-Organizer.git).
- A Browser extention that extracts the current page information and passes them to the Python script.
#### workflow
```text
Moodle page
     │
     │ context
     ↓
background.js
     │
     │ + actual download
     ↓
{
    filename:
    downloadUrl:
    course:
    week:
    resource:
}
     │
     ↓
Python
     │
     ↓
local mapping
     │
     ↓
OpenRouter only if necessary
