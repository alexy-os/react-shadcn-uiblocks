'use client';

import { ExternalLinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

interface ViewerPreviewProps {
    children: React.ReactNode;
}

export const ViewerPreview: React.FC<ViewerPreviewProps> = ({ children }) => {
    const handleOpenInNewWindow = React.useCallback(() => {
        const newWindow = window.open('', '_blank');
        if (!newWindow) return;

        const html = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>Component Preview</title>
                    <script src="https://cdn.tailwindcss.com"></script>
                    <script>
                        tailwind.config = {
                            darkMode: "class",
                            theme: {
                                extend: {
                                    colors: {
                                        border: "hsl(var(--border))",
                                        background: "hsl(var(--background))",
                                        foreground: "hsl(var(--foreground))",
                                        primary: {
                                            DEFAULT: "hsl(var(--primary))",
                                            foreground: "hsl(var(--primary-foreground))"
                                        },
                                        secondary: {
                                            DEFAULT: "hsl(var(--secondary))",
                                            foreground: "hsl(var(--secondary-foreground))"
                                        },
                                        muted: {
                                            DEFAULT: "hsl(var(--muted))",
                                            foreground: "hsl(var(--muted-foreground))"
                                        }
                                    }
                                }
                            }
                        }
                    </script>
                    <style>
                        :root {
                            --background: 0 0% 100%;
                            --foreground: 240 10% 3.9%;
                            --primary: 346.8 77.2% 49.8%;
                            --primary-foreground: 355.7 100% 97.3%;
                            --secondary: 240 4.8% 95.9%;
                            --secondary-foreground: 240 5.9% 10%;
                            --muted: 240 4.8% 95.9%;
                            --muted-foreground: 240 3.8% 46.1%;
                            --border: 240 5.9% 90%;
                        }
                        .dark {
                            --background: 20 14.3% 4.1%;
                            --foreground: 0 0% 95%;
                            --primary: 346.8 77.2% 49.8%;
                            --primary-foreground: 355.7 100% 97.3%;
                            --secondary: 240 3.7% 15.9%;
                            --secondary-foreground: 0 0% 98%;
                            --muted: 0 0% 15%;
                            --muted-foreground: 240 5% 64.9%;
                            --border: 240 3.7% 15.9%;
                        }
                    </style>
                </head>
                <body class="bg-background text-foreground">
                    <div class="min-h-screen p-4">
                        ${typeof children === 'string' ? children : ReactDOMServer.renderToString(children as React.ReactElement)}
                    </div>
                    <script>
                        // Добавляем переключатель темы
                        const toggle = document.createElement('button');
                        toggle.innerHTML = '🌓';
                        toggle.className = 'fixed bottom-4 right-4 p-2 rounded-full bg-secondary text-secondary-foreground';
                        toggle.onclick = () => document.documentElement.classList.toggle('dark');
                        document.body.appendChild(toggle);
                    </script>
                </body>
            </html>
        `;

        newWindow.document.write(html);
        newWindow.document.close();
    }, [children]);

    return (
        <div className="relative bg-background">
            {<div className="absolute right-4 top-4 z-10">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={handleOpenInNewWindow}
                    title="Open in new window"
                >
                    <ExternalLinkIcon className="h-4 w-4" />
                </Button>
            </div>}
            <div className="">
            {children}
            </div>
        </div>
    );
};