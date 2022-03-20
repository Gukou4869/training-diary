import * as React from 'react';
import CreateEventButton from '../button/createEvent/CreateEventButton';
import styles from './Sidebar.module.scss';

interface SidebarProps {}

const Sidebar: React.VFC<SidebarProps> = () => {
  return (
    <aside className={styles.sidebar}>
      <CreateEventButton />
    </aside>
  );
};

export default Sidebar;
