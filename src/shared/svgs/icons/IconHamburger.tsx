import { IconProps } from '@shared/svgs/types';

export const IconHamburger = ({ fill, sizeY }: IconProps) => (
    <svg
        width="1em"
        height={sizeY ? sizeY : '1em'}
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M6 7H18"
            stroke={(fill && fill[0]) || '#00135D'}
            strokeLinecap="round"
        />
        <path
            d="M6 12L18 12"
            stroke={(fill && fill[0]) || '#00135D'}
            strokeLinecap="round"
        />
        <path
            d="M6 17H18"
            stroke={(fill && fill[0]) || '#00135D'}
            strokeLinecap="round"
        />
    </svg>
);
