import { IconProps } from '@shared/svgs/types';

export const IconUpAndDown = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY ? sizeY : '1em'} fill="none">
        <path
            d="M15.946 10.437 12 6.49l-3.946 3.946L7 9.382l3.946-3.945a1.491 1.491 0 0 1 2.108 0L17 9.382l-1.054 1.055ZM15.946 13.437 12 17.381l-3.946-3.946L7 14.492l3.946 3.945a1.491 1.491 0 0 0 2.108 0L17 14.491l-1.054-1.054Z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
