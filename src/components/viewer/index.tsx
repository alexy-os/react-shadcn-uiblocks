'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ClipboardIcon, CodeIcon, EyeIcon } from 'lucide-react';
import React from 'react';
import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { ViewerProps, ViewMode } from './types';
import { HeaderVariants, ViewerVariants } from './ViewerVariants';
import { ViewerPreview } from './ViewerPreview';
import { ViewerCode } from './ViewerCode';
import beautify from 'js-beautify';

const LOCAL_STORAGE_KEY = 'preferred-code-mode';

const Viewer = React.forwardRef<HTMLDivElement, ViewerProps>(
    ({ className, htmlBtn = true, code, preview, language = 'tsx', title, ...props }, ref) => {
        const [mode, setMode] = React.useState<ViewMode>('preview');
        const [codeMode, setCodeMode] = React.useState<ViewMode>(() => {
            if (typeof window === 'undefined') return 'react';
            return (localStorage.getItem(LOCAL_STORAGE_KEY) as ViewMode) || 'react';
        });

        const handleCodeModeChange = React.useCallback((newMode: ViewMode) => {
            setMode('preview');
            setCodeMode(newMode);
            localStorage.setItem(LOCAL_STORAGE_KEY, newMode);
        }, []);

        const handleCopy = React.useCallback(async () => {
            const textToCopy = codeMode === 'react' ? code : getHtmlCode();
            await navigator.clipboard.writeText(textToCopy);
            console.log('Code copied to clipboard');
        }, [code, codeMode]);

        const getHtmlCode = React.useCallback(() => {
            if (typeof preview === 'string') return preview;

            const rawHtml = ReactDOMServer.renderToStaticMarkup(preview as React.ReactElement);

            // Improved regex-based pretty-printing
            const options = { indent_size: 2, space_in_empty_paren: true }
            const prettyHtml = beautify.html(rawHtml, options);

            return prettyHtml;
        }, [preview]);

        const handleClick = () => {
            handleCodeModeChange(codeMode === 'react' ? 'html' : 'react');
            window.location.reload();
        }

        useEffect(() => {
            if (!htmlBtn) {
                setCodeMode('react');
            }
        }, [htmlBtn]);

        return (
            <div
                ref={ref}
                className={cn(ViewerVariants(), className)}
                {...props}
            >
                <div className={HeaderVariants()}>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setMode(mode === 'preview' ? 'code' : 'preview')}
                        >
                            {mode === 'preview' ? (
                                <CodeIcon className="h-4 w-4" />
                            ) : (
                                <EyeIcon className="h-4 w-4" />
                            )}
                            <span className="ml-2">{mode === 'preview' ? 'Code' : 'Preview'}</span>
                        </Button>
                        {title && (
                            <span className="text-sm hidden md:flex text-muted-foreground">{title}</span>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">
                            {codeMode === 'react' ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-11 -10.13 22 20.27" className="w-3 h-3 mb-1 mr-1 inline">
                                        <circle r="2" fill="#087ea4" />
                                        <g stroke="#087ea4">
                                            <ellipse rx="10" ry="4.5" />
                                            <ellipse rx="10" ry="4.5" transform="rotate(60)" />
                                            <ellipse rx="10" ry="4.5" transform="rotate(120)" />
                                        </g>
                                    </svg>
                                    <span>React</span>
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-3 h-3 mb-1 mr-1 inline">
                                        <path fill="#e44d26" d="M107.6 436L74.6 65.6h362.8l-33 370.2L255.7 477" />
                                        <path fill="#f16529" d="M256 445.5V96h148.3L376 412" />
                                        <path fill="#ebebeb" d="M142 141.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 301.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26" />
                                        <path fill="#fff" d="M369.6 141.3H255.8v45.4h109.6M361.3 233.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8" />
                                    </svg>
                                    <span>Html</span>
                                </>
                            )}
                        </span>
                        {htmlBtn ? (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleClick}
                                className="flex items-center font-normal gap-1"
                            >
                                {codeMode === 'react' ? (
                                    <span>to Html</span>
                                ) : (
                                    <span>to React</span>
                                )}
                            </Button>
                        ) : null}

                        <Button variant="ghost" size="sm" onClick={handleCopy}>
                            <ClipboardIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    {mode === 'preview' ? (
                        <ViewerPreview>{preview}</ViewerPreview>
                    ) : (
                        codeMode === 'react' ? (
                            <ViewerCode code={code} language={language} />
                        ) : (
                            <ViewerCode code={getHtmlCode()} language="html" />
                        )
                    )}
                </div>
            </div>
        );
    }
);

Viewer.displayName = 'Viewer';

export { Viewer };