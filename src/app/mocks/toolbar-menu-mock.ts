import { ToolbarMenuStatus } from '../enums/toolbar-menu-status.enum';

export const ToolbarMenuItems = [
  {
    title: 'status',
    icons: [
      {
        name: 'fa fa-heartbeat',
        status: ToolbarMenuStatus.ACTIVE
      }
    ]
  },
  {
    title: 'share',
    icons: [
      {
        name: 'fa fa-share-alt',
        status: ToolbarMenuStatus.INACTIVE
      }
    ]
  },
  {
    title: 'filter',
    icons: [
      {
        name: 'fa fa-filter',
        status: ToolbarMenuStatus.INACTIVE
      }
    ]
  },
  {
    title: 'calendar',
    icons: [
      {
        name: 'fa fa-calendar',
        status: ToolbarMenuStatus.INACTIVE
      }
    ]
  },
  {
    title: 'data',
    icons: [
      {
        name: 'fa fa-download',
        status: ToolbarMenuStatus.INACTIVE
      },
      {
        name: 'fa fa-upload',
        status: ToolbarMenuStatus.INACTIVE
      },
      {
        name: 'fa fa-refresh',
        status: ToolbarMenuStatus.INACTIVE
      }
    ]
  },
];
