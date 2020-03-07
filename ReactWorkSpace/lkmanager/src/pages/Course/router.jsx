import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import CourseAdd from './CourseAdd'
import CourseAddOne from './CourseAddOne'
import CourseAddTwo from './CourseAddTwo'
import CourseAddThree from './CourseAddThree'
import CourseCategory from './CourseCategory'
import CourseCategoryAdd from './CourseCategoryAdd'
import CourseList from './CourseList'
import CourseTopic from './CourseTopic'

class CourseRouter extends Component {
  render () {
    return (
      <Switch>
        <Route path="/course/list" component={CourseList}></Route>
        <Route path="/course/add" component={CourseAdd}></Route>
        <Route path="/course/add_one" component={CourseAddOne}></Route>
        <Route path="/course/add_two" component={CourseAddTwo}></Route>
        <Route path="/course/add_three" component={CourseAddThree}></Route>
        <Route path="/course/topic" component={CourseTopic}></Route>
        <Route path="/course/category" component={CourseCategory}></Route>
        <Route path="/course/category_add" component={CourseCategoryAdd}></Route>
        <Redirect exact from="/course" to="/course/list"></Redirect>
      </Switch>
    )
  }
}

export default CourseRouter;
