import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface ComponentProps {
  title: string;
  content: string;
  children: React.ReactNode;
}

const LcCommonTabItem = (props: ComponentProps, ref: any) => {
  const { children } = props;

  return (
    <>
      {children}
    </>
  );
};

const RefLcCommonTabItem = forwardRef(LcCommonTabItem as ForwardRefRenderFunction<any, ComponentProps>);
RefLcCommonTabItem.displayName = 'LcCommonTabItem';

export default LcCommonTabItem;
