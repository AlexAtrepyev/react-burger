import styles from './app-header-link.module.css';

function AppHeaderLink(props) {
  const linkClass = `${styles.link} pt-4 pr-5 pb-4 pl-5 mt-4 mb-4`;

  let textClass = 'ml-2 text text_type_main-default';
  if (props.inactive) textClass += ' text_color_inactive';

  return (
    <a className={linkClass} href="#">
      {props.children}
      <span className={textClass}>{props.text}</span>
    </a>
  );
}

export default AppHeaderLink;
