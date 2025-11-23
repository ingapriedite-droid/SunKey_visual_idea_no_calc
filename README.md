# SunKey - Gene Keys Visualization

A React-based interactive visualization of the Gene Keys mandala wheel with authentic I-Ching trigram associations.

## Overview

SunKey is a demonstration prototype that displays the 64 Gene Keys arranged in their traditional mandala wheel formation. Users can explore the Shadow, Gift, and Siddhi aspects of each Gene Key, along with their associated I-Ching trigrams and elemental roots.

## Features

- **Interactive Gene Key Wheel**: Visual mandala displaying all 64 Gene Keys in their correct counterclockwise sequence
- **Authentic I-Ching Mapping**: Each Gene Key is associated with its corresponding I-Ching trigrams (upper and lower)
- **Three Frequencies**: Shadow, Gift, and Siddhi aspects for each Gene Key
- **Roots View**: Detailed breakdown showing the elemental composition (Earth, Air, Fire, Water) derived from trigrams
- **Modern UI**: Clean, responsive design with smooth animations and transitions

## Gene Key Order

The wheel displays Gene Keys in counterclockwise order starting from the top (12 o'clock position), following the authentic Gene Keys mandala sequence:

41, 60, 61, 54, 38, 58, 10, 11, 26, 5, 9, 34, 14, 43, 1, 44, 28, 50, 32, 57, 48, 18, 46, 6, 47, 64, 40, 59, 29, 4, 7, 33, 31, 56, 62, 53, 39, 52, 15, 12, 45, 35, 16, 20, 8, 23, 2, 24, 27, 3, 42, 51, 21, 17, 25, 36, 22, 63, 37, 55, 30, 49, 13, 19

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/
│   ├── LandingPage.tsx      # Input form for birth details
│   ├── ResultPage.tsx        # Main results display
│   ├── GeneKeyWheel.tsx      # Interactive mandala wheel
│   └── RootsView.tsx         # Elemental roots breakdown
├── data/
│   ├── geneKeyOrder.ts       # Correct mandala sequence
│   ├── geneKeys.ts           # Shadow/Gift/Siddhi data
│   ├── geneKeyTrigrams.ts    # I-Ching trigram associations
│   └── trigramColors.ts      # Elemental color mapping
└── App.tsx                   # Main application component
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck
```

## Recent Updates

### Latest Change (2025-11-23)
- **Updated Gene Key sequence** to match the authentic mandala wheel order shown in the reference image
- The wheel now correctly displays all 64 Gene Keys counterclockwise starting from Gene Key 41 at the top
- This ensures accurate representation of the traditional Gene Keys mandala formation

## Notes

- This is a demonstration prototype for educational purposes
- Currently uses random selection rather than actual astrological calculations
- Birth data is collected but not yet used for calculations
- All Gene Key data includes authentic I-Ching trigram associations

## Future Enhancements

Potential features for full implementation:
- Real astrological calculations based on birth data
- Detailed explanations for each Gene Key
- Complete hologenetic profile (not just Sun position)
- User accounts and saved readings
- Share results functionality
