import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    title: true,
    name: 'Files'
  },
  {
    name: 'Datasets',
    url: '/files/datasets',
    iconComponent: { name: 'cil-file' }
  },
  {
    name: 'Germlines',
    url: '/files/germlines',
    iconComponent: { name: 'cil-file' }
  },
  {
    name: 'UMIs',
    url: '/files/umis',
    iconComponent: { name: 'cil-file' }
  },
  {
    title: true,
    name: 'Pipelines'
  },
  {
    name: 'Tools',
    url: '/pipelines/tools',
    iconComponent: { name: 'cil-input-power' }
  },
  {
    name: 'Create',
    url: '/pipelines/create',
    iconComponent: { name: 'cil-input-power' }
  },
  {
    name: 'Running',
    url: '/pipelines/running',
    iconComponent: { name: 'cil-input-power' }
  },
  {
    name: 'Finished',
    url: '/pipelines/finished',
    iconComponent: { name: 'cil-input-power' }
  },
  {
    name: 'Awaiting Validation',
    url: '/pipelines/awaitingValidation',
    iconComponent: { name: 'cil-input-power' }
  },
  {
    name: 'Validated',
    url: '/pipelines/validated',
    iconComponent: { name: 'cil-input-power' }
  },
];
