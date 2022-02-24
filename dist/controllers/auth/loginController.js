"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var User_1 = require("../../models/User");
var jwt = __importStar(require("jsonwebtoken"));
var authValidator_1 = require("../../utils/validators/authValidator");
//function to validate hash to the user input
var validatePassword = function (encryptedPassword, checkString) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, bcryptjs_1.default.compare(checkString, encryptedPassword)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
//function to assign token to the user on successful login
var assignToken = function (user) {
    var token = jwt.sign({
        _id: user._id,
        restroObjectId: user.restaurant._id,
        role: user.role,
    }, process.env.TOKEN_SECRET);
    return token;
};
var loginController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, isValidPassword, token, _a, password, userWithoutPassword, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                //validate the request data
                return [4 /*yield*/, (0, authValidator_1.loginValidator)(req.body)];
            case 1:
                //validate the request data
                _b.sent();
                return [4 /*yield*/, User_1.User.findOne({
                        mobileNumber: req.body.mobileNumber,
                        restaurant: req.body.restaurant,
                    }).populate('restaurant')];
            case 2:
                user = _b.sent();
                //if user is not found
                if (!user) {
                    return [2 /*return*/, res.status(401).json({ msg: 'Invalid Credentials' })];
                }
                return [4 /*yield*/, validatePassword(user.password, req.body.password)];
            case 3:
                isValidPassword = _b.sent();
                //if password is not valid
                if (isValidPassword === false) {
                    return [2 /*return*/, res.status(401).json({ msg: 'Invalid Credentials' })];
                }
                token = assignToken(user);
                _a = user.toObject(), password = _a.password, userWithoutPassword = __rest(_a, ["password"]);
                res.json({
                    msg: 'login successfull',
                    token: token,
                    user: userWithoutPassword,
                });
                return [3 /*break*/, 5];
            case 4:
                err_1 = _b.sent();
                res.status(400).json({ err: err_1 });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.loginController = loginController;
