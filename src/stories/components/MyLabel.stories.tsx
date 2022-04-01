import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

//! 1º  !!!!!!!!!!!!!!
//! 1º debo tener una exportacion por defecto
export default {
	title: 'UI/MyLabel', //Aca los agrupo por carpetas
	component: MyLabel,
	argTypes: {
		// el argTypes se usa para indicar Como quiero que historybook trate las historias de mi componente -> para cambiar los radio buttons por un select por ejemplo en los valores a elegir
		size: {
			control: 'select',
			backgroundColor: { control: 'color' },
			// options: ['normal', 'h1', 'h2', 'h3'],
		},
	},
} as ComponentMeta<typeof MyLabel>;

//! 2º  !!!!!!!!!!!!!!
//! 2º  Creo un template para el componente (que no es otra cosa que un Functional Component) poniendo esto: ComponentStory<typeof MyLabel>      typescript ya sabe de que tipo son los args -> MyLabelProps
const Template: ComponentStory<typeof MyLabel> = args => <MyLabel {...args} />;

//! 3º  !!!!!!!!!!!!!!
//! 3º  Creo las paginas que quiero exportar -> (en realidad creo una copia de ese template rompiendo la referencia que javascript tiene con los objetos)
export const Basic = Template.bind({});

//! 4º  !!!!!!!!!!!!!!
//! 4º  Le agrego los valores que quiero que se muestren en el storybook por DEFECTO
Basic.args = {
	label: 'Label por Defecto',
	size: 'normal',
	allCaps: false, // si esta en true -> capitalizar toda la palabra
};

export const AllCaps = Template.bind({});
AllCaps.args = {
	size: 'normal',
	allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
	size: 'normal',
	color: 'secondary', // "primary" | "secondary" | "tertiary"
};

export const Tertiary = Template.bind({});
Tertiary.args = {
	size: 'normal',
	color: 'tertiary',
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
	fontColor: '#ff0000', // Cualquier color en string # FF FF FF
	size: 'h1',
};
