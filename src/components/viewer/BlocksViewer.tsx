import { useLocation } from 'react-router-dom';
import { BlocksLoader } from './BlocksLoader';
import { Viewer } from '@/components/viewer';

export function BlocksViewer() {
    const location = useLocation();
    const cleanPath = location.pathname.split('/')[2] || '';

    // console.log(BlocksLoader);
    
    const blocks = BlocksLoader[cleanPath];

    // Define configurations for different categories
    const viewerConfig = {
        navbar: { htmlBtn: false },
        // It is possible to add other categories as needed
        // other: { someOption: true }
    } as const;

    if (!blocks) {
        return <div>Category ui components not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="space-y-8">
                <div className="grid gap-8">
                    {blocks.map((example) => (
                        <Viewer
                            key={example.id}
                            title={example.title}
                            code={example.code}
                            preview={example.component}
                            {...viewerConfig[cleanPath as keyof typeof viewerConfig]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}