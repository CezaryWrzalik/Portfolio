import { IconProps } from '@shared/svgs/types';

export const IconNavigationPulseSurvey = ({ sizeY }: IconProps) => (
    <svg width="1em" height={sizeY || '1em'} viewBox="0 0 70 71" fill="none">
        <g
            clipPath="url(#IconNavigationPulseSurveyclip0)"
            filter="url(#IconNavigationPulseSurveyfilter0_d)"
        >
            <g clipPath="url(#IconNavigationPulseSurveyclip1)">
                <path
                    d="M58.1031 59.4397V38.4539H42.5172V27.877H23.3552V34.3895H7.76925V59.4397H2.4209V63.0157H63.451V59.4397H58.1031ZM23.3552 59.4396H11.3452V37.9655H23.3552V59.4396ZM38.9411 59.4395H26.9311V31.4529H38.9412L38.9411 59.4395ZM54.5271 59.4396H42.5172V42.0298H54.5271V59.4396Z"
                    fill="#F5F7FF"
                />
                <path
                    d="M25.9026 23.636L32.9376 21.3538L39.9726 23.636L39.9761 16.24L44.3204 10.2547L37.2877 7.96592L32.9375 1.98438L28.5874 7.9658L21.5547 10.2545L25.899 16.2399L25.9026 23.636ZM30.7973 11.0072L32.9375 8.06426L35.0777 11.0072L38.5379 12.1332L36.4004 15.0782L36.3987 18.7171L32.9374 17.5942L29.4761 18.7171L29.4744 15.0782L27.3368 12.1332L30.7973 11.0072Z"
                    fill="#F5F7FF"
                />
            </g>
        </g>
        <defs>
            <filter
                id="IconNavigationPulseSurveyfilter0_d"
                x="0.175781"
                y="0.984375"
                width="69.0312"
                height="69.0312"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dx="2" dy="3" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.466667 0 0 0 0 0.571585 0 0 0 0 1 0 0 0 0.3 0"
                />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                />
            </filter>
            <clipPath id="IconNavigationPulseSurveyclip0">
                <rect
                    width="61.0312"
                    height="61.0312"
                    fill="white"
                    transform="translate(2.17578 1.98438)"
                />
            </clipPath>
            <clipPath id="IconNavigationPulseSurveyclip1">
                <rect
                    width="61.0312"
                    height="61.0312"
                    fill="white"
                    transform="translate(2.41797 1.98438)"
                />
            </clipPath>
        </defs>
    </svg>
);
