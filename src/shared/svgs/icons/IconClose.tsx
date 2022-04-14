import { IconProps } from 'src/shared/svgs/types';

export const IconClose = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY ? sizeY : '1em'} fill="none">
        <path
            d="M17 8.054 15.946 7 12 10.946 8.054 7 7 8.054 10.946 12 7 15.946 8.054 17 12 13.054 15.946 17 17 15.946 13.054 12 17 8.054Z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
