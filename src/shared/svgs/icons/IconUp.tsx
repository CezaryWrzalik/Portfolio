import { IconProps } from '@shared/svgs/types';

export const IconUp = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY ? sizeY : '1em'} fill="none">
        <path
            d="M15.946 14.437 12 10.49l-3.946 3.946L7 13.382l3.946-3.945a1.49 1.49 0 0 1 2.108 0L17 13.382l-1.054 1.055Z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
