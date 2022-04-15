import { IconProps } from '@shared/svgs/types';

export const IconLogout = ({ fill, sizeY }: IconProps) => (
    <svg
        width="1em"
        height={sizeY ? sizeY : '1em'}
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M14 6.118v1.4a6.001 6.001 0 1 1-4 0v-1.4a7.335 7.335 0 1 0 4 0Z"
            fill={(fill && fill[0]) || '#13161B'}
        />
        <path
            d="M12.667 4.5h-1.334v5.334h1.334V4.5Z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
