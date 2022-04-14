import { IconProps } from '@shared/svgs/types';

export const IconAuthSuccess = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY || '1em'} viewBox="0 0 88 88" fill="none">
        <path
            d="M25 46.164L36.356 59 63 30"
            stroke={(fill && fill[0]) || '#ffffff'}
            strokeWidth={6}
            strokeLinecap="round"
            strokeLinejoin="round"
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
