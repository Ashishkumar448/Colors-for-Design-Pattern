# Design System Color Palette

A React-based, responsive color palette viewer designed for design systems and UI libraries. This project displays a main color card alongside shade cards, providing an intuitive interface for exploring colors and their variants. Built with Tailwind CSS for fast styling and responsiveness.

---

## Features

- **Responsive layout:** Optimized for mobile and desktop screens.
- **Main Color Card:** Displays the primary color, full width on mobile.
- **Shade Cards:** Display 9 shades arranged in a 3x3 grid on mobile and evenly spaced on desktop.
- **Clean and simple UI:** Easily extend or customize with Tailwind CSS.
- **Lightweight:** Minimal dependencies, easy to integrate into design systems.

---

## Demo

*Add a screenshot or GIF here showing the palette on mobile and desktop.*

---

## Installation

```bash
git clone https://github.com/yourusername/design-system-color-palette.git
cd design-system-color-palette
npm install
npm start
```


## Usage
Import and use the SingleCard and palette components to display your colors:

```jsx
import React from 'react';
import SingleCard from './components/SingleCard';

const colorObj = {
  color: '#4F46E5', // main color
  shades: {
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1',
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',
  },
};

export default function Palette() {
  return (
    <div>
      <SingleCard label="Main" hex={colorObj.color} square={false} />
      {Object.entries(colorObj.shades).map(([shade, hex]) => (
        <SingleCard key={shade} label={shade} hex={hex} />
      ))}
    </div>
  );
}

```
# Component Props
## SingleCard
| Prop   | Type    | Default | Description                                    |
| ------ | ------- | ------- | ---------------------------------------------- |
| label  | string  | —       | Label displayed under the color box            |
| hex    | string  | —       | Hex color value to display                     |
| square | boolean | true    | Whether the card maintains square aspect ratio |


# Customization
- Modify Tailwind classes in SingleCard to change card size, colors, or layout.
- Add new color palettes by providing objects with color/shade values.
- Adapt layout breakpoints in the parent container as needed.

# Contributing
Contributions, issues, and feature requests are welcome!
Feel free to check the issues page.

# License
This project is licensed under the MIT License.



You can replace `yourusername` with your actual GitHub username and add any screenshots or demos in the
