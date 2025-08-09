# Terminal-Inspired Portfolio Specification

## Overview
Build a minimalist, terminal-inspired developer portfolio similar to [Djordje Atlialp's website](https://www.djordjeatlialp.de/de/) using Next.js, based on the [Hugo Hello Friend NG theme](https://github.com/rhazdon/hugo-theme-hello-friend-ng).

## Design Analysis

### Key Visual Elements from Reference Site
1. **Terminal aesthetic**: `> $ cd /home/` prompt
2. **Minimalist layout**: Clean, focused design
3. **Dark/Light theme toggle**: System preference aware
4. **Simple navigation**: About, CV, Posts, Projects, Publications
5. **Typography**: Clean, readable font (Inter in original)
6. **Color scheme**: Muted colors, high contrast for readability
7. **Footer**: Simple copyright and tech stack attribution

### Current Setup Analysis
- ✅ Next.js with App Router
- ✅ Tailwind CSS configured
- ✅ Dark/Light theme support (next-themes)
- ✅ Spectral font configured
- ✅ Responsive design foundation

## Feature Specification

### 1. Layout & Navigation
- **Header**: Terminal prompt-style branding
- **Navigation**: Horizontal menu (About, CV, Posts, Projects)
- **Footer**: Copyright, tech stack, minimal social links
- **Responsive**: Mobile-first approach

### 2. Pages Structure
```
/                 # Home page with terminal intro
/about           # About page (already exists)
/cv              # Resume/CV page
/posts           # Blog listing (already exists)
/posts/[slug]    # Individual blog posts (already exists)
/projects        # Projects showcase (already exists)
```

### 3. Homepage Design
- **Terminal prompt**: `> $ cd /home/bharad/` or similar
- **Intro section**: Name, title, brief description
- **Quick navigation**: Cards or links to main sections
- **Minimal hero**: No overwhelming graphics

### 4. Theme & Styling
- **Color Palette**:
  - Light: Clean whites, subtle grays
  - Dark: True blacks, muted accent colors
- **Typography**:
  - Primary: Current Spectral or switch to Inter (like original)
  - Monospace: For terminal elements
- **Components**: Minimal cards, clean buttons, subtle hover effects

### 5. Content Structure
- **About**: Personal story, skills, background
- **CV**: Professional experience, education, skills
- **Posts**: Technical blog posts, thoughts
- **Projects**: Portfolio pieces with descriptions, tech stack, links

## Technical Implementation Plan

### Phase 1: Layout & Navigation
1. Create terminal-style header component
2. Update navigation to match design
3. Implement responsive layout structure
4. Update footer with minimal design

### Phase 2: Typography & Theme Refinement
1. Consider switching to Inter font (original theme uses it)
2. Refine color palette to match minimalist aesthetic
3. Update CSS custom properties
4. Implement terminal-style text elements

### Phase 3: Homepage Redesign
1. Create terminal prompt component
2. Design minimalist hero section
3. Add quick navigation cards
4. Implement smooth animations

### Phase 4: Content Pages
1. Update About page with new design
2. Create/update CV page
3. Enhance Projects page
4. Style blog posts consistently

### Phase 5: Polish & Performance
1. Add terminal-style loading states
2. Implement smooth transitions
3. Optimize fonts and images
4. Test responsive design
5. Add subtle interactive elements

## Design Components Needed

### 1. Terminal Elements
- `TerminalPrompt`: `> $ cd /home/user/`
- `TerminalCommand`: Styled command text
- `TerminalOutput`: Command output styling
- `Cursor`: Blinking cursor animation

### 2. Layout Components
- `MinimalHeader`: Clean header with navigation
- `SimpleFooter`: Minimal footer design
- `ContentCard`: Clean card components
- `NavigationMenu`: Horizontal navigation

### 3. Content Components
- `ProjectCard`: Portfolio project display
- `BlogPostCard`: Blog post preview
- `SkillTag`: Technology/skill badges
- `TimelineItem`: For CV/experience

## Content Strategy

### Homepage Content
```
> $ cd /home/bharad/
> $ whoami
Bharad - Software Engineer // Full Stack Developer // Problem Solver

> $ ls -la
About.md          CV.pdf           Projects/         Posts/
Contact.info      Skills.json      Experience.log

> $ cat About.md
[Brief introduction paragraph]
```

### Navigation Structure
- **About**: Personal story, background, interests
- **CV**: Professional experience, education, certifications
- **Posts**: Technical articles, tutorials, thoughts
- **Projects**: Portfolio showcase with live demos

## Technical Considerations

### Font Strategy
- **Option A**: Keep Spectral (current elegant serif)
- **Option B**: Switch to Inter (matches original theme)
- **Option C**: Use system fonts for better performance
- **Monospace**: For terminal elements (Fira Code, SF Mono)

### Performance Goals
- First Contentful Paint < 1.5s
- Lighthouse score > 90
- Optimized images and fonts
- Minimal JavaScript bundle

### Accessibility
- High contrast ratios
- Keyboard navigation
- Screen reader friendly
- Focus indicators
- Semantic HTML

## Inspiration Sources
- [Original site](https://www.djordjeatlialp.de/de/): Minimalist terminal aesthetic
- [Hugo Hello Friend NG](https://github.com/rhazdon/hugo-theme-hello-friend-ng): Theme structure
- Terminal UI patterns: For interactive elements
- Developer portfolios: For content organization

## Success Metrics
1. **Visual**: Matches minimalist, professional aesthetic
2. **Performance**: Fast loading, smooth interactions
3. **Content**: Clear information architecture
4. **Mobile**: Excellent mobile experience
5. **Accessibility**: WCAG 2.1 AA compliance

## Timeline Estimate
- **Phase 1-2**: 2-3 days (Layout & Theme)
- **Phase 3**: 1-2 days (Homepage)
- **Phase 4**: 2-3 days (Content Pages)
- **Phase 5**: 1-2 days (Polish)
- **Total**: 6-10 days for complete implementation
