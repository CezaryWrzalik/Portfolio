import defaultTheme from '../shared/theme/default.theme';
import darkTheme from '../shared/theme/dark.theme';
import { Theme } from '../types/commonTypes';

const themeVariant = {
    [Theme.DEFAULT]: defaultTheme,
    [Theme.DARK]: darkTheme,
};

export default themeVariant;