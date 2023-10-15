import * as componentInstances from '/Users/liyunfu/Documents/meta/components/packages/lc-button/src/index.tsx';



import '/Users/liyunfu/Documents/meta/components/packages/lc-button/src/index.scss'


const entryDefault = componentInstances.default;
export { entryDefault as default }

export * from '/Users/liyunfu/Documents/meta/components/packages/lc-button/src/index.tsx';

const coveredComponents = {};

const library = 'BizComp';
const execCompile = !!false;

if (!execCompile) {
  window[library] = Object.assign({__esModule: true}, componentInstances || {}, coveredComponents || {});
}

function getRealComponent(component, componentName) {
  if (component.default) return component.default;
  if (component[componentName]) return component[componentName];
  return component;
}