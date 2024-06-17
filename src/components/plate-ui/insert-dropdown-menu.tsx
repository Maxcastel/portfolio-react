import React from 'react';
import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import {
  focusEditor,
  insertEmptyElement,
  useEditorRef,
} from '@udecode/plate-common';
import { 
  ELEMENT_H1, 
  ELEMENT_H2, 
  ELEMENT_H3, 
  ELEMENT_H4, 
  ELEMENT_H5, 
  ELEMENT_H6 
} from '@udecode/plate-heading';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';

import { Icons } from '@/components/icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  useOpenState,
} from './dropdown-menu';
import { ToolbarButton } from './toolbar';
import { useTranslation } from 'react-i18next';

export function InsertDropdownMenu(props: DropdownMenuProps) {
  const { t } = useTranslation();

  const items = [
    {
      label: t('editor.toolbar.tooltip.basicBlocks'),
      items: [
        {
          value: ELEMENT_PARAGRAPH,
          label:  t('editor.toolbar.tooltip.paragraph'),
          description: 'Paragraph',
          icon: Icons.paragraph,
        },
        {
          value: ELEMENT_H1,
          label: t('editor.toolbar.tooltip.heading')+" "+1,
          description: 'Heading 1',
          icon: Icons.h1,
        },
        {
          value: ELEMENT_H2,
          label: t('editor.toolbar.tooltip.heading')+" "+2,
          description: 'Heading 2',
          icon: Icons.h2,
        },
        {
          value: ELEMENT_H3,
          label: t('editor.toolbar.tooltip.heading')+" "+3,
          description: 'Heading 3',
          icon: Icons.h3,
        },
        {
          value: ELEMENT_H4,
          label: t('editor.toolbar.tooltip.heading')+" "+4,
          description: 'Heading 4',
          icon: Icons.h4,
        },
        {
          value: ELEMENT_H5,
          label: t('editor.toolbar.tooltip.heading')+" "+5,
          description: 'Heading 5',
          icon: Icons.h5,
        },
        {
          value: ELEMENT_H6,
          label: t('editor.toolbar.tooltip.heading')+" "+6,
          description: 'Heading 6',
          icon: Icons.h6,
        },
      ],
    },
  ];

  const editor = useEditorRef();
  const openState = useOpenState();

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={openState.open} tooltip={t('editor.toolbar.tooltip.insert')} isDropdown>
          <Icons.add />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="flex max-h-[500px] min-w-0 flex-col gap-0.5 overflow-y-auto"
      >
        {items.map(({ items: nestedItems, label }, index) => (
          <React.Fragment key={label}>
            {index !== 0 && <DropdownMenuSeparator />}

            <DropdownMenuLabel>{label}</DropdownMenuLabel>
            {nestedItems.map(
              ({ value: type, label: itemLabel, icon: Icon }) => (
                <DropdownMenuItem
                  key={type}
                  className="min-w-[180px]"
                  onSelect={async () => {
                    switch (type) {
                      // case ELEMENT_CODE_BLOCK: {
                      //   insertEmptyCodeBlock(editor);
                      //
                      //   break;
                      // }
                      // case ELEMENT_IMAGE: {
                      //   await insertMedia(editor, { type: ELEMENT_IMAGE });
                      //
                      //   break;
                      // }
                      // case ELEMENT_MEDIA_EMBED: {
                      //   await insertMedia(editor, {
                      //     type: ELEMENT_MEDIA_EMBED,
                      //   });
                      //
                      //   break;
                      // }
                      // case 'ul':
                      // case 'ol': {
                      //   insertEmptyElement(editor, ELEMENT_PARAGRAPH, {
                      //     select: true,
                      //     nextBlock: true,
                      //   });
                      //
                      //   if (settingsStore.get.checkedId(KEY_LIST_STYLE_TYPE)) {
                      //     toggleIndentList(editor, {
                      //       listStyleType: type === 'ul' ? 'disc' : 'decimal',
                      //     });
                      //   } else if (settingsStore.get.checkedId('list')) {
                      //     toggleList(editor, { type });
                      //   }
                      //
                      //   break;
                      // }
                      // case ELEMENT_TABLE: {
                      //   insertTable(editor);
                      //
                      //   break;
                      // }
                      // case ELEMENT_LINK: {
                      //   triggerFloatingLink(editor, { focused: true });
                      //
                      //   break;
                      // }
                      default: {
                        insertEmptyElement(editor, type, {
                          select: true,
                          nextBlock: true,
                        });
                      }
                    }

                    focusEditor(editor);
                  }}
                >
                  <Icon className="mr-2 size-5" />
                  {itemLabel}
                </DropdownMenuItem>
              )
            )}
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
