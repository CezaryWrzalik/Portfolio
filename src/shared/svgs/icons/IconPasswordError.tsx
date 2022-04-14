import { IconProps } from '@shared/svgs/types';

export const IconPasswordError = ({ fill, sizeY }: IconProps) => (
    <svg width={'1em'} height={sizeY || '1em'} viewBox="0 0 16 16" fill="none">
        <circle
            cx={8}
            cy={8}
            r={5.083}
            stroke={(fill && fill[0]) || '#FF3131'}
            strokeWidth={0.5}
        />
        <g clipPath="url(#password_error_prefix__clip0)">
            <path
                d="M8.388 8.003l2.192-2.18a.264.264 0 000-.376.27.27 0 00-.38 0L8.01 7.625 5.8 5.415a.268.268 0 00-.38 0 .27.27 0 000 .38l2.209 2.21-2.217 2.204a.264.264 0 000 .376.27.27 0 00.38 0l2.215-2.202 2.201 2.202a.268.268 0 00.38 0 .27.27 0 000-.382l-2.2-2.2z"
                fill={(fill && fill[0]) || '#FF3131'}
            />
        </g>
        <defs>
            <clipPath id="password_error_prefix__clip0">
                <path
                    fill={(fill && fill[1]) || '#FFFFFF'}
                    transform="translate(5.333 5.333)"
                    d="M0 0h5.333v5.333H0z"
                />
            </clipPath>
        </defs>
    </svg>
);
