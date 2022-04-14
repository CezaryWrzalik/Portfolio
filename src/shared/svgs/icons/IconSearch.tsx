import { IconProps } from '@shared/svgs/types';

export const IconSearch = ({ fill, sizeY }: IconProps) => (
    <svg width="1em" height={sizeY ? sizeY : '1em'} fill="none">
        <path
            className="icon-search__path"
            d="m20 19.059-4.17-4.17a6.668 6.668 0 1 0-.94.942L19.058 20l.941-.941Zm-9.32-3.054a5.327 5.327 0 1 1 5.325-5.326 5.333 5.333 0 0 1-5.326 5.326Z"
            fill={(fill && fill[0]) || '#13161B'}
        />
    </svg>
);
