import { sharedPreferences } from '../view/styles/sharedPreferences';

const detectMobileAndTablet = (currentWindowWidth: number): boolean | null => {
  const desktopWidth = sharedPreferences.breakpoints.lg.match(/\d+/gi);

  if (desktopWidth) return currentWindowWidth < parseInt(desktopWidth.join(''), 10);
  return null;
};

export default detectMobileAndTablet;
