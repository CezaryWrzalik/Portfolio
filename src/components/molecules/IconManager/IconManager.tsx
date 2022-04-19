import * as Icons from '@shared/svgs';
import { IconWrapper } from './IconManager.styled';
import React from 'react';
import { ThemeContext } from 'styled-components';
import { ColorType, IconName } from '@@types/CommonTypes';

export interface IIconManagerProps {
	center?: boolean;
	fill?: ColorType[];
	isActive?: boolean;
	isLinearElement?: boolean;
	name: IconName;
	onClick?: () => void;
	rotate?: number;
	size: number;
	sizeY?: number;
}

export const IconManager: React.FC<IIconManagerProps> = ({
	center,
	fill,
	isActive,
	isLinearElement,
	name,
	rotate,
	size,
	sizeY,
	...rest
}) => {
	const Icon = Icons[name || 'IconClose'];
    const colors: { [key in ColorType]: string } =
    React.useContext(ThemeContext).colors.icons;
    const iconColor = fill && fill.map((item) => colors[item]);

	return (
		<IconWrapper
				center={center}
				rotate={rotate}
				size={size}
				as={isLinearElement ? 'span' : 'div'}
				{...rest}
		>
				<Icon fill={iconColor} sizeY={sizeY} />
		</IconWrapper>
);
};