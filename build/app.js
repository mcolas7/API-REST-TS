"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const items_1 = require("./routes/items");
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(items_1.router);
// app.use(express.json());
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
