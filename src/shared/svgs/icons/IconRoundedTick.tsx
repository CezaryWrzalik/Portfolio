import { IconProps } from '@shared/svgs/types';

export const IconRoundedTick = ({ fill, sizeY }: IconProps) => (
    <svg
        width="1em"
        height={sizeY ? sizeY : '1em'}
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M10.68 14.934a2.007 2.007 0 01-1.424-.588L8 13l.95-.95 1.255 1.346a.671.671 0 00.95 0l3.896-4.345L16 10l-3.896 4.345a2.007 2.007 0 01-1.424.59z"
            fill={(fill && fill[0]) || '#13161B'}
        />
        <path
            d="M12 20a8 8 0 118-8 8.009 8.009 0 01-8 8zm0-14.667A6.667 6.667 0 1018.667 12 6.674 6.674 0 0012 5.333z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
