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

}