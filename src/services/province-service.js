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
        if (!name || !full_name || latitude === undefined || longitude === undefined) {
            throw new Error("Todos los campos son obligatorios ");
        }
        if (name.length < 3) {
            throw new Error("El nombre de la provincia debe tener al menos 3 caracteres");
        }
        const existeProvinciaNombre = await this.ProvinciasRepository.getNombre(name);
        if (existeProvinciaNombre) {
            throw new Error("Ya existe una provincia con ese nombre");
        }
        return await this.ProvinciasRepository.create(name, full_name, latitude, longitude, display_order);
    }
    update = async (id, name, full_name, latitude, longitude, display_order) => {
        const provincia = await this.ProvinciasRepository.getById(id);
        if (!provincia) {
            throw new Error("La provincia no existe");
        }
        if (name.length < 3) {
            throw new Error("El nombre de la provincia debe tener al menos 3 caracteres");
        }
        const existeProvinciaNombre = await this.ProvinciasRepository.getNombre(name);
        if (existeProvinciaNombre && existeProvinciaNombre.id !== id) {
            throw new Error("Ya existe una provincia con ese nombre");
        }
        return await this.ProvinciasRepository.update(id, name, full_name, latitude, longitude, display_order);
    }
    delete = async (id) => {
        const provincia = await this.ProvinciasRepository.getById(id);
        if (!provincia) {
            throw new Error("La provincia con id " + id + " no existe");
        }
        return await this.ProvinciasRepository.delete(id);
    }
}