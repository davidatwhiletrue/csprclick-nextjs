'use client'
import './globals.css'
import { ClickProvider } from '@make-software/csprclick-ui';
import { CsprClickInitOptions } from '@make-software/csprclick-core-client';
import { ClickTopBar } from "@make-software/csprclick-ui";
import { ThemeProvider } from 'styled-components';
import { CsprClickThemes } from '@make-software/csprclick-ui';

const clickOptions: CsprClickInitOptions = {
  appName: 'CSPR.playground',
  contentMode: 'iframe',
  providers: [
      'casper-wallet',
      'ledger',
      'casperdash',
      'metamask-snap',
      'torus-wallet',
      'casper-signer',
  ],
  appId: 'csprclick-template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <ClickProvider options={clickOptions}>
            <ThemeProvider theme={CsprClickThemes.light}>
              <div className='z-10 max-w-5xl w-full' style={{margin: 'auto'}}>
                <ClickTopBar/>
              </div>
              {children}
            </ThemeProvider>
          </ClickProvider>
        </div>
     </body>
    </html>
  )
}
