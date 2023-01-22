import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../styles/globals.css';
import 'material-symbols/index.css';
import { Icon, IconSymbol } from '../components/Icon';
import { Grade, IconKind, OpticalSize, Weight } from '../components/Icon/types';
import { EnumDeclaration, EnumMember, EnumType } from 'typescript';

function adapterEnumToArgType(Enumerable: object, defaultValue?: string): any {
	return {
		defaultValue,
		options: Object.values(Enumerable).filter((x) => typeof x === 'string'),
		mapping: Enumerable,
		control: { type: 'select' },
	};
}

export default {
	title: 'Example/Icon',
	component: Icon,
	argTypes: {
		icon: adapterEnumToArgType(IconSymbol),
		kind: adapterEnumToArgType(IconKind, 'Rounded'),
		isFill: { type: 'boolean', defaultValue: undefined },
		grade: adapterEnumToArgType(Grade, 'Middle'),
		weight: adapterEnumToArgType(Weight, 'Regular'),
		opticalSize: adapterEnumToArgType(OpticalSize, 'Medium'),
	},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = function Template(args: any) {
	return <Icon {...args} />;
};

export const RoundedHome = Template.bind({});
RoundedHome.args = { icon: 'home', kind: 'rounded' };

export const RoundedFilledHome = Template.bind({});
RoundedFilledHome.args = { icon: 'home', kind: 'rounded', isFill: true };

export const OutlinedHome = Template.bind({});
OutlinedHome.args = { icon: 'home', kind: 'outlined' };

export const OutlinedFillHome = Template.bind({});
OutlinedFillHome.args = { icon: 'home', kind: 'outlined', isFill: true };

export const SharpHome = Template.bind({});
SharpHome.args = { icon: 'home', kind: 'sharp' };

export const SharpFilledHome = Template.bind({});
SharpFilledHome.args = { icon: 'home', kind: 'sharp', isFill: true };
