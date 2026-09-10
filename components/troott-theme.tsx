'use client';

import { useEffect } from 'react';
import { initTheme } from '@troott/ui/theme';

/** Marketing site is always dark; apply the design-system theme on the client. */
export function TroottTheme() {
    useEffect(() => {
        initTheme('dark');
    }, []);

    return null;
}
