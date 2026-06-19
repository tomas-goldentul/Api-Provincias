import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProvinceService from './../services/province-service.js'
const router = Router();
const currentService = new ProvinceService();

router.get('/', async (req, res) => {
    try {   
        const result = await currentService.getAll();
        if (!result) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error al obtener las provincias de la base de datos');
        }
        if (result.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).send('No hay provincias cargadas');
        }
        res.status(StatusCodes.OK).json(result);
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send( 'Error interno del servidor' );
    }

});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await currentService.getById(id);
        if (!result) {
            return res.status(StatusCodes.NOT_FOUND).send(`No se encontró la provincia con id ${id}`);
        }
        res.status(StatusCodes.OK).json(result);
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send( 'Error interno del servidor' );
    }
});

export default router;