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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventasController = void 0;
const database_1 = __importDefault(require("../database")); //acceso a la base de datos
class VentasController {
    createVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO ventas set ?", [req.body]);
            console.log(resp);
            res.json(resp);
            //res.json(null);
        });
    }
    mostrar_todos_venta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM ventas');
            res.json(respuesta);
        });
    }
    //checar si puedo mandar varios parametros ////
    actualizarVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { precio, cantidad, puntos } = req.params;
            //console.log(req.params);
            console.log(precio, cantidad, puntos);
            const resp = yield database_1.default.query("UPDATE ventas set ? WHERE precio,cantidad,puntos = ?", [req.body, precio, cantidad, puntos]);
            res.json(resp);
            //res.json(null);
        });
    }
    eliminarVenta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { numeroVenta } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM usuarios WHERE numeroVenta = ${numeroVenta}`);
            res.json(resp);
        });
    }
}
exports.ventasController = new VentasController();
