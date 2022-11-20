import pkg from '~/../package.json';

export const StarterPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col">
        <h1>
          <span className="package-name-text text-3xl">{pkg.name}</span>
        </h1>
        <span className="mt-[-5px] self-end text-xs">v{pkg.version}</span>
      </div>

      <div>
        Start your project by removing this screen in{' '}
        <kbd>~/pages/starter</kbd>.
      </div>
    </div>
  );
};
