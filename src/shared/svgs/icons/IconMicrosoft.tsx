import { IconProps } from '@shared/svgs/types';

export const IconMicrosoft = ({ sizeY }: IconProps) => (
    <svg width="1em" height={sizeY || '1em'} viewBox="0 0 21 21">
        <path fill="#f25022" d="M1 1h9v9H1z" />
        <path fill="#00a4ef" d="M1 11h9v9H1z" />
        <path fill="#7fba00" d="M11 1h9v9h-9z" />
        <path fill="#ffb900" d="M11 11h9v9h-9z" />
    </svg>
);
