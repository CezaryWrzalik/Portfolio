import { IconProps } from '@shared/svgs/types';

export const IconLeft = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY || '1em'} fill="none">
        <path
            d="m13.382 17-3.945-3.946a1.49 1.49 0 0 1 0-2.108L13.382 7l1.055 1.054L10.494 12l3.946 3.946L13.382 17Z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
