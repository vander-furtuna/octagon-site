'use client';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/global';
import { Theme } from '@/styles/theme';
import { AppProvider } from '@/hooks';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider theme={Theme}>
            <AppProvider>
                <html lang="pt-br">
                    <body>{children}</body>
                </html>
            </AppProvider>
            <GlobalStyle />
        </ThemeProvider>
    );
}
