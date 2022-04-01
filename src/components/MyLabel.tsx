import React from 'react';
import './mylabel.css';

interface MyLabelProps {
	/**
	 * El texto que va a figurar en el label
	 */
	label?: string;

	/**
	 * El tamaño del label
	 */
	size?: 'normal' | 'h1' | 'h2' | 'h3';

	/**
	 * Transformar el texto todo a mayusculas
	 */
	allCaps?: boolean;

	/**
	 * Color del texto
	 */
	color?: 'primary' | 'secondary' | 'tertiary';

	/**
	 * Color del texto personalizado
	 */
	fontColor?: string;
}

export const MyLabel = ({
	label = 'No Label', // con esto lo que hago es que si no se pasa el label, le asigno un valor por defecto pero NO FIGURA EN EL STORYBOOK COMO VALOR SETEADO
	size = 'normal',
	allCaps = false,
	color = 'primary',
	fontColor = '',
	...props
}: MyLabelProps) => {
	return (
		<span className={`label ${size} text-${color}`} {...props} style={{ color: fontColor }}>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};
