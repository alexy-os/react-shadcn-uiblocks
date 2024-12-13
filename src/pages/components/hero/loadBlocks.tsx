import { ReactElement } from 'react';

interface Block {
    id: string;
    title: string;
    component: ReactElement;
    code: string;
}

// Automatic component imports
const components = import.meta.glob<{ [key: string]: React.ComponentType }>(
    './base/*.tsx',
    { eager: true }
);

// Automatic code imports
const codeFiles = import.meta.glob<string>(
    './base/*.tsx',
    { 
        eager: true, 
        query: '?raw',
        import: 'default'
    }
);

export const loadBlocks: Block[] = Object.entries(components).map(([path, module]) => {
    // Получаем имя файла и проверяем его формат
    const fileName = path.split('/').pop()?.replace('.tsx', '') || '';
    const isPascalCase = /^[A-Z][a-zA-Z0-9]*$/.test(fileName);
    const isKebabCase = /^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(fileName);
    
    // Создаем PascalCase версию имени
    const pascalCaseName = isKebabCase 
        ? fileName
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('')
        : fileName;

    // Проверяем формат файла и выводим рекомендации
    if (isKebabCase) {
        console.warn(`
            ⚠️ File naming convention warning:
            Current: "${fileName}.tsx" (kebab-case)
            Recommended: "${pascalCaseName}.tsx" (PascalCase)
            React community prefers PascalCase for component file names.
        `);
    } else if (!isPascalCase) {
        console.warn(`
            ⚠️ Invalid file naming:
            Current: "${fileName}.tsx"
            Should be either:
            - PascalCase (recommended): "MyComponent.tsx"
            - kebab-case: "my-component.tsx"
        `);
    }

    // Пытаемся получить компонент
    const Component = module[pascalCaseName] || module[fileName];
    
    // Логируем если компонент не найден
    if (!Component) {
        console.warn(`⚠️ Component not found in ${fileName}.tsx`);
        console.log('Available exports:', Object.keys(module));
        console.log('Tried component names:', {
            pascal: pascalCaseName,
            original: fileName
        });
        console.log('File path:', path);
    }

    const code = codeFiles[path] || '';
    
    return {
        id: fileName,
        title: isPascalCase 
            ? fileName.replace(/([A-Z])/g, ' $1').trim()
            : fileName.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' '),
        component: Component ? <Component /> : <div>Component not found</div>,
        code
    };
}); 