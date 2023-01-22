import styled, { css } from 'styled-components';
import type { GradeType, OpticalSizeType, WeightType } from './types';

export type ElementProps = {
	isFill?: boolean;
	weight?: WeightType;
	opticalSize?: OpticalSizeType;
	grade?: GradeType;
};

export const IconElement = styled.span<ElementProps>`
	${(props) => css`
		font-variation-settings: 'FILL' ${!!props.isFill === true ? 1 : 0},
			'wght' ${props.weight}, 'GRAD' ${props.opticalSize},
			'opsz' ${props.grade};
	`}
`;

const defaultProps: ElementProps = {
	isFill: false,
	weight: '400',
	grade: '0',
	opticalSize: '48',
};
IconElement.defaultProps = defaultProps;
