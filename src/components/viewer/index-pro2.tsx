'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { ViewerProps } from './types';
import { ViewerVariants } from './ViewerVariants';
import { ViewerPreview } from './ViewerPreview';

const Viewer = React.forwardRef<HTMLDivElement, ViewerProps>(
    ({ className, htmlBtn = true, code, preview, language = 'tsx', title, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(ViewerVariants(), className)}
                {...props}
            >
                <div className="overflow-x-auto">
                    <ViewerPreview>{preview}</ViewerPreview>
                </div>
            </div>
        );
    }
);

Viewer.displayName = 'Viewer';

export { Viewer };