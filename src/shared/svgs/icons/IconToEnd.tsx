import { IconProps } from '@shared/svgs/types';

export const IconToEnd = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY || '1em'} fill="none">
        <path
            d="M7 11.167V17h1.5V7H7v4.167ZM16.046 17l1.052-1.054L13.155 12l3.943-3.946L16.043 7l-3.94 3.946a1.491 1.491 0 0 0 0 2.108L16.046 17Z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
