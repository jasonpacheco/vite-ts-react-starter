import './styles.scss';

import pkg from '~/../package.json';

export const StarterPage = () => {
  return (
    <div className="sp__container">
      <div className="sp__pkg-details">
        <h1>
          <span>{pkg.name}</span>
        </h1>
        <span className="sp__pkg-details version">v{pkg.version}</span>
      </div>

      <div>
        Start your project by removing this screen in{' '}
        <kbd>~/pages/starter</kbd>.
      </div>
    </div>
  );
};
