import { IconProps } from 'src/shared/svgs/types';

export const IconSelectArrow = ({ fill, sizeY }: IconProps) => (
    <svg
        width={'1em'}
        height={sizeY ? sizeY : '1em'}
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M6 9l6 6 6-6"
            stroke={(fill && fill[0]) || '#3A3E4E'}
            strokeWidth={1.5}
        />
    </svg>
);
