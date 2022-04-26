/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
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
    /**
     * Color del fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, ...props }: MyLabelProps) => JSX.Element;
