# MM Car Care: Design and Content Guidelines

This project utilizes a high-performance motorsport aesthetic combined with a bilingual layout to build a state-of-the-art site for MM Car Care.

## 1. Design Aesthetic & Principles (from DESIGN.md)
*   **Canvas & Surface**: Pure black canvas (`#050505`) with `#121212` for elevated card backgrounds and a minimal hairline outline border (`#262626`).
*   **Accent Color (MM Tricolor Stripe)**: 
    *   Light Blue: `#0066b1`
    *   Dark Blue/Heritage Blue: `#1c69d4`
    *   Red: `#e22718`
*   **Borders & Radius**: Zero-radius corners (`rounded: 0px`) for all buttons, containers, and images. Minimalist rectangular silhoutte signifies high precision engineering.
*   **Typography Separation**:
    *   **Headings**: English display headlines in confident UPPERCASE, bold (700 weight), using `Inter` or `Saira Condensed` with `1.5px` letter spacing for button links.
    *   **Body Texts**: Hindi running body text in clean, modern Devanagari script using `Noto Sans Devanagari` or `Poppins` in light-medium weight (300/400 weight).
*   **Photography**: Full-bleed edge-to-edge high-resolution automotive imagery (detailing, engine tuning, premium cars) serves as the primary visual driver.

## 2. Page & Directory Layout
*   `src/pages/index.astro` (Home)
*   `src/pages/about.astro` (About Us)
*   `src/pages/services.astro` (Services overview and WhatsApp bookings)
*   `src/pages/staff.astro` (Team specifications)
*   `src/pages/contact.astro` (Contact layout, Google Maps redirection, forms)

## 3. Bilingual Support
*   Enclose English headers in elements carrying `lang="en"`.
*   Ensure default site markup sets `<html lang="hi-IN">` or supports dynamic indexing tags to optimize for Indian regional search context.
*   Avoid automated browser translation glitches by keeping navigation tags strictly English and body elements strictly Hindi text.
