// Type definitions for ViewScript
type ViewScriptProps = {
  componentName: string;
};

type ViewScriptType = {
  (props: ViewScriptProps): string;
  componentName: string;
};

// Registry to store ViewScript implementations
const viewScriptRegistry = new Map<string, ViewScriptType>();

// Helper to register a new ViewScript
export function registerViewScript(componentName: string, scriptGenerator: (props: ViewScriptProps) => string) {
  const viewScript: ViewScriptType = Object.assign(
    scriptGenerator,
    { componentName }
  );
  viewScriptRegistry.set(componentName, viewScript);
}

// Helper to get ViewScript for a component
export function getViewScript(componentName: string): ViewScriptType | undefined {
  return viewScriptRegistry.get(componentName);
}

// Helper to check if component has associated ViewScript
export function hasViewScript(componentName: string): boolean {
  return viewScriptRegistry.has(componentName);
} 