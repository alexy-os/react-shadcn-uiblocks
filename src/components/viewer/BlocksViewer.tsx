import { useLocation } from 'react-router-dom';
import { BlocksLoader } from './BlocksLoader';
import { Viewer } from './index';

export function BlocksViewer() {
    const location = useLocation();
    const cleanPath = location.pathname.split('/')[2] || '';

    // console.log(BlocksLoader);
    
    const blocks = BlocksLoader[cleanPath];

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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}