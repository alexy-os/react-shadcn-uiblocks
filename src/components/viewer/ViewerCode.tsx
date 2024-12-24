'use client';

import React from 'react';

import Prism from 'prismjs';
import 'prismjs/prism';

import 'prismjs/themes/prism-okaidia.min.css';

import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-json';

interface ViewerCodeProps {
    code: string;
    language?: string;
}

export const ViewerCode: React.FC<ViewerCodeProps> = ({ code, language = 'typescript' }) => {
    const codeRef = React.useRef<HTMLElement>(null);
    
    const formattedCode = React.useMemo(() => {
        return code.replace(/^\n/, '').replace(/\n$/, '');
    }, [code]);

    React.useEffect(() => {
        if (typeof window !== 'undefined' && codeRef.current) {
            if (window.Prism) {
                window.Prism.highlightElement(codeRef.current);
            }
        }
    }, [formattedCode]);

    return (
        <pre className="overflow-auto max-h-96 bg-code-viewer !text-[13px] !p-0 font-mono">
            <code
                ref={codeRef}
                className={`language-${language} !bg-transparent !p-4 font-[inherit] block whitespace-pre`}
            >
                {formattedCode}
            </code>
        </pre>
    );
};

declare global {
    interface Window {
        Prism: typeof Prism;
    }
} 