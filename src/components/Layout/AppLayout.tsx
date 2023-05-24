'use client';

import { AppShell, Container } from '@mantine/core';
import type { ReactNode } from 'react';

import { PageTransition } from '../Routes';
import HeaderComp from './HeaderComp';

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AppShell
      padding="md"
      header={<HeaderComp />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <PageTransition keyProp="{router.pathname}">
        <Container size={1280}>{children}</Container>
      </PageTransition>
    </AppShell>
  );
};

export default AppLayout;
