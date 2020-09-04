import React, { Component } from "react";

// 利用高阶组件实现组件按需加载
function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }
    componentDidMount() {
      importComponent().then((mod) => {
        this.setState({
          component: mod.default,
        });
      });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}

export default asyncComponent;
