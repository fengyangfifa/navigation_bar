import React from 'react'
import { AppContext } from './App'

// 高阶组件
const withContext = (Component) => {
  return (props) => (
    <AppContext.Consumer>
      {
        ({ state, actions }) => {
          // Component.contextType = AppContext;
          return (
            <Component 
              {...props} 
              data={state}
              actions={actions}
            />
          )
        }
      }
    </AppContext.Consumer>
  )
}

export default withContext;
