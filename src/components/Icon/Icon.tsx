import { IconElement, type ElementProps } from './Element';
import type { IconKindType, IconSymbolType } from './types';

function normalizeIconSymbols(symbol: IconSymbolType): string {
	return symbol.replace(/-/g, '_');
}

type Props = {
	icon: IconSymbolType;
	kind?: IconKindType;
} & ElementProps;

export default function IconComponent(props: Props): JSX.Element {
	const { icon, kind, grade, isFill, opticalSize, weight } = props;
	const iconName: string = normalizeIconSymbols(icon);

	return (
		<IconElement
			className={`material-symbols-${kind}`}
			grade={grade}
			isFill={isFill}
			opticalSize={opticalSize}
			weight={weight}>
			{iconName}
		</IconElement>
	);
}

const defaultProps: Omit<Props, 'icon'> = { kind: 'outlined' };
IconComponent.defaultProps = defaultProps;
