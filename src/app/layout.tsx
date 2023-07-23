'use client';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/global';
import { Theme } from '@/styles/theme';
import { AppProvider } from '@/hooks';
import { ReactNode } from 'react';
import StyledComponentsRegistry from '@/lib/registry';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-br">
            <head>
                <title>Octagon Engenharia</title>
                <meta
                    name="description"
                    content="A OCTAGON ENGENHARIA é uma Empresa Júnior do curso de Engenharia Elétrica da Universidade Federal do Ceará - Campus de Sobral. Constitui-se em uma associação civil sem fins lucrativos, de caráter multiprofissional e unidisciplinar."
                />
                <link
                    rel="icon"
                    href="/octagon-favicon.svg"
                    sizes="any"
                    type="image/svg+xml"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="use-credentials"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;600;700&family=Inter:wght@400;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </head>
            <StyledComponentsRegistry>
                <ThemeProvider theme={Theme}>
                    <AppProvider>
                        <body>{children}</body>
                    </AppProvider>
                    <GlobalStyle />
                </ThemeProvider>
            </StyledComponentsRegistry>
        </html>
    );
}
