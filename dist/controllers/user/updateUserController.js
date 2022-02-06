"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserController = void 0;
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var User_1 = require("../../models/User");
var userValidator_1 = require("../../utils/validators/userValidator");
var encryptPassword = function (password) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, bcryptjs_1.default.hash(password, 10)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var updateUserController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, encryptedPassword, err_1;
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 7, , 8]);
                //validate the request data
                return [4 /*yield*/, (0, userValidator_1.updateUserValidator)(req.body)];
            case 1:
                //validate the request data
                _e.sent();
                return [4 /*yield*/, User_1.User.findById(req.body.id)];
            case 2:
                user = _e.sent();
                if (!user) {
                    res.status(400).json({ msg: 'user doesnt exist' });
                }
                encryptedPassword = '';
                if (!req.body.password) return [3 /*break*/, 4];
                return [4 /*yield*/, encryptPassword(req.body.password)];
            case 3:
                encryptedPassword = _e.sent();
                _e.label = 4;
            case 4:
                if (!user) return [3 /*break*/, 6];
                user.name = ((_a = req.body.name) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || (user === null || user === void 0 ? void 0 : user.name.toLowerCase());
                user.mobileNumber = ((_b = req.body) === null || _b === void 0 ? void 0 : _b.mobileNumber) || user.mobileNumber;
                user.password =
                    encryptedPassword.length > 0 ? encryptedPassword : user === null || user === void 0 ? void 0 : user.password;
                user.role = ((_c = req.body) === null || _c === void 0 ? void 0 : _c.role) || user.role;
                user.salary = ((_d = req.body) === null || _d === void 0 ? void 0 : _d.salary) || 0;
                return [4 /*yield*/, user.save()];
            case 5:
                _e.sent();
                _e.label = 6;
            case 6:
                res.json({ msg: 'User updated successfully', user: user });
                return [3 /*break*/, 8];
            case 7:
                err_1 = _e.sent();
                res.status(400).json({ err: err_1 });
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.updateUserController = updateUserController;
