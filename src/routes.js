import handleUsers from './pages/Admin/handleUsers'
import handleFilms from './pages/Admin/handleFilms'
import dashBoard from './pages/Admin/dashBoard'
import Home from './pages/Home/Home'
import DetailFilm from './pages/Home/DetailFilm'
import SignIn from './pages/Home/SignIn'
import SignUp from './pages/Home/SignUp'
const routesAdmin = [
    {
        path: "/admin/dashboard",
        exact: false,
        component: dashBoard,
    },
    {
        path: "/admin/handle-users",
        exact: false,
        component: handleUsers
    },
    {
        path: "/admin/handle-films",
        exact: false,
        component: handleFilms
    },
]
const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/detail/:id",
        exact: false,
        component: DetailFilm
    },
    {
        path: "/sign-up",
        exact: false,
        component: SignUp
    },
    {
        path: "/sign-in",
        exact: false,
        component: SignIn
    },
    

]

export { routesAdmin, routesHome };