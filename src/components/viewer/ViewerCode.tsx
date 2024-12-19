'use client';

import React from 'react';

interface ViewerCodeProps {
    code: string;
    language?: string;
}

export const ViewerCode: React.FC<ViewerCodeProps> = ({ code, language = 'typescript' }) => {
    const codeRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        if (window.hljs) {
            window.hljs.configure({
                ignoreUnescapedHTML: true
            });

            if (codeRef.current) {
                window.hljs.highlightElement(codeRef.current);
            }
        }
    }, [code]);

    const createMarkup = () => {
        return {
            __html: code
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;')
        };
    };

    return (
        <pre className="overflow-auto max-h-96 bg-code-viewer text-[.8em] !p-0">
            <code
                ref={codeRef}
                className={`language-${language} !bg-transparent !p-4`}
                dangerouslySetInnerHTML={createMarkup()}
            />
        </pre>
    );
}; 