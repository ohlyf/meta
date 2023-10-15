import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { CapsuleTabs } from 'antd-mobile'
interface ComponentProps {
  title: string;
  content: string;
  tabList: any[],
  children: React.ReactNode[]
}

const LcCommonTabContainer = (props: ComponentProps, ref: any) => {
  const { title, tabList, children } = props;
  console.log(tabList)
  const [tabItems, setTabItems] = React.useState(tabList)
  return (
    <>
      <CapsuleTabs>
        {tabItems.map((item, index) => (
          <CapsuleTabs.Tab title={item.title} key={item.tabDefKey}>{children[index]}</CapsuleTabs.Tab>))}
      </CapsuleTabs>
    </>
  );
};

const RefLcCommonTabContainer = forwardRef(LcCommonTabContainer as ForwardRefRenderFunction<any, ComponentProps>);
RefLcCommonTabContainer.displayName = 'LcCommonTabContainer';

export default LcCommonTabContainer;
