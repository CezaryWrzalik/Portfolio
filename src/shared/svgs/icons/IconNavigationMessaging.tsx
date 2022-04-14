import { IconProps } from '@shared/svgs/types';

export const IconNavigationMessaging = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY || '1em'} viewBox="0 0 80 81" fill="none">
        <g filter="url(#IconConversationfilter0_d)">
            <path
                d="M49.25 39.3615H26.75C25.508 39.3615 24.5 40.3725 24.5 41.6181C24.5 42.8637 25.508 43.8746 26.75 43.8746H49.25C50.492 43.8746 51.5 42.8637 51.5 41.6181C51.5 40.3725 50.492 39.3615 49.25 39.3615ZM53.75 25.8222H22.25C21.008 25.8222 20 26.8331 20 28.0787C20 29.3243 21.008 30.3353 22.25 30.3353H53.75C54.992 30.3353 56 29.3243 56 28.0787C56 26.8331 54.992 25.8222 53.75 25.8222ZM38 1C18.1191 1 2 15.1441 2 32.5918C2 42.5636 7.27624 51.4409 15.5 57.2312V73.2099L31.2702 63.6127C33.4528 63.9739 35.6982 64.1837 38 64.1837C57.8833 64.1837 74 50.0396 74 32.5918C74 15.1441 57.8833 1 38 1ZM38 59.6706C35.372 59.6706 32.834 59.3637 30.3949 58.8424L19.8019 65.2284L19.9436 54.7625C11.8235 49.8636 6.5 41.7671 6.5 32.5918C6.5 17.6377 20.6029 5.51312 38 5.51312C55.3971 5.51312 69.5 17.6377 69.5 32.5918C69.5 47.546 55.3971 59.6706 38 59.6706Z"
                fill={(fill && fill[0]) || '#F5F7FF'}
            />
        </g>
        <defs>
            <filter
                id="IconConversationfilter0_d"
                x="0"
                y="0"
                width="80"
                height="80.2099"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
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
        </defs>
    </svg>
);
