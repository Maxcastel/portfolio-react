import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from '@udecode/plate-basic-marks';

import { Icons, iconVariants } from '@/components/icons';

import { MarkToolbarButton } from './mark-toolbar-button';
import { MoreDropdownMenu } from './more-dropdown-menu';
import { TurnIntoDropdownMenu } from './turn-into-dropdown-menu';
import { AlignDropdownMenu } from './align-dropdown-menu';
import { LinkToolbarButton } from './link-toolbar-button';
import { ColorDropdownMenu } from './color-dropdown-menu';
import { MARK_BG_COLOR, MARK_COLOR } from '@udecode/plate-font';

export function FloatingToolbarButtons() {

  return (
    <>
      
      <TurnIntoDropdownMenu />

      <MarkToolbarButton nodeType={MARK_BOLD} tooltip="Bold (⌘+B)">
        <Icons.bold />
      </MarkToolbarButton>

      <MarkToolbarButton nodeType={MARK_ITALIC} tooltip="Italic (⌘+I)">
        <Icons.italic />
      </MarkToolbarButton>

      <MarkToolbarButton
        nodeType={MARK_UNDERLINE}
        tooltip="Underline (⌘+U)"
      >
        <Icons.underline />
      </MarkToolbarButton>

      <MarkToolbarButton
        nodeType={MARK_STRIKETHROUGH}
        tooltip="Strikethrough (⌘+⇧+M)"
      >
        <Icons.strikethrough />
      </MarkToolbarButton>

      <ColorDropdownMenu nodeType={MARK_COLOR} tooltip="Text Color">
          <Icons.color className={iconVariants({ variant: 'toolbar' })} />
      </ColorDropdownMenu>

      <ColorDropdownMenu
          nodeType={MARK_BG_COLOR}
          tooltip="Highlight Color"
      >
          <Icons.bg className={iconVariants({ variant: 'toolbar' })} />
      </ColorDropdownMenu>

      <AlignDropdownMenu />
    </>
  );
}
