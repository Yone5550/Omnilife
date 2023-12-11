"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const platicasController_1 = require("../controllers/platicasController");
class PlaticasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosPlaticas/', platicasController_1.platicasController.mostrar_todos_platicas);
        this.router.post('/crearPlatica/', platicasController_1.platicasController.createPlatica);
        this.router.put('/actualizarPlatica/:id_platica', platicasController_1.platicasController.actualizarPlatica);
        this.router.delete('/eliminarPlatica/:id_platica', platicasController_1.platicasController.eliminarPlatica);
    }
}
const platicasRoutes = new PlaticasRoutes();
exports.default = platicasRoutes.router;
