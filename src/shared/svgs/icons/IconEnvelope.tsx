import { IconProps } from '@shared/svgs/types';

export const IconEnvelope = ({ fill, sizeY }: IconProps) => (
    <svg
        width="1em"
        height={sizeY ? sizeY : '1em'}
        viewBox="0 0 157 80"
        fill="none"
    >
        <g
            filter="url(#prefix__filter0_d_envelope)"
            fill={(fill && fill[0]) || '#F5F7FF'}
        >
            <path d="M147.803 1.006a2.283 2.283 0 00-.175-.006H23.486A2.387 2.387 0 0021.1 3.218l-1.38 19.337a2.387 2.387 0 002.218 2.543 2.368 2.368 0 002.55-2.21l.441-6.16 56.63 29.364a2.391 2.391 0 002.137.029l60.574-29.236-3.639 50.96H21.099v-2.387a2.387 2.387 0 00-4.775 0v4.775a2.387 2.387 0 002.388 2.387h124.141a2.387 2.387 0 002.387-2.218l4.775-66.845a2.387 2.387 0 00-2.212-2.551zm-3.141 10.39l-61.97 29.907L25.298 11.54l.41-5.765h119.356l-.402 5.622z" />
            <path d="M40.197 41.582h-4.775a2.387 2.387 0 000 4.775h4.775a2.387 2.387 0 000-4.775zM27.664 41.582H4.387a2.387 2.387 0 000 4.775h23.277a2.387 2.387 0 000-4.775zM30.649 29.646H24.68a2.387 2.387 0 000 4.775h5.969a2.388 2.388 0 000-4.774zM13.91 29.646H9.16a2.387 2.387 0 000 4.775h4.75a2.387 2.387 0 000-4.774zM35.424 53.52H13.938a2.387 2.387 0 000 4.774h21.486a2.387 2.387 0 000-4.774z" />
        </g>
        <defs>
            <filter
                id="prefix__filter0_d_envelope"
                x={0}
                y={0}
                width={156.021}
                height={79.62}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dx={2} dy={3} />
                <feGaussianBlur stdDeviation={2} />
                <feColorMatrix values="0 0 0 0 0.466667 0 0 0 0 0.571585 0 0 0 0 1 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);
