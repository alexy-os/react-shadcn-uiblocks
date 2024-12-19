import { ReactElement } from 'react';

interface Block {
    id: string;
    title: string;
    component: ReactElement;
    code: string;
}

type BlocksByRoute = {
    [route: string]: Block[];
};

// Automatic component imports from all nested directories
const components = import.meta.glob<{ [key: string]: React.ComponentType }>(
    '../../blocks/**/*.tsx',
    { eager: true }
);

// Automatic code imports
const codeFiles = import.meta.glob<string>(
    '../../blocks/**/*.tsx',
    { 
        eager: true, 
        query: '?raw',
        import: 'default'
    }
);

// Function to convert file paths to route keys
const getRouteFromPath = (path: string): string => 
    path.split('/').slice(1, -1)
        .filter(segment => !['blocks', '..'].includes(segment))
        .join('/') || 'hero';

// Function to process file names
const getBlockFromFile = (path: string, module: any): Block | null => {
    const fileName = path.split('/').pop()?.replace('.tsx', '') || '';
    //const isPascalCase = /^[A-Z][a-zA-Z0-9]*$/.test(fileName);
    const pascalCaseName = fileName.replace(/(?:^|-)([a-z])/g, (_, char) => char.toUpperCase());

    const Component = module[pascalCaseName] || module[fileName];

    if (!Component) {
        console.warn(`⚠️ Component not found in ${fileName}.tsx`);
        console.log('Available exports:', Object.keys(module));
        return null;
    }

    const code = codeFiles[path] || '';

    return {
        id: fileName,
        title: pascalCaseName.replace(/([A-Z])/g, ' $1').trim(),
        component: <Component />,
        code
    };
};

// Group blocks by route
export const BlocksLoader: BlocksByRoute = Object.entries(components).reduce(
    (acc, [path, module]) => {
        const route = getRouteFromPath(path);
        const block = getBlockFromFile(path, module);

        if (block) {
            acc[route] = acc[route] || [];
            acc[route].push(block);
        }

        return acc;
    },
    {} as BlocksByRoute
);
