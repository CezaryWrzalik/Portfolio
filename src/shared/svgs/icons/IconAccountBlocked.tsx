import { IconProps } from '@shared/svgs/types';

export const IconAccountBlocked = ({ fill, sizeY }: IconProps) => (
    <svg
        width="1em"
        height={sizeY ? sizeY : '1em'}
        viewBox="0 0 88 88"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.073 43.216a3 3 0 013-3h40.98a3 3 0 010 6h-40.98a3 3 0 01-3-3z"
            fill={(fill && fill[0]) || '#ffffff'}
        />
        <circle
            cx={44}
            cy={44}
            r={41}
            stroke={(fill && fill[0]) || '#ffffff'}
            strokeWidth={6}
        />
    </svg>
);
