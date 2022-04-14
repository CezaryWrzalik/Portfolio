import { IconProps } from 'src/shared/svgs/types';

export const IconTick = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY ? sizeY : '1em'} fill="none">
        <path
            d="M9.684 17a2.032 2.032 0 0 1-1.441-.596L5 12.97l.96-.961 3.243 3.402a.68.68 0 0 0 .96 0L18.5 7l.96.96-8.335 8.444A2.033 2.033 0 0 1 9.684 17Z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
