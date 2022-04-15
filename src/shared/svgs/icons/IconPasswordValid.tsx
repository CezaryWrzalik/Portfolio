import { IconProps } from '@shared/svgs/types';

export const IconPasswordValid = ({ fill, sizeY }: IconProps) => (
    <svg width={'1em'} height={sizeY || '1em'} viewBox="0 0 16 16" fill="none">
        <circle
            cx={8}
            cy={8}
            r={5.083}
            stroke={(fill && fill[0]) || '#1D985E'}
            strokeWidth={0.5}
        />
        <path
            d="M10.644 6.08a.272.272 0 00-.385 0L6.996 9.343 5.742 8.088a.272.272 0 10-.385.386L6.803 9.92a.272.272 0 00.386 0l3.455-3.455a.272.272 0 000-.385z"
            stroke={(fill && fill[0]) || '#1D985E'}
        />
    </svg>
);
