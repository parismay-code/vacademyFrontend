import Layout from '../components/Layout/index.jsx';
import Home from '../pages/Home';
import Schedule from '../pages/Schedule';
import Error from '../pages/Error';
import scheduleLoader from '../loaders/scheduleLoader.js';
import usersLoader from '../loaders/usersLoader.js';

export default [
  {
    path: '/',
    title: 'Главная',
    nav: true,
    loader: usersLoader,
    element: <Layout>
      <Home/>
    </Layout>,
    errorElement: <Error/>,
  },
  {
    path: '/schedule',
    title: 'Расписание',
    nav: true,
    loader: scheduleLoader,
    element: <Layout>
      <Schedule/>
    </Layout>,
    errorElement: <Error/>,
  },
  {
    path: '/lectures',
    title: 'Лекции',
    nav: true,
    element: <Layout>
      <div>Lectures</div>
    </Layout>,
    errorElement: <Error/>,
  },
  {
    path: '/lectures/:lectureId',
    title: 'Лекция',
    nav: false,
    element: <Layout>
      <div>Lecture</div>
    </Layout>,
    errorElement: <Error/>,
  },
  {
    path: '/students',
    title: 'Студенты',
    nav: true,
    element: <Layout>
      <div>Students</div>
    </Layout>,
    errorElement: <Error/>,
  },
  {
    path: '/teachers',
    title: 'Преподаватели',
    nav: true,
    element: <Layout>
      <div>Teachers</div>
    </Layout>,
    errorElement: <Error/>,
  },
  {
    path: '/users/:userId',
    title: 'Пользователь',
    nav: false,
    element: <Layout>
      <div>User</div>
    </Layout>,
    errorElement: <Error/>,
  },
];
