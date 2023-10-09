import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const OhlyfLcCommonTabItemMeta: IPublicTypeComponentMetadata = {
  componentName: 'OhlyfLcCommonTabItem',
  title: 'Tab子元素',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: '通用组件',
  npm: {
    package: '@ohlyf/lc-common-tab-item',
    version: '0.3.0',
    exportName: 'OhlyfLcCommonTabItem',
    main: 'src/index.tsx',
    destructuring: false,
    subName: '',
  },
  configure: {
    props: [],
    supports: {
      style: true,
    },
    component: {
      isContainer: true,
    },
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: 'Tab子元素',
    screenshot: '',
    schema: {
      componentName: 'OhlyfLcCommonTabItem',
      props: {},
    },
  },
];

export default {
  ...OhlyfLcCommonTabItemMeta,
  snippets,
};
