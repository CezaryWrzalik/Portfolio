import { IconProps } from '@shared/svgs/types';

export const IconAlert = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY || '1em'} viewBox="0 0 24 24" fill="none">
        <path
            d="M12 20a8 8 0 118-8 8.009 8.009 0 01-8 8zm0-14.667A6.667 6.667 0 1018.667 12 6.674 6.674 0 0012 5.333z"
            fill={(fill && fill[0]) || '#13161B'}
        />
        <path
            d="M12.667 7.333h-1.334V14h1.334V7.333zM12.667 15.333h-1.334v1.334h1.334v-1.334z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
