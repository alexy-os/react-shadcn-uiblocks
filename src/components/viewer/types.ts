export interface ViewerProps extends React.HTMLAttributes<HTMLDivElement> {
    code: string;
    preview?: React.ReactNode;
    htmlBtn?: boolean;
    react?: string;
    html?: string;
    title?: string;
    language?: string;
}

export type ViewMode = 'preview' | 'code' | 'react' | 'html' | 'htmlBtn';