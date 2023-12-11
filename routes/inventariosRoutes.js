"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventariosController_1 = require("../controllers/inventariosController");
class InventarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/mostrarTodosUsuarios/',(req,res) => res.send('probando usuarios'));
        this.router.get('/MostrarTodasinventarios/', inventariosController_1.inventariosController.mostrar_todos_inventarios);
        this.router.put('/actualizarInventario/:stock', inventariosController_1.inventariosController.actualizarInventario);
        this.router.delete('/eliminarInventario/:stock', inventariosController_1.inventariosController.eliminarInventario);
        this.router.post('/createInventario/', inventariosController_1.inventariosController.createInventario);
    }
}
const inventariosRoutes = new InventarioRoutes();
exports.default = inventariosRoutes.router;
