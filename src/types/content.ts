type ContentMap = {
  [key: string]: {
    title?: string;
    description?: string;
    badge?: string;
    // ... другие общие поля
    [key: string]: any;
  }
}; 