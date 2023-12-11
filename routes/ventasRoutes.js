"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventasController_1 = require("../controllers/ventasController");
class VentasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/mostrarTodosUsuarios/',(req,res) => res.send('probando usuarios'));
        this.router.post('/crearVenta/', ventasController_1.ventasController.createVenta);
        this.router.get('/MostrarTodasventa/', ventasController_1.ventasController.mostrar_todos_venta);
        this.router.put('/actualizarVenta/:precio,cantidad,puntos', ventasController_1.ventasController.actualizarVenta);
        this.router.delete('/eliminarVenta/:numeroVenta', ventasController_1.ventasController.eliminarVenta);
    }
}
const ventasRoutes = new VentasRoutes();
exports.default = ventasRoutes.router;
