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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockInventoryItemController = void 0;
var inventoryItemValidator_1 = require("../../utils/validators/inventoryItemValidator");
var InventoryItem_1 = require("../../models/InventoryItem");
var RestockHistory_1 = require("../../models/RestockHistory");
var async_1 = __importDefault(require("async"));
var stockInventoryItemController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newItems_1, updateItems_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                //1. validate request body
                return [4 /*yield*/, (0, inventoryItemValidator_1.stockInventoryItemValidator)(req.body)];
            case 1:
                //1. validate request body
                _a.sent();
                newItems_1 = [];
                updateItems_1 = [];
                if (!(req.body.newItems.length > 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, InventoryItem_1.InventoryItem.insertMany(req.body.newItems)];
            case 2:
                newItems_1 = _a.sent();
                _a.label = 3;
            case 3:
                //3. update all the items in from the updateItems array
                async_1.default.eachSeries(req.body.updateItems, function (item, callback) {
                    InventoryItem_1.InventoryItem.findByIdAndUpdate(item.id, {
                        $set: {
                            measurementUnit: [item.measurementUnit],
                            quantity: item.quantity,
                            unitRate: item.unitRate,
                        },
                    }, { new: true }, function (err, updatedItem) {
                        if (err) {
                            return callback(err);
                        }
                        if (updatedItem !== null) {
                            updateItems_1.push(updatedItem);
                        }
                        callback(null);
                    });
                }, function (err) { return __awaiter(void 0, void 0, void 0, function () {
                    var restockHistory;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (err) {
                                    return [2 /*return*/, res.status(500).json({
                                            message: 'Error while updating inventory items',
                                            err: err,
                                        })];
                                }
                                restockHistory = new RestockHistory_1.RestockHistory({
                                    user: req.user._id,
                                    inventoryItem: __spreadArray(__spreadArray([], newItems_1, true), updateItems_1, true),
                                    paidTotal: req.body.paidTotal,
                                    cashPaid: req.body.cashPaid,
                                    vendor: req.body.vendor,
                                    cashRemaining: req.body.cashRemaining,
                                });
                                return [4 /*yield*/, restockHistory.save()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                res.status(201).json({});
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                res.status(400).json({ err: err_1 });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.stockInventoryItemController = stockInventoryItemController;
