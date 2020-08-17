import AdminHome from './components/admin/AdminHome.vue';
import ExampleComponent from "./components/ExampleComponent";
import CategoryList from './components/admin/category/List';
import AddCategory from './components/admin/category/New';
import EditCategory from './components/admin/category/Edit';

export const routes = [
    {
        path: '/home',
        component: AdminHome
    },
    {
        path: '/post',
        component: ExampleComponent
    },
    {
        path: '/category-list',
        component: CategoryList
    },
    {
        path: '/add-category',
        component: AddCategory
    },
    {
        path: '/edit-category/:categoryid',
        component: EditCategory
    }
]
