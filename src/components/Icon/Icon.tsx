import { IconElement, type ElementProps } from './Element';
import type { IconKindType, IconSymbolType } from './types';

function normalizeIconSymbols(symbol: IconSymbolType): string {
	return symbol.replace(/-/g, '_');
}

type Props = {
	icon: IconSymbolType;
	kind?: IconKindType;
} & ElementProps;

export default function IconComponent({ icon, kind }: Props): JSX.Element {
	const iconName: string = normalizeIconSymbols(icon);
	return (
		<IconElement className={`material-symbols-${kind}`}>
			{iconName}
		</IconElement>
	);
}

const defaultProps: Omit<Props, 'icon'> = { kind: 'outlined' };
IconComponent.defaultProps = defaultProps;
