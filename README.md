# HNG14 Frontend Wizards — Stage 1b
## Testable Profile Card

A clean, accessible, responsive Profile Card component built with vanilla HTML, CSS, and JavaScript. Every visible element includes a `data-testid` attribute for automated testing.



## Live Demo

🔗 **Live URL:** `https://justinaenayio-idu.github.io/PROFILE-CARD-HNG14/`

## Repository

📁 **GitHub Repo:** `https://github.com/justinaenayio-idu/PROFILE-CARD-HNG14`



## Running Locally

```bash
git clone https://github.com/justinaenayio-idu/PROFILE-CARD-HNG14.git
Open index.html in your browser
   — or use VS Code Live Server for best results


## Project Structure

```
YOUR-PROFILE-CARD-REPO/
├── index.html      # Card markup — all data-testid attributes, semantic HTML
├── profile.css     # Design system — warm cream theme, responsive layout
└── profile.js      # Epoch time in milliseconds — updates every 1000ms
```



## Required data-testid Values

| Element | Tag | `data-testid` |
|---|---|---|
| Card root container | `<article>` | `test-profile-card` |

| User name | `<h2>` | `test-user-name` |

| Biography | `<p>` | `test-user-bio` |

| Epoch time (ms) | `<time>` | `test-user-time` |

| Avatar image | `<img>` | `test-user-avatar` |

| Social links list | `<ul>` | `test-user-social-links` |

| Twitter link | `<a>` | `test-user-social-twitter` |

| GitHub link | `<a>` | `test-user-social-github` |

| LinkedIn link | `<a>` | `test-user-social-linkedin` |

| Hobbies list | `<ul>` | `test-user-hobbies` |

| Dislikes list | `<ul>` | `test-user-dislikes` |




## Design Decisions

- **Theme:** Warm cream (`#fdfaf4`) background with deep forest green (`#2d5a3d`) accent — editorial and distinctive, avoids generic dark/purple AI aesthetics

- **Fonts:** Cormorant Garamond (elegant serif display headings) paired with DM Sans (clean readable body)

- **Layout:** CSS Grid two-column layout — avatar left, content right on tablet/desktop; stacks vertically on mobile

- **Epoch time block:** Styled as a distinct info widget in the left column so it's visually clear and easy to locate for automated tests

- **Avatar:** Uses DiceBear avataaars API for a consistent generated avatar — accepts any image URL in the `src` attribute

- **Dot grid background:** Subtle radial dot pattern on page background adds depth without distraction

- **Hobby tags:** Green colour coded; Dislike tags red colour coded — immediately distinguishable at a glance



## Accessibility Notes

- Avatar `<img>` has meaningful `alt` text describing the person

- Avatar is wrapped in `<figure>` with `<figcaption>` for proper semantic grouping

- `<time data-testid="test-user-time">` uses `aria-live="polite"` and `aria-atomic="true"` so screen readers announce updates

- Social `<nav>` has `aria-label="Social media links"`

- Each social link has a descriptive `aria-label` including "(opens in new tab)"

- All social links use `target="_blank"` with `rel="noopener noreferrer"` for security

- Hobbies and dislikes sections use `aria-labelledby` pointing to their respective `<h3>` headings

- All links are keyboard focusable with visible `:focus-visible` rings

- WCAG AA contrast: primary text 16.6:1, secondary 9.4:1, muted 4.7:1, green accent 7.6:1




## Behaviour

- **Epoch time** — `Date.now()` is called immediately on page load with no delay, ensuring the automated test sees a valid millisecond value on first render

- **Time updates** — `setInterval(updateTime, 1000)` refreshes the display every second

- **`datetime` attribute** — kept in sync with the ISO string on every update for machine-readability




## Known Limitations

- **Avatar is a generated image** — uses DiceBear API. Requires internet connection to load. A local fallback image could be added for offline use.

- **No upload functionality** — the spec mentions avatar upload as optional; this implementation uses a URL-based avatar only.

- **Social links use placeholder URLs** — Twitter point to the homepage. Update `href` values with real profile URLs in future.

- **No persistent state** — name, bio, hobbies, and dislikes are hardcoded in HTML. A future version could make these editable.




## Responsiveness

| Breakpoint | Layout |
|---|---|
| 769px+ (desktop) | Two-column grid, avatar left, content right, max-width 720px |

| 768px (tablet) | Narrower two-column, smaller avatar |

| 520px (mobile) | Single column stacked, avatar + time side by side in top row |

| 360px (small mobile) | Fully stacked, full-width time block |




## Built With

- HTML5 (semantic elements — `article`, `figure`, `figcaption`, `header`, `h2`, `h3`, `nav`, `section`, `ul`, `time`)

- CSS3 (custom properties, CSS Grid, Flexbox, responsive breakpoints)

- Vanilla JavaScript ES6+ (no frameworks or dependencies)




## Author

**Justina Enayio-Idu**
HNG14 Frontend Wizards Track — Stage 1b