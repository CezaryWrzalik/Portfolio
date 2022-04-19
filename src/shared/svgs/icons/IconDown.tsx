import { IconProps } from '@shared/svgs/types';

export const IconDown = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY ? sizeY : '1em'} fill="none">
        <path
            d="M15.946 10 12 13.946 8.054 10 7 11.054 10.946 15a1.49 1.49 0 0 0 2.108 0L17 11.054 15.946 10Z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
