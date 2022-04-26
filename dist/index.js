"use strict";
//! Aca pongo los componentes que voy a usar en el storybook
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.Page = exports.Header = exports.MyLabel = void 0;
var MyLabel_1 = require("./components/MyLabel");
Object.defineProperty(exports, "MyLabel", { enumerable: true, get: function () { return MyLabel_1.MyLabel; } });
var Header_1 = require("./stories/Header");
Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return Header_1.Header; } });
var Page_1 = require("./stories/Page");
Object.defineProperty(exports, "Page", { enumerable: true, get: function () { return Page_1.Page; } });
//! Esto solo lo hago para evitar el error de typescript
var Button_1 = require("./stories/Button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.Button; } });
