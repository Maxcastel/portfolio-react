import { createPlugins, PlateLeaf } from '@udecode/plate-common';
import { withProps } from '@udecode/cn';
import { 
    createParagraphPlugin, 
    ELEMENT_PARAGRAPH 
} from '@udecode/plate-paragraph';
import { 
    createHeadingPlugin, 
    ELEMENT_H1, 
    ELEMENT_H2, 
    ELEMENT_H3, 
    ELEMENT_H4, 
    ELEMENT_H5, 
    ELEMENT_H6 
} from '@udecode/plate-heading';
import { HeadingElement } from '@/components/plate-ui/heading-element';
import { withPlaceholders } from '@/components/plate-ui/placeholder';
import { 
    createBoldPlugin, 
    MARK_BOLD,
} from '@udecode/plate-basic-marks';

export const plugins = createPlugins(
    [
        createParagraphPlugin(),
        createHeadingPlugin(),
        createBoldPlugin(),
    ],
    {
        components: withPlaceholders({
            [MARK_BOLD]: withProps(PlateLeaf, { as: 'strong' }),
            [ELEMENT_PARAGRAPH]: withProps(HeadingElement, { variant: 'p' }),
            [ELEMENT_H1]: withProps(HeadingElement, { variant: 'h1' }),
            [ELEMENT_H2]: withProps(HeadingElement, { variant: 'h2' }),
            [ELEMENT_H3]: withProps(HeadingElement, { variant: 'h3' }),
            [ELEMENT_H4]: withProps(HeadingElement, { variant: 'h4' }),
            [ELEMENT_H5]: withProps(HeadingElement, { variant: 'h5' }),
            [ELEMENT_H6]: withProps(HeadingElement, { variant: 'h6' }),
        })
    }
);