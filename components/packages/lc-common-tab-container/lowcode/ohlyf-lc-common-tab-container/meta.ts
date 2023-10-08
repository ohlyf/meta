import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const OhlyfLcCommonTabContainerMeta: IPublicTypeComponentMetadata = {
  componentName: 'OhlyfLcCommonTabContainer',
  title: 'Tab容器',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@ohlyf/lc-common-tab-container',
    version: '0.1.0',
    exportName: 'default',
    main: 'src/index.tsx',
    destructuring: false,
    subName: '',
  },
  configure: {
    props: [
      {
        title: 'tabList',
        name: 'tabList',
        setter: {
          componentName: 'ArraySetter',
          isRequired: true,
          initialValue: [
            { tabDefKey: 'tab-item-0', title: '水果' },
            { tabDefKey: 'tab-item-1', title: '水果' },
            { tabDefKey: 'tab-item-2', title: '动物' },
          ],
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              initialValue: () => {
                return {
                  tabDefKey: String(Math.floor(Math.random() * 10000)),
                  title: '标题项',
                };
              },
              props: {
                config: {
                  items: [
                    {
                      name: 'tabDefKey',
                      description: 'tabDefKey',
                      setter: 'StringSetter',
                    },
                    {
                      name: 'title',
                      description: '标题',
                      setter: 'StringSetter',
                    },
                    {
                      name: 'content',
                      description: '内容',
                      setter: 'StringSetter',
                    },
                  ],
                },
              },
            },
          },
        },
        extraProps: {
          setValue: (target, value) => {
            const { node } = target;
            const map = {};
            let valueList = value;
            if (!Array.isArray(valueList)) {
              valueList = [];
            }
            valueList.forEach((item, index) => {
              const tabItem = Object.assign({}, item);
              map[item.tabDefKey] = tabItem;
            });
            console.log('tab setValue', node, node.children);
            if (node.children.size === valueList.length || !Array.isArray(value)) return;
            node.children.mergeChildren(
              (child) => {
                const tabDefKey = child.getPropValue('tabDefKey');
                if (Object.hasOwnProperty.call(map, tabDefKey)) {
                  delete map[tabDefKey];
                  return false;
                }
                return true;
              },
              () => {
                const items: any[] = [];
                for (const tabDefKey in map) {
                  if (Object.hasOwnProperty.call(map, tabDefKey)) {
                    items.push({ componentName: 'OhlyfLcCommonTabItem', props: map[tabDefKey] });
                  }
                }
                return items;
              },
              () => {
                return 0;
              },
            );
          },
        },
      },
    ],
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
    title: 'Tab容器',
    screenshot: '',
    schema: {
      componentName: 'OhlyfLcCommonTabContainer',
      props: {},
    },
  },
];

export default {
  ...OhlyfLcCommonTabContainerMeta,
  snippets,
};
