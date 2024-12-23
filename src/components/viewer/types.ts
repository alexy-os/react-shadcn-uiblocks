export type ViewMode = 'preview' | 'code' | 'react' | 'html';

export interface ViewerProps {
    className?: string;
    htmlBtn?: boolean;
    code: string;
    preview: React.ReactNode;
    language?: string;
    title?: string;
}