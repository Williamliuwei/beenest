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
var varibles_1 = require("../../common/styles/varibles");
var px = 1 / react_native_1.PixelRatio.get();
var defaultWrapper = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: varibles_1.button.paddingHorizontalBase,
    paddingVertical: varibles_1.button.paddingVerticalBase,
    borderWidth: 1 * px,
    borderColor: varibles_1.border.color,
    borderRadius: varibles_1.border.radiusBase,
    backgroundColor: '#fff',
};
var defaultText = {
    fontSize: varibles_1.fontSize.base,
    color: varibles_1.colors.grayDark,
};
var primaryWrapper = __assign({}, defaultWrapper, { borderColor: varibles_1.colors.brandPrimary, backgroundColor: varibles_1.colors.brandPrimary });
var primaryText = __assign({}, defaultText, { color: varibles_1.colors.grayBase });
var dangerWrapper = __assign({}, defaultWrapper, { borderColor: varibles_1.colors.brandDanger, backgroundColor: varibles_1.colors.brandDanger });
var dangerText = __assign({}, defaultText, { color: varibles_1.colors.grayBase });
var warningWrapper = __assign({}, defaultWrapper, { borderColor: varibles_1.colors.brandWarning, backgroundColor: varibles_1.colors.brandWarning });
var warningText = __assign({}, defaultText, { color: varibles_1.colors.grayBase });
var successWrapper = __assign({}, defaultWrapper, { borderColor: varibles_1.colors.brandSuccess, backgroundColor: varibles_1.colors.brandSuccess });
var successText = __assign({}, defaultText, { color: varibles_1.colors.grayBase });
var infoWrapper = __assign({}, defaultWrapper, { borderColor: varibles_1.colors.brandInfo, backgroundColor: varibles_1.colors.brandInfo });
var infoText = __assign({}, defaultText, { color: varibles_1.colors.grayBase });
var disabledWrapper = __assign({}, defaultWrapper, { borderColor: varibles_1.colors.grayLightest, backgroundColor: varibles_1.colors.grayLightest });
var disabledText = __assign({}, defaultText, { color: varibles_1.colors.grayLight });
//# sourceMappingURL=buttons.js.map