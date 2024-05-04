import {
    MARK_BOLD,
    MARK_ITALIC,
    MARK_STRIKETHROUGH,
    MARK_UNDERLINE,
  } from '@udecode/plate-basic-marks';
  
  import { Icons, iconVariants } from '@/components/icons';
  
  import { InsertDropdownMenu } from './insert-dropdown-menu';
  import { MarkToolbarButton } from './mark-toolbar-button';
  import { ToolbarGroup } from './toolbar';
  import { TurnIntoDropdownMenu } from './turn-into-dropdown-menu';
  import { AlignDropdownMenu } from './align-dropdown-menu';
  import { ColorDropdownMenu } from './color-dropdown-menu';
  import { MARK_BG_COLOR, MARK_COLOR } from '@udecode/plate-font';
  
  export function FixedToolbarButtons() {
  
    return (
      <div className="w-full overflow-hidden">
        <div
          className="flex flex-wrap"
          style={{
            transform: 'translateX(calc(-1px))',
          }}
        >
            <ToolbarGroup noSeparator>
                <InsertDropdownMenu />
                <TurnIntoDropdownMenu />
            </ToolbarGroup>

            <ToolbarGroup>
                <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={MARK_BOLD}>
                    <Icons.bold />
                </MarkToolbarButton>

                <MarkToolbarButton tooltip="Italic (⌘+I)" nodeType={MARK_ITALIC}>
                    <Icons.italic />
                </MarkToolbarButton>

                <MarkToolbarButton
                    tooltip="Underline (⌘+U)"
                    nodeType={MARK_UNDERLINE}
                >
                    <Icons.underline />
                </MarkToolbarButton>

                <MarkToolbarButton
                    tooltip="Strikethrough (⌘+⇧+M)"
                    nodeType={MARK_STRIKETHROUGH}
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
            </ToolbarGroup>

            <ToolbarGroup>
                <AlignDropdownMenu />
            </ToolbarGroup>
  
          <div className="grow" />
  
        </div>
      </div>
    );
  }
  