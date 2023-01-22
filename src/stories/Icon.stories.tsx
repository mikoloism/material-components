import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../styles/globals.css';
import 'material-symbols/index.css';
import { Icon } from '../components/Icon';

export default {
	title: 'Example/Icon',
	component: Icon,
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
