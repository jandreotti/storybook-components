"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
//! 1º  !!!!!!!!!!!!!!
//! 1º debo tener una exportacion por defecto
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        // el argTypes se usa para indicar Como quiero que historybook trate las historias de mi componente -> para cambiar los radio buttons por un select por ejemplo en los valores a elegir
        size: {
            control: 'select',
            backgroundColor: { control: 'color' },
            // options: ['normal', 'h1', 'h2', 'h3'],
        },
    },
};
//! 2º  !!!!!!!!!!!!!!
//! 2º  Creo un template para el componente (que no es otra cosa que un Functional Component) poniendo esto: ComponentStory<typeof MyLabel>      typescript ya sabe de que tipo son los args -> MyLabelProps
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
//! 3º  !!!!!!!!!!!!!!
//! 3º  Creo las paginas que quiero exportar -> (en realidad creo una copia de ese template rompiendo la referencia que javascript tiene con los objetos)
exports.Basic = Template.bind({});
//! 4º  !!!!!!!!!!!!!!
//! 4º  Le agrego los valores que quiero que se muestren en el storybook por DEFECTO
exports.Basic.args = {
    label: 'Label por Defecto',
    size: 'normal',
    allCaps: false, // si esta en true -> capitalizar toda la palabra
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: 'normal',
    allCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: 'normal',
    color: 'secondary', // "primary" | "secondary" | "tertiary"
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    fontColor: '#ff0000',
    size: 'h1',
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    fontColor: '#FFFFFF',
    size: 'h1',
    backgroundColor: '#000000', // Cualquier color en string # FF FF FF
};
