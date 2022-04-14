import { IconProps } from '@shared/svgs/types';

export const IconTableSort = ({ fill, sizeY }: IconProps) => (
    <svg
        width="1em"
        height={sizeY ? sizeY : '1em'}
        viewBox="0 0 9 14"
        fill="none"
    >
        <path
            d="M.77 4.866L4.473 1.14l3.703 3.727a.45.45 0 00.638 0 .457.457 0 000-.643L4.792.176a.449.449 0 00-.638 0L.132 4.224a.458.458 0 000 .643.45.45 0 00.638 0zM8.176 9.134L4.473 12.86.771 9.133a.45.45 0 00-.639 0 .457.457 0 000 .643l4.022 4.048a.449.449 0 00.638 0l4.022-4.048a.458.458 0 000-.643.45.45 0 00-.638 0z"
            fill={(fill && fill[0]) || '#8691A7'}
        />
    </svg>
);
