import { IconProps } from '@shared/svgs/types';

export const IconProfile = ({ fill, sizeY }: IconProps) => (
    <svg
        width="1em"
        height={sizeY ? sizeY : '1em'}
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M18.317 19.85H5.651c.021-1.184.329-2.718 1.11-4.015.897-1.492 2.423-2.685 4.968-2.685 2.55 0 4.178 1.2 5.193 2.712.866 1.29 1.282 2.809 1.395 3.988Z"
            stroke={(fill && fill[0]) || '#13161B'}
            strokeWidth={1.3}
            strokeLinejoin="round"
        />
        <circle
            cx={12.016}
            cy={8}
            r={2.85}
            stroke={(fill && fill[0]) || '#13161B'}
            strokeWidth={1.3}
        />
    </svg>
);
