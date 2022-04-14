import { IconProps } from '@shared/svgs/types';

export const IconRight = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY || '1em'} fill="none">
        <path
            d="M10.052 17 9 15.946 12.943 12 9 8.054 10.055 7l3.94 3.946a1.49 1.49 0 0 1 0 2.108L10.052 17Z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
