import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProvinceService from './../services/province-service.js'
const router = Router();
const currentService = new ProvinceService();

router.get('/', async (req, res) => {
    try {   
        const result = await currentService.getAll();
        if (!result) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error al obtener las provincias de la base de datos' });
        }
        if (result.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json('No hay provincias cargadas');
        }
        res.status(StatusCodes.OK).json(result);
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Error interno del servidor' });
    }

});


export default router;