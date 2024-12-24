type ContentMap = {
    [key: string]: {
      title?: string;
      description?: string;
      badge?: string;
      // ... другие общие поля
      [key: string]: any;
    }
  }; 

// Строго типизированный контент
const dynamicContent: ContentMap = {
  'blocks/hero/HeroCenteredSection.tsx': {
    title: 'Global Context',
    description: 'This is a Hero section with a global context. You can see the code and pre installed global context.',
    buttons: [
      {
        id: 'contextBtn1',
        text: 'Show Case',
        variant: 'default'
      },
      {
        id: 'contextBtn2',
        text: "Let's Go!",
        variant: 'outline'
      }
    ]
  },
  'blocks/features/FAQContentSection.tsx': {
    badge: 'FAQ Content',
    title: 'FAQ Title Section',
    description: 'FAQ Description Section',
    faqs: [
      {
        id: 'faq1',
        question: 'What is this?',
        answer: 'This is a FAQ section'
      }
    ]
  }
} as const;

export const getContextContent = (componentName: string): object | null => {
  const key = Object.keys(dynamicContent).find(k => k.includes(componentName));
  return key ? dynamicContent[key] : null;
}; 