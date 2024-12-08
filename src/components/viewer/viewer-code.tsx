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
            // Конфигурируем highlight.js для игнорирования предупреждений о безопасности
            window.hljs.configure({
                ignoreUnescapedHTML: true
            });

            if (codeRef.current) {
                window.hljs.highlightElement(codeRef.current);
            }
        }
    }, [code]);

    // Улучшенная обработка HTML-сущностей
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
        <pre className="overflow-auto rounded-md bg-muted p-4">
            <code
                ref={codeRef}
                className={`language-${language} text-sm`}
                dangerouslySetInnerHTML={createMarkup()}
            />
        </pre>
    );
}; 