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
exports.createInventoryItemController = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var InventoryItem_1 = require("../../models/InventoryItem");
var RestockHistory_1 = require("../../models/RestockHistory");
var inventoryItemValidator_1 = require("../../utils/validators/inventoryItemValidator");
var createInventoryItemController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var item, session, newItem_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 6, , 7]);
                //1. validate request body
                return [4 /*yield*/, (0, inventoryItemValidator_1.createInventoryItemValidator)(req.body)];
            case 1:
                //1. validate request body
                _a.sent();
                return [4 /*yield*/, InventoryItem_1.InventoryItem.findOne({ itemName: req.body.itemName })];
            case 2:
                item = _a.sent();
                if (item) {
                    return [2 /*return*/, res.status(400).json({
                            message: 'Item already exists',
                        })];
                }
                return [4 /*yield*/, mongoose_1.default.startSession()];
            case 3:
                session = _a.sent();
                return [4 /*yield*/, session.withTransaction(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, InventoryItem_1.InventoryItem.create(req.body)];
                                case 1:
                                    newItem_1 = _a.sent();
                                    return [2 /*return*/, newItem_1];
                            }
                        });
                    }); })];
            case 4:
                _a.sent();
                //4. after creating the inventory item, also create restock history document for the item(it is also the first restock)
                return [4 /*yield*/, session.withTransaction(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, RestockHistory_1.RestockHistory.create({
                                        inventoryItem: newItem_1._id,
                                        vendor: newItem_1.vendor,
                                        inventoryCategory: newItem_1.inventoryCategory,
                                        quantity: newItem_1.quantity,
                                        unitRate: newItem_1.unitRate,
                                    })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 5:
                //4. after creating the inventory item, also create restock history document for the item(it is also the first restock)
                _a.sent();
                session.endSession();
                //4. return the item
                res.status(201).json({ item: newItem_1 });
                return [3 /*break*/, 7];
            case 6:
                err_1 = _a.sent();
                res.status(400).json({ err: err_1 });
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.createInventoryItemController = createInventoryItemController;
