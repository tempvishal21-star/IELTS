# IELTS Pro Institute Homepage

A modern, responsive homepage for a fictional IELTS Institute built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional interface with a beautiful color scheme
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Engaging micro-interactions and hover effects
- **Component-based Architecture**: Clean, maintainable React components
- **Performance Optimized**: Fast loading with optimized images and code

## Sections

1. **Navigation Bar**: Responsive navbar with mobile hamburger menu
2. **Hero Section**: Compelling headline with CTA buttons and statistics
3. **Features**: Four service cards highlighting key offerings
4. **Testimonials**: Student success stories with ratings
5. **Footer**: Contact information and social links

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ielts-institute-homepage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## Design Choices

### Color Palette
- **Primary Blue (#3B82F6)**: Professional, trustworthy color for education
- **Secondary Teal (#14B8A6)**: Modern accent color for highlights
- **Purple (#8B5CF6)**: Premium feel for special features
- **Orange (#F97316)**: Warm accent for human elements

### Typography
- **Headlines**: Bold, large fonts for impact
- **Body Text**: Readable, well-spaced content
- **Hierarchy**: Clear visual structure with proper font weights

### Layout
- **Grid System**: Responsive 12-column grid using Tailwind
- **Mobile-First**: Designed for mobile, enhanced for desktop
- **Spacing**: Consistent 8px spacing system

### Animations
- **Fade-in Effects**: Smooth entry animations for content
- **Hover States**: Interactive feedback on all clickable elements
- **Transform Effects**: Subtle scale and translate animations
- **Loading States**: Smooth transitions between states

### Components Architecture
- **Modular Design**: Each section is a separate component
- **Reusable Elements**: Common UI patterns extracted into components
- **TypeScript**: Full type safety throughout the application
- **Clean Code**: Well-structured, commented, and maintainable

### Performance Optimizations
- **Image Optimization**: Using optimized Pexels images
- **Lazy Loading**: Images load as needed
- **CSS Animations**: Hardware-accelerated animations
- **Bundle Optimization**: Tree-shaking and minification

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Beautiful, customizable icons
- **Vite**: Fast build tool and development server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Add dark mode toggle
- Implement course catalog with filtering
- Add online booking system
- Integrate payment gateway
- Add multi-language support
- Implement user dashboard