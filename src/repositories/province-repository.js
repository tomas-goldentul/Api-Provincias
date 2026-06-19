import Db from './db-pg.js';

export default class ProvinciasRepository {
    constructor() {
        this.db = new Db();
    }
    getAll = async () => {
        const sql = 'SELECT * FROM "Provinces"';
        return await this.db.queryAll(sql);
    }
}   