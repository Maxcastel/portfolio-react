import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import {
  collapseSelection,
  findNode,
  focusEditor,
  isBlock,
  isCollapsed,
  TElement,
  toggleNodeType,
  useEditorRef,
  useEditorSelector,
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
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  useOpenState,
} from './dropdown-menu';
import { ToolbarButton } from './toolbar';
import { useTranslation } from 'react-i18next';

export function TurnIntoDropdownMenu(props: DropdownMenuProps) {
  const { t } = useTranslation();

  const items = [
    {
      value: ELEMENT_PARAGRAPH,
      label: t('editor.toolbar.tooltip.paragraph'),
      description: 'Paragraph',
      icon: Icons.paragraph,
    },
    {
      value: ELEMENT_H1,
      label: t('editor.toolbar.tooltip.heading')+" "+1,
      description: t('editor.toolbar.tooltip.heading')+" "+1,
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
  ];
  
  const defaultItem = items.find((item) => item.value === ELEMENT_PARAGRAPH)!;

  const value: string = useEditorSelector((editor) => {
    if (isCollapsed(editor.selection)) {
      const entry = findNode<TElement>(editor, {
        match: (n) => isBlock(editor, n),
      });

      if (entry) {
        return (
          items.find((item) => item.value === entry[0].type)?.value ??
          ELEMENT_PARAGRAPH
        );
      }
    }

    return ELEMENT_PARAGRAPH;
  }, []);

  const editor = useEditorRef();
  const openState = useOpenState();

  const selectedItem =
    items.find((item) => item.value === value) ?? defaultItem;
  const { icon: SelectedItemIcon, label: selectedItemLabel } = selectedItem;

  return (
    <DropdownMenu modal={false} {...openState} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton
          pressed={openState.open}
          tooltip={t('editor.toolbar.tooltip.turnInto')}
          isDropdown
          className="lg:min-w-[130px]"
        >
          <SelectedItemIcon className="size-5 lg:hidden" />
          <span className="max-lg:hidden">{selectedItemLabel}</span>
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="min-w-0">
        <DropdownMenuLabel>{t('editor.toolbar.tooltip.turnInto')}</DropdownMenuLabel>

        <DropdownMenuRadioGroup
          className="flex flex-col gap-0.5"
          value={value}
          onValueChange={(type) => {
            // if (type === 'ul' || type === 'ol') {
            //   if (settingsStore.get.checkedId(KEY_LIST_STYLE_TYPE)) {
            //     toggleIndentList(editor, {
            //       listStyleType: type === 'ul' ? 'disc' : 'decimal',
            //     });
            //   } else if (settingsStore.get.checkedId('list')) {
            //     toggleList(editor, { type });
            //   }
            // } else {
            //   unwrapList(editor);
            toggleNodeType(editor, { activeType: type });
            // }

            collapseSelection(editor);
            focusEditor(editor);
          }}
        >
          {items.map(({ value: itemValue, label, icon: Icon }) => (
            <DropdownMenuRadioItem
              key={itemValue}
              value={itemValue}
              className="min-w-[180px]"
            >
              <Icon className="mr-2 size-5" />
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
