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
    create = async (name, full_name, latitude, longitude, display_order) => {
        const sql = 'INSERT INTO public."Provinces" (name, full_name, latitude, longitude, display_order) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [name, full_name, latitude, longitude, display_order];
        return await this.db.queryOne(sql, values);
    }   
    getNombre = async (name) => {
        const sql = 'SELECT * FROM public."Provinces" WHERE name = $1';
        const values = [name];
        return await this.db.queryOne(sql, values);
    }
    update = async (id, name, full_name, latitude, longitude, display_order) => {
        const sql = 'UPDATE public."Provinces" SET name = $1, full_name = $2, latitude = $3, longitude = $4, display_order = $5 WHERE id = $6 RETURNING *';
        const values = [name, full_name, latitude, longitude, display_order, id];
        return await this.db.queryOne(sql, values);
    }
    delete = async (id) => {
        const sql = 'DELETE FROM public."Provinces" WHERE id = $1';
        const values = [id];
        return await this.db.queryOne(sql, values);
    }
}       