export const ROUTES = {
    HOME: { path: "/", label: "Home" },
    WORKS: { path: "/works", label: "Works" },
    CONTACT: { path: "/contact", label: "Contact" },
} as const

export const NAV_LINKS = [ROUTES.HOME, ROUTES.WORKS, ROUTES.CONTACT]