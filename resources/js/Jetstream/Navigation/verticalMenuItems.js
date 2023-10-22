const verticalMenuItems = [
    {
        title: 'Home',
        text: 'Home',
        href: route('home'),
        active: route().current('home'),
    },
    {
        title: 'Dashboard',
        text: 'Dashboard',
        href: route('dashboard'),
        active: route().current('dashboard'),
    },
    {
        title: 'Events',
        text: 'Events',
        href: route('events'),
        active: route().current('events'),
    },
    {
        title: 'Posts',
        text: 'Posts',
        href: route('posts'),
        active: route().current('posts'),
    },
];
export default verticalMenuItems;
