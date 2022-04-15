import { IconProps } from '@shared/svgs/types';

export const IconPlus = ({ fill, sizeY }: IconProps) => (
    <svg
        width="1em"
        height={sizeY ? sizeY : '1em'}
        viewBox="0 0 24 25"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.643 5a1 1 0 00-2 0v6.143H4.5a1 1 0 100 2h6.143v6.143a1 1 0 102 0v-6.143h6.143a1 1 0 000-2h-6.143V5z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
