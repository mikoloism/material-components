export enum IconKind {
	Outline = 'outlined',
	Rounded = 'rounded',
	Sharp = 'sharp',
}
export type IconKindType = `${IconKind}` | IconKind;
export { IconSymbol, type IconSymbolType } from './symbol.enum';
