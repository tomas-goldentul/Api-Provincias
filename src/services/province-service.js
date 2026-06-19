import ProvinciasRepository from '../repositories/province-repository.js';

export default class ProvinciasService {
    constructor() {
        this.ProvinciasRepository = new ProvinciasRepository();
    }

    getAll = async () => {
        return await this.ProvinciasRepository.getAll();
    }
    getById = async (id) => {
        return await this.ProvinciasRepository.getById(id);
    }
    create = async (name, full_name, latitude, longitude, display_order) => {
        if (!name || !full_name || latitude === undefined || longitude === undefined ) {
            throw new Error("Todos los campos son obligatorios ");
        }
       const existeProvinciaNombre = await this.ProvinciasRepository.getNombre(name);
       if(existeProvinciaNombre) {
        throw new Error("Ya existe una provincia con ese nombre");
       }
        return await this.ProvinciasRepository.create(name, full_name, latitude, longitude, display_order);
    }
 

}