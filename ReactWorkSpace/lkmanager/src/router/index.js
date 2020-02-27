import Home from '../pages/Home/Home'
import User from '../pages/User/User'
import Mine from '../pages/Mine/Mine'
import Rotation from '../pages/Rotation/Rotation'
import CourseAdd from '../pages/Course/CourseAdd'
import CourseList from '../pages/Course/CourseList'
import CourseCategory from '../pages/Course/CourseCategory'
import CourseTopic from '../pages/Course/CourseTopic'

let routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '/mine',
    component: Mine,
  },
  {
    path: '/rotation',
    component: Rotation,
  },
  {
    path: '/courseadd',
    component: CourseAdd,
  },
  {
    path: '/courselist',
    component: CourseList,
  },
  {
    path: '/coursecategory',
    component: CourseCategory,
  },
  {
    path: '/coursetopic',
    component: CourseTopic,
  }
];

export default routes;
