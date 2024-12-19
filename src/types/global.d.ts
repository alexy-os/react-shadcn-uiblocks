interface Window {
  __THEME_IS_DARK?: boolean;
  hljs: {
    highlightElement: (element: HTMLElement) => void;
    configure: (config: { ignoreUnescapedHTML?: boolean }) => void;
  };
} 