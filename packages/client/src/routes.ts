import { ReactLink, BasicLink } from './components/Links';

const { REACT_APP_HOST_IMAGES, REACT_APP_WEB_URL } = process.env;

const routeSkeleton = {
  logo: {
    src: `${REACT_APP_HOST_IMAGES}/images/logo.svg`,
    alt: 'Raise logo'
  },
  routes: [
    {
      title: 'Loan of the month',
      path: '/',
      component: ReactLink,
      logged: false
    },
    {
      title: 'Investing with Raise',
      path: '/investing',
      component: ReactLink,
      logged: false
    },
    {
      title: 'Buy Crypto',
      path: '/buy-crypto',
      component: ReactLink,
      logged: true
    },
    {
      title: 'Blog',
      path: `${REACT_APP_WEB_URL}/blog`,
      component: BasicLink,
      logged: false
    },
    {
      title: 'About us',
      path: `${REACT_APP_WEB_URL}/about`,
      component: BasicLink
    }
  ],
  pageRoutes: []
};

export default routeSkeleton;
