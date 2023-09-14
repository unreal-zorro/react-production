import React, {
  type FC,
  type ReactNode,
  useEffect,
  useMemo,
  useState
} from 'react';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { useJsonSettings } from '@/entities/User';

// const defaultTheme: Theme = Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
  children?: ReactNode;
}

// if (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) != null) {
//   defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
// }

// document.body.className = defaultTheme;

// const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props;
  const { theme: defaultTheme } = useJsonSettings();
  const [isThemeInited, setThemeInited] = useState(false);
  const [theme, setTheme] = useState<Theme>(
    initialTheme ?? defaultTheme ?? Theme.LIGHT
  );

  useEffect(() => {
    if (!isThemeInited) {
      document.body.className = Theme.LIGHT;
      if (defaultTheme) {
        document.body.className = defaultTheme;
        setTheme(defaultTheme);
        setThemeInited(true);
      }
    }
  }, [defaultTheme, isThemeInited]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
