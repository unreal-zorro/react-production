import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { type FC, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
// import { Button } from 'shared/ui/Button/Button';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC = ({ className = '' }: SidebarProps) => {
  const [collapsed
    // setCollapsed
  ] = useState(false);

  // const onToggle = (): void => {
  //   setCollapsed(prevState => !prevState);
  // };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      {/* <Button */}
      {/*  data-testid="sidebar-toggle" */}
      {/*  onClick={onToggle} */}
      {/* > */}
      {/*  toggle */}
      {/* </Button> */}
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
