import { Viewer } from '@/components/viewer';
import { loadBlocks } from './loadBlocks';

export function BlogComponentsPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="space-y-8">
                <div className="prose dark:prose-invert">
                    <h1>Blog Sections</h1>
                    <p>
                        A collection of blog section examples that you can use in your projects.
                    </p>
                </div>

                <div className="grid gap-8">
                        {loadBlocks.map((example) => (
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