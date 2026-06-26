import Db from './db-pg.js';
import LogHelper from '../helpers/validaciones-helper.js';
export default class ProvinciasRepository {
    constructor() {
        this.db = new Db();
    }

    getAll = async () => {
        try {
            const sql = 'SELECT * FROM "Provinces"';
            return await this.db.queryAll(sql);
        } catch (error) {
            LogHelper.logError(error); 
            throw error;              
        }
    }

    getById = async (id) => {
        try {
            const sql = 'SELECT * FROM "Provinces" WHERE id = $1';
            const values = [id];
            return await this.db.queryOne(sql, values);
        } catch (error) {
            LogHelper.logError(error);
            throw error;
        }
    }

    create = async (name, full_name, latitude, longitude, display_order) => {
        try {
            const sql = 'INSERT INTO public."Provinces" (name, full_name, latitude, longitude, display_order) VALUES ($1, $2, $3, $4, $5) RETURNING *';
            const values = [name, full_name, latitude, longitude, display_order];
            return await this.db.queryOne(sql, values);
        } catch (error) {
            LogHelper.logError(error);
            throw error;
        }
    }   

    getNombre = async (name) => {
        try {
            const sql = 'SELECT * FROM public."Provinces" WHERE name = $1';
            const values = [name];
            return await this.db.queryOne(sql, values);
        } catch (error) {
            LogHelper.logError(error);
            throw error;
        }
    }

    update = async (id, name, full_name, latitude, longitude, display_order) => {
        try {
            const sql = 'UPDATE public."Provinces" SET name = $1, full_name = $2, latitude = $3, longitude = $4, display_order = $5 WHERE id = $6 RETURNING *';
            const values = [name, full_name, latitude, longitude, display_order, id];
            return await this.db.queryOne(sql, values);
        } catch (error) {
            LogHelper.logError(error);
            throw error;
        }
    }

    delete = async (id) => {
        try {
            const sql = 'DELETE FROM public."Provinces" WHERE id = $1';
            const values = [id];
            return await this.db.queryOne(sql, values);
        } catch (error) {
            LogHelper.logError(error);
            throw error;
        }
    }
}