'use client';

import { CacheProvider } from '@emotion/react';
import { MantineProvider, useEmotionCache } from '@mantine/core';
import { Raleway } from 'next/font/google';
import { useServerInsertedHTML } from 'next/navigation';
import type { CSSProperties, ReactNode } from 'react';

const raleway: unknown = Raleway({ subsets: ['latin'] });

const RootStyleRegistry = ({ children }: { children: ReactNode }) => {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: raleway as CSSProperties['fontFamily'],
        }}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  );
};

export default RootStyleRegistry;
