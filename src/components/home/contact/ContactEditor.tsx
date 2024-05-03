import { Plate, Value } from '@udecode/plate-common';
import { Editor } from '@/components/plate-ui/editor';
import { useRef } from 'react';
import { cn } from '@udecode/cn';
import { plugins } from '@/lib/plate/plugins';
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons-contact';

export function ContactEditor({initialValue,onWrite,onValueChange}:{initialValue:string,onWrite:(newJson:Value)=>void,onValueChange:(value: string) => void}){
    const containerRef = useRef(null);

    return (
        <div className='w-full bg-red-50 max-w-[calc(680px-50px)]'>
        <TooltipProvider>
            <div className="relative">
                <Plate 
                    plugins={plugins}
                    //initialValue={JSON.parse(initialValue) as Value}
                    onChange={(newValue:Value) => {
                        onWrite(newValue)
                        onValueChange(JSON.stringify(newValue))
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