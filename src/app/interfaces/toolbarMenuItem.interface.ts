import { ToolbarMenuStatus } from '../enums/toolbar-menu-status.enum';

export interface ToolbarMenuItemIconInterface {
	name: string,
	status: ToolbarMenuStatus
}

export interface ToolbarMenuItemInterface {
	title: string,
	icons: ToolbarMenuItemIconInterface[]
}
