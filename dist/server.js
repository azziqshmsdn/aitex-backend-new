"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Node runtime environment
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
// Port, Host config
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '0.0.0.0';
// Express server
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Routes
(0, routes_1.default)(app);
// App listen
app.listen(PORT, HOST, () => {
    console.log(`Server listening on ${HOST}:${PORT}`);
});
exports.default = app;
//# sourceMappingURL=server.js.map