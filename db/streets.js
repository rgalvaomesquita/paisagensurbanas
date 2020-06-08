
const init = (connection) => {
    const create = async(data) => {
        const conn = await connection
        await conn.query('insert into streets (city_id, pav_type, name) values(?, ?, ?)',[...data])
    }

    const remove = async(id) => {
        const conn = await connection
        await conn.query('delete from streets where id = ? limit 1', [id])
    }

    const update = async(id, data) => {
        const conn = await connection
        await conn.query('update streets set city_id = ?,  pav_type = ?, name = ? where id = ?', [...data, id])
    }

    const findAll = async() => {
        const conn = await connection
        const [results] = await conn.query("select * from streets")
        return results
    }

    const findById = async(id) => {
        const conn = await connection
        const [results] = await conn.query("select * from streets where id = ?", [id])
        return results
    }

    const findByCity = async(cityId) => {
        const conn = await connection
        const [results] = await conn.query("select * from streets where city_id = ?", [cityId])
        return results
    }

    const countPavTypeByCity = async(cityId,pavType) => {
        const conn = await connection
        const [results] = await conn.query("select count(id) from streets where city_id = ? and pav_type = ?", [cityId,pavType])
        return results
    }

    return{
        create,
        update,
        findAll,
        findById,
        findByCity,
        remove,
        countPavTypeByCity
    }
}

module.exports = init