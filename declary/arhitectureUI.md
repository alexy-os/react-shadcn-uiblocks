# Theme: Professional Component Architecture for UI Libraries

## Platform Name: buildy/ui

### Core Dependencies
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: lucide-react
- **Styling**: Tailwind CSS
- **Types**: TypeScript

---

## Rules

### Component Structure
1. **Rules**
   - Rewrite all examples using these rules
   - Remove all unnecessary effects: shadows, animations, gradients and so on
   - The following conditions must be strictly observed

2. **Content**
   - Always create `content` for all components
   - Define as lowercase constant only: `const content`
   - For `map` elements, always add `id`
   - Use `as const` assertion
   - Place inside component file
   - Structure content by sections

*Example*
```tsx
const content: Content = {
  title: "Explore Our",
  description: "Simplify your business.",
  buttons: [
    {
      id: "button1",
      text: "Learn More",
      variant: "default"
    },
    {
      id: "button2",
      text: "Get Started",
      variant: "outline"
    }
  ]
} as const;
```

3. **Types**
   - Define explicit types for content objects
   - Use const assertions for literal types
   - Prefer union types over enums
   - For icon properties, use `icon: React.ReactNode;` to allow any valid React element

### HTML Semantics
1. **Structure**
   - Use semantic HTML5 tags (section, article, header)
   - Follow hierarchical heading structure
   - Include ARIA attributes when needed

2. **Container Pattern**
   ```tsx
   <section className="w-full py-16 lg:py-32">
     <div className="container mx-auto px-4 md:px-6 lg:px-8">
       {/* content */}
     </div>
   </section>
   ```

### Dynamic Rendering
1. **Mapping**
   - Use unique keys (prefer content-based over id)
   ```tsx
   {buttons?.map(({ id, text, icon }) => (
     <Button key={id} icon={icon}>
       {text}
     </Button>
   ))}
   ```

2. **Conditional Rendering**
   - Use optional chaining
   - Implement fallbacks for empty states

### Styling
1. **Layout**
   - Use flexbox/grid for layouts
   - Implement responsive breakpoints (sm, md, lg)
   - Follow spacing scale (4, 8, 16, 32)

2. **Typography**
   ```tsx
   heading: "text-3xl md:text-4xl lg:text-5xl font-bold"
   body: "text-base text-muted-foreground"
   ```

3. **Spacing**
   ```tsx
   section: "py-16 lg:py-32"
   container: "gap-4 gap-8"
   ```

---

## Restrictions

### Architecture
- No prop drilling
- No nested content objects
- No dynamic imports
- No client-side data fetching
- No state management
- No side effects

### Styling
- No custom colors (use theme tokens)
- No custom animations
- No shadows
- No gradients
- No absolute positioning
- No negative margins
- No !important

### JavaScript
- No async operations
- No event handlers
- No complex computations
- No external API calls
- No local storage
- No browser APIs

### Components
- Must be self-contained
- Must include content
- Must be stateless
- Must be pure functions
- Must use shadcn/ui components
- Must follow container pattern

## Strict Naming Conventions

### Types and Content
1. **Content Declaration**
   - Must use lowercase `content` for constant (both default and internal)
   - Must use uppercase `Content` for type
   - Must use `as const` assertion
   ```typescript
   // Type definition
   type Content = {
     title: string;
     description: string;
     buttons: Array<ButtonProps>;
   };

   // Internal content
   const content: Content = {
     title: "Default Title",
     description: "Default Description",
     buttons: []
   } as const;
   ```

2. **Component Structure**
   - Must include ComponentPropsWithoutRef
   - Must use content spread with destructuring
   - Must use return statement
   ```typescript
   type ComponentProps = React.ComponentPropsWithoutRef<"section"> & Partial<Content>;

   export const Component = (props: ComponentProps) => {
     const { title, description, buttons } = {
       ...content,
       ...props
     };

     return (
       // JSX
     );
   };
   ```

### Component Base Types

```typescript
// Define base component props with semantic root element
type ComponentProps<T extends keyof JSX.IntrinsicElements = "section"> = 
  React.ComponentPropsWithoutRef<T> & Partial<Content>;

// Usage examples
export const HeroSection = (props: ComponentProps) => {
  return <section {...props}>{/* content */}</section>;
};

export const MainHeader = (props: ComponentProps<"header">) => {
  return <header {...props}>{/* content */}</header>;
};
```

> Note: Use appropriate semantic HTML root element based on the component's purpose 
> (section, article, header, etc). Default is "section" for block-level components.