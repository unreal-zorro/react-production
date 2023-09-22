import React, { type FC, Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import AppRouter from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Siderbar';
import { useSelector } from 'react-redux';
import { getUserInited, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { AsyncThunkAction } from '@reduxjs/toolkit';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';
const App: FC = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    void dispatch(
      initAuthData() as unknown as AsyncThunkAction<undefined, undefined, any>
    );
  }, [dispatch]);

  if (!inited) {
    return <PageLoader />;
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <div id="app" className={classNames('app_redesigned', {}, [])}>
          <Suspense fallback="">
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
            />
          </Suspense>
        </div>
      }
      off={
        <div id="app" className={classNames('app', {}, [])}>
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
    />
  );
};

export default App;
