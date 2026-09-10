import type { NextConfig } from 'next';
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);

// Tailwind v3 PostCSS cannot process the compiled @troott/ui stylesheet
// (`@layer base` without `@tailwind base`). Serve it as a static asset instead,
// then append last-commit marketing tokens so they always win.
const packageStyles = readFileSync(
    path.join(
        path.dirname(require.resolve('@troott/ui/package.json')),
        'dist',
        'styles.css'
    ),
    'utf8'
);
const lastCommitStyles = readFileSync(
    path.join(process.cwd(), 'styles', 'troott-last-commit.css'),
    'utf8'
);
writeFileSync(
    path.join(process.cwd(), 'public', 'troott-ui.css'),
    `${packageStyles}\n${lastCommitStyles}`
);

const nextConfig: NextConfig = {
    output: 'standalone',
    outputFileTracingRoot: path.join(process.cwd()),
    transpilePackages: ['@troott/ui'],
    allowedDevOrigins: ['127.0.0.1'],
    async redirects() {
        return [
            {
                source: '/privacy',
                destination: '/legal/listener/privacy-policy',
                permanent: true,
            },
            {
                source: '/terms',
                destination: '/legal/listener/terms-of-use',
                permanent: true,
            },
            {
                source: '/listeners',
                destination: '/listener',
                permanent: true,
            },
            {
                source: '/ministers',
                destination: '/minister',
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/photo-1633332755192-727a05c4013d',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/photo-1580489944761-15a19d654956',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/photo-1544005313-94ddf0286df2',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/photo-1506794778202-cad84cf45f1d',
            },
        ],
    },
};

export default nextConfig;
