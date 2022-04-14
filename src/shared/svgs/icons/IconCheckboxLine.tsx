import { IconProps } from '@shared/svgs/types';

export const IconCheckboxLine = ({ fill, sizeY }: IconProps) => (
    <svg
        width="1em"
        height={sizeY ? sizeY : '1em'}
        viewBox="0 0 8 1"
        fill="none"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0.5C0 0.223858 0.179086 0 0.4 0H7.6C7.82091 0 8 0.223858 8 0.5C8 0.776142 7.82091 1 7.6 1H0.4C0.179086 1 0 0.776142 0 0.5Z"
            fill={(fill && fill[0]) || '#00135D'}
        />
    </svg>
);
