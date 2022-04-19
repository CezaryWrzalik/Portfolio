import { IconProps } from '@shared/svgs/types';

export const IconToStart = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY || '1em'} fill="none">
        <path
            d="M15.148 11.167V17h1.519V7h-1.519v4.167ZM8.052 17 7 15.946 10.943 12 7 8.054 8.055 7l3.94 3.946a1.49 1.49 0 0 1 0 2.108L8.052 17Z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
