import { IconProps } from '@shared/svgs/types';

export const IconSend = ({ fill, sizeY }: IconProps) => (
    <svg width={'1em'} height={sizeY ? sizeY : '1em'} fill="none">
        <path
            d="M4.963 8.446a1.333 1.333 0 0 0-.577 2.225l2.275 2.272v4.39h4.395l2.29 2.287a1.324 1.324 0 0 0 1.279.348 1.319 1.319 0 0 0 .946-.92l4.423-15.034L4.963 8.446Zm.37 1.282L16.685 6.38l-8.69 8.676v-2.666L5.333 9.728Zm8.96 8.95L11.61 16H8.942l8.689-8.681-3.338 11.358Z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
