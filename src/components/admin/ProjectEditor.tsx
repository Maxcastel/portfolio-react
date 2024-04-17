import { Plate } from '@udecode/plate-common';
import { Editor } from '@/components/plate-ui/editor';

const initialValue = [
    {
      type: 'p',
      children: [
        {
          text: 'text',
        },
      ],
    },
];

export function ProjectEditor(){

    return (
        <Plate 
            initialValue={initialValue}
            onChange={(newValue) => {
                
            }}
        >
            <Editor />
        </Plate>
    )
}