import { IconProps } from '@shared/svgs/types';

export const IconRoundedClose = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY || '1em'} viewBox="0 0 24 24" fill="none">
        <path
            d="M14.195 15.138L12 12.943l-2.195 2.195-.943-.943L11.057 12 8.862 9.805l.943-.943L12 11.057l2.195-2.195.943.943L12.943 12l2.195 2.195-.943.943z"
            fill={(fill && fill[0]) || '#13161B'}
        />
        <path
            d="M12 20a8 8 0 118-8 8.009 8.009 0 01-8 8zm0-14.667A6.667 6.667 0 1018.667 12 6.674 6.674 0 0012 5.333z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
