/**
 * NEXT_PUBLIC_* values inlined at build time.
 * In development, local defaults apply when a var is unset so get-troott links never degrade to `?package=…`.
 */
const DEV_DEFAULTS = {
    siteUrl: 'http://localhost:3051',
    webAppUrl: 'http://localhost:5053',
    getTroottPath: '/get-troott',
} as const;

function isDevelopment(): boolean {
    return process.env.NODE_ENV === 'development';
}

function readPublicEnv(value: string | undefined, devDefault = ''): string {
    const trimmed = value?.trim() ?? '';
    if (trimmed) return trimmed;
    if (isDevelopment()) return devDefault;
    return '';
}

function readGetTroottEnabled(): boolean {
    const raw = process.env.NEXT_PUBLIC_GET_TROOTT_ENABLED?.trim();
    if (raw === 'true') return true;
    if (raw === 'false') return false;
    return isDevelopment();
}

export const publicEnv = {
    // Static `process.env.NEXT_PUBLIC_*` access is required so Next.js inlines
    // the same values on the server and the client. Dynamic `process.env[key]`
    // is empty in the browser and caused download-link hydration mismatches.
    siteUrl: readPublicEnv(process.env.NEXT_PUBLIC_SITE_URL, DEV_DEFAULTS.siteUrl),
    webAppUrl: readPublicEnv(
        process.env.NEXT_PUBLIC_WEB_APP_URL,
        DEV_DEFAULTS.webAppUrl,
    ),
    getTroottPath: readPublicEnv(
        process.env.NEXT_PUBLIC_GET_TROOTT_PATH,
        DEV_DEFAULTS.getTroottPath,
    ),
    getTroottEnabled: readGetTroottEnabled(),
    requestDemoUrl: readPublicEnv(process.env.NEXT_PUBLIC_REQUEST_DEMO_URL),
};

export function joinUrl(base: string, path: string): string {
    const normalizedBase = base.replace(/\/$/, '');
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${normalizedBase}${normalizedPath}`;
}

export function getGetTroottBaseUrl(): string {
    const { webAppUrl, getTroottPath } = publicEnv;
    if (!webAppUrl) return '';
    return joinUrl(webAppUrl, getTroottPath || DEV_DEFAULTS.getTroottPath);
}
