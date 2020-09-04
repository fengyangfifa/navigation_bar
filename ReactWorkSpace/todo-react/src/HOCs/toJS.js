import React from "react";
import { Iterable } from "immutable";

// 利用高阶组件可以分离 immutable 和 展示型组件
export const toJS = (WrappedComponent) => (wrappedComponentProps) => {
  const KEY = 0;
  const VALUE = 1;
  const propsJS = Object.entries(wrappedComponentProps).reduce(
    (newProps, wrappedComponentProp) => {
      newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
        wrappedComponentProp[VALUE]
      )
        ? wrappedComponentProp[VALUE].toJS()
        : wrappedComponentProp[VALUE];
      return newProps;
    },
    {}
  );
  return <WrappedComponent {...propsJS} />;
};
