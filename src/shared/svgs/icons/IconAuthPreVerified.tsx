import { IconProps } from '@shared/svgs/types';

export const IconAuthPreVerified = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY || '1em'} viewBox="0 0 86 86" fill="none">
        <g>
            <path
                d="M85.0311 12.6836C83.7395 11.3919 81.6451 11.3919 80.3533 12.6836L26.7359 66.3012L5.64653 45.2117C4.35502 43.9198 2.26061 43.9198 0.968761 45.2117C-0.322921 46.5033 -0.322921 48.5976 0.968761 49.8894L24.3973 73.3179C25.6884 74.6091 27.7835 74.6094 29.075 73.3179L85.0311 17.3614C86.3227 16.0695 86.3227 13.9753 85.0311 12.6836Z"
                fill={(fill && fill[0]) || '#ffffff'}
            />
        </g>
        <defs>
            <clipPath id="clip0">
                <rect
                    width="86"
                    height="86"
                    fill={(fill && fill[0]) || '#ffffff'}
                />
            </clipPath>
        </defs>
    </svg>
);
