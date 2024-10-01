import type { LinkItem } from '~/types';

function filterLinks(links: LinkItem[], userRole: number): LinkItem[] {
    return links.filter((link) => {
        return link.roles?.includes(userRole) || link.roles === null;
    });
}

export const sidebarLinks: LinkItem[] = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: 'mdi:view-dashboard-outline',
    },
    {
        title: 'Users',
        path: '/users',
        icon: 'mdi:users',
    },
];

export default function useLinks(userRole: number) {
    const links = computed<LinkItem[]>(() => {
        return filterLinks(sidebarLinks, userRole);
    });

    return { links };
}