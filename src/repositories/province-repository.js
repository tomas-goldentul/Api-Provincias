import Db from './db-pg.js';

export default class ProvinciasRepository {
    constructor() {
        this.db = new Db();
    }
    getAll = async () => {
        const sql = 'SELECT * FROM "Provinces"';
        return await this.db.queryAll(sql);
    }
    getById = async (id) => {
        const sql = 'SELECT * FROM "Provinces" WHERE id = $1';
        const values = [id];
        return await this.db.queryOne(sql, values);
    }
}   