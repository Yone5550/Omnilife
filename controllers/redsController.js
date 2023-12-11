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
exports.redsController = void 0;
const database_1 = __importDefault(require("../database")); //acceso a la base de datos
class RedsController {
    createRed(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const resp = yield database_1.default.query("INSERT INTO red set ?", [req.body]);
            console.log(resp);
            res.json(resp);
            //res.json(null);
        });
    }
    mostrar_todos_red(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM red');
            res.json(respuesta);
        });
    }
    //aqui va el crud    
    actualizarRed(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            //console.log(req.params);
            console.log(nombre);
            const resp = yield database_1.default.query("UPDATE usuarios set ? WHERE nombre = ?", [req.body, nombre]);
            res.json(resp);
            //res.json(null)    CHECAR QUE QUIERE ACTUALIZAR LA quincena,puntos TAMBIEN;
        });
    }
    eliminarRed(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM usuarios WHERE nombre = ${nombre}`);
            res.json(resp);
        });
    }
}
exports.redsController = new RedsController();
