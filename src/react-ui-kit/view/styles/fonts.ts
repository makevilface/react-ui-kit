type TFontsFamilies = {
  primaryFont: string;
  secondaryFont: string;
};

const regFont = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans, Ubuntu, Cantarell, sans-serif';

export const fontsFamilies: TFontsFamilies = {
  primaryFont: `Segoe UI, ${regFont}`,
  secondaryFont: `Roboto, ${regFont}`,
};
