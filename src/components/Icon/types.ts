export { IconSymbol, type IconSymbolType } from './symbol.enum';

export enum IconKind {
	Outline = 'outlined',
	Rounded = 'rounded',
	Sharp = 'sharp',
}
export type IconKindType = `${IconKind}` | IconKind;

export enum OpticalSize {
	Small = 20,
	Medium = 24,
	Large = 40,
	ExtraLarge = 48,
}
export type OpticalSizeType = `${OpticalSize}` | OpticalSize;

export enum Grade {
	Low = -25,
	Middle = 0,
	Hight = 200,
}
export type GradeType = `${Grade}` | Grade;

export enum Weight {
	Thin = 100,
	ExtraLight = 200,
	Light = 300,
	Regular = 400,
	Bold = 500,
	ExtraBold = 600,
	Heavy = 700,
}
export type WeightType = `${Weight}` | Weight;
