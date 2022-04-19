import defaultTheme from '@shared/theme/default.theme';

export const colorMapping = () => {
    return Object.keys(defaultTheme.colors.icons).reduce((prev, curr, idx) => {
        return {
            ...prev,
            [curr]: [curr],
        };
    }, {});
};
