import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import LockOutlined from '@mui/icons-material/LockOutlined';
import PlaceOutlined from '@mui/icons-material/PlaceOutlined';
import ArticleOutlined from '@mui/icons-material/ArticleOutlined';

export const userNav = [
    {
        icon: AccountCircleOutlined,
        route: '/user',
        label: 'Profile',
    },
    {
        icon: LockOutlined,
        route: '/user/changePassword',
        label: 'Change Password',
    },
    {
        icon: PlaceOutlined,
        route: '/user/address',
        label: 'Address',
    },
    {
        icon: ArticleOutlined,
        route: '/user/orders',
        label: 'Orders',
    },
];
