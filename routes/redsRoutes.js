"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const redsController_1 = require("../controllers/redsController");
class RedsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/mostrarTodosUsuarios/',(req,res) => res.send('probando usuarios'));
        this.router.post('/crearred/', redsController_1.redsController.createRed);
        this.router.get('/MostrarTodasred/', redsController_1.redsController.mostrar_todos_red);
        this.router.put('/actualizarRed/:nombre', redsController_1.redsController.actualizarRed);
        this.router.delete('/eliminarRed/:nombre', redsController_1.redsController.eliminarRed);
    }
}
const redsRoutes = new RedsRoutes();
exports.default = redsRoutes.router;
