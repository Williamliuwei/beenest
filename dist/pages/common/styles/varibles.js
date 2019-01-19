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
var react_native_1 = require("react-native");
var px = 1 / react_native_1.PixelRatio.get();
exports.colors = {
    grayBase: '#000',
    grayDarker: '#222',
    grayDark: '#333',
    gray: '#666',
    grayLight: '#999',
    grayLighter: '#ccc',
    grayLightest: '#E5E5E5',
    grayExtraLight: '#F5F5F5',
    brandPrimary: '#FFB000',
    brandSuccess: '#60C034',
    brandInfo: '#5bc0de',
    brandDanger: '#FF4646',
    brandWarning: '#FF8C28',
    bgBase: '#fff',
    bgGray: '#f4f4f4',
};
exports.fontSize = {
    base: 14,
    small: 12,
    tiny: 10,
    h0: 64,
    h0_1: 56,
    h0_2: 48,
    h0_3: 44,
    h1: 36,
    h2: 32,
    h2_1: 28,
    h3: 24,
    h3_1: 22,
    h4: 18,
    h5: 16,
};
exports.fontWeight = {
    light: '200',
    normal: 'normal',
    bold: 'bold',
};
exports.padding = {
    horizontalBase: 15,
    verticalBase: 20,
    verticalMiddle: 17,
    verticalSmall: 15,
    verticalXSmall: 12,
};
exports.margin = {};
exports.border = {
    width: 1 * px,
    color: exports.colors.grayLightest,
    radiusBase: 4,
    radiusLarge: 6,
    radiusSmall: 2,
};
exports.formControl = {
    labelHeight: 30,
    labelWidth: 90,
    labelMarginRight: 40,
};
exports.button = {
    paddingHorizontalLarge: 20,
    paddingVerticalLarge: 18,
    paddingHorizontalBase: exports.padding.horizontalBase,
    paddingVerticalBase: exports.padding.verticalSmall,
    paddingHorizontalSmall: 10,
    paddingVerticalSmall: 10,
};
function setVaribles(args) {
    exports.colors = __assign({}, exports.colors, (args && args.colors));
    exports.fontSize = __assign({}, exports.fontSize, (args && args.fontSize));
    exports.fontWeight = __assign({}, exports.fontWeight, (args && args.fontWeight));
    exports.padding = __assign({}, exports.padding, (args && args.padding));
    exports.margin = __assign({}, exports.margin, (args && args.margin));
    exports.border = __assign({}, exports.border, (args && args.border));
    exports.formControl = __assign({}, exports.formControl, (args && args.formControl));
    exports.button = __assign({}, exports.button, (args && args.button));
}
exports.setVaribles = setVaribles;
//# sourceMappingURL=varibles.js.map