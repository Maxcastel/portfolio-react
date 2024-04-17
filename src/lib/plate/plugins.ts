import { createPlugins, PlateLeaf } from '@udecode/plate-common';
import { withProps } from '@udecode/cn';
import { 
    createParagraphPlugin, 
    ELEMENT_PARAGRAPH 
} from '@udecode/plate-paragraph';
import { HeadingElement } from '@/components/plate-ui/heading-element';
import { withPlaceholders } from '@/components/plate-ui/placeholder';


export const plugins = createPlugins(
    [
        createParagraphPlugin(),
    ],
    {
        components: withPlaceholders({
            [ELEMENT_PARAGRAPH]: withProps(HeadingElement, { variant: 'p' }),
        })
    }
);