# Fun with Flags

A CSS reference for all world country flags. The goal is to render every national flag using pure CSS wherever possible, with minimal image usage reserved only for complex emblems that cannot be reasonably reproduced in CSS.

## Design Principles

- **Scalable** - No fixed pixel sizes. All flags use `aspect-ratio` and percentage-based dimensions so they scale to any container size.
- **Minimal Images** - Images are only used for intricate emblems (eagles, coats of arms, etc.). Simple geometric shapes are always done in CSS.
- **Compact CSS** - Each flag uses the minimum CSS necessary. Common patterns are reused across similar flag designs.

## CSS Techniques

| Technique | Use Case | Example |
|-----------|----------|---------|
| `aspect-ratio` | Maintain proper flag proportions | All flags |
| `flex` + `flex-wrap` | Horizontal/vertical stripes | Angola, France |
| `clip-path: polygon()` | Stars and complex polygons | Algeria |
| `mask-image` | Crescent shapes via radial gradients | Algeria |
| `border-radius: 50%` | Circles and suns | Japan |
| `position: absolute` | Centered emblems and overlays | Albania, Andorra |

## Current Status

**6 of 195 flags implemented**

### Pure CSS
- Algeria - Stripes with CSS crescent and star
- France - Tricolor stripes
- Japan - Circle on white background

### CSS + Minimal Images
- Albania - Red background + eagle SVG
- Andorra - Tricolor + coat of arms PNG
- Angola - Horizontal stripes + cog/machete SVG

## File Structure

```
flags/
├── index.html      # Country grid with flag containers
├── flags.css       # All flag styles
├── flags.js        # Interactive popup modal
└── *.svg/*.png     # Emblems only (kept to a minimum)
```

## Adding a New Flag

1. Add the flag container in `index.html`:
```html
<li>CountryName
    <div class="countryname flag-container">
        <!-- colored divs for stripes/sections -->
    </div>
</li>
```

2. Add styles in `flags.css`:
```css
.countryname {
    aspect-ratio: 3 / 2;  /* adjust to official ratio */
    display: flex;
    flex-wrap: wrap;      /* if using stacked stripes */
}
```

3. Use percentage-based widths/heights so the flag scales properly.

4. Only add an image if the emblem is too complex for CSS.
