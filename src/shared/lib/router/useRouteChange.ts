import { matchPath, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppRouteByPathPattern, AppRoutes } from '../../const/router';

export function useRouteChange() {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState(AppRoutes.MAIN as AppRoutes);

  useEffect(() => {
    Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  return appRoute;
}
