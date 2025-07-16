'use client'

import { Bai_Jamjuree } from 'next/font/google'
import Script from 'next/script'
import { ReactNode } from 'react'

import { AppProvider } from '@/hooks'

const BaiJamjuree = Bai_Jamjuree({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

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

        <Script
          strategy="afterInteractive"
          id="my_clarity_code"
          dangerouslySetInnerHTML={{
            __html: `
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "ik078yyuhk");
                        `,
          }}
        />
      </head>

      <AppProvider>
        <body className={BaiJamjuree.className}>{children}</body>
      </AppProvider>
    </html>
  )
}
