import { Plate } from '@udecode/plate-common';
import { Editor } from '@/components/plate-ui/editor';
import { useRef } from 'react';
import { cn } from '@udecode/cn';
import { FixedToolbar } from '../plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '../plate-ui/fixed-toolbar-buttons';
import { TooltipProvider } from '../plate-ui/tooltip';
import { FloatingToolbar } from '../plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '../plate-ui/floating-toolbar-buttons';
import { plugins } from '@/lib/plate/plugins';
import { 
    ELEMENT_PARAGRAPH 
} from '@udecode/plate-paragraph';

const initialValue = [
    {
      type: ELEMENT_PARAGRAPH,
      children: [{ text: 'text' }],
    },
];

export function ProjectEditor(){
    const containerRef = useRef(null);

    return (
        <div className='h-[60vh] w-[60%] mx-auto mt-20'>
            <TooltipProvider>
                <div className="relative">
                    <Plate 
                        plugins={plugins}
                        initialValue={initialValue}
                        onChange={(newValue) => {
                            
                        }}
                    >
                        <div
                            ref={containerRef}
                            className={cn(
                                'relative',
                                // Block selection
                                '[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4'
                            )}
                        >
                            <FixedToolbar>
                                <FixedToolbarButtons />
                            </FixedToolbar>

                            <Editor
                                className="px-[50px] py-16"
                                autoFocus
                                focusRing={false}
                                variant="outline"
                                size="md"
                            />

                            <FloatingToolbar>
                                <FloatingToolbarButtons />
                            </FloatingToolbar>
                        </div>
                    </Plate>
                </div>
            </TooltipProvider>
        </div>
    )
}