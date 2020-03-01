import Home from '../pages/Home/Home'
import User from '../pages/User/User'
import Mine from '../pages/Mine/Mine'
import SowingList from '../pages/Rotation/SowingList'
import SowingAdd from '../pages/Rotation/SowingAdd'
import SowingEdit from '../pages/Rotation/SowingEdit'
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
    path: '/sowinglist',
    component: SowingList,
  },
  {
    path: '/sowingadd',
    component: SowingAdd,
  },
  {
    path: '/sowingedit',
    component: SowingEdit,
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
