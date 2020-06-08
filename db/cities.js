const init = (connection) => {
    const create = async(city) => {
        const conn = await connection
        await conn.query('insert into cities (name) values (?)',[city])
    }

    const remove = async(id) => {
        const conn = await connection
        await conn.query('delete from cities where id = ? limit 1', [id])
    }

    const update = async(id,data) => {
        const conn = await connection
        await conn.query('update cities set name = ? where id = ?',[...data,id])
    } 

    const findAll = async() => {
        const conn = await connection
        const [results] = await conn.query('select * from cities order by name')
        return results
    }

    const findByName = async(name) => {
        const conn = await connection
        const [results] = await conn.query('select * from cities where name = ?',[name])
        return results
    }

    const findById = async(id) => {
        const conn = await connection
        const [results] = await conn.query('select * from cities where id = ?',[id])
        return results
    }

    return{
        create,
        remove,
        update,
        findAll,
        findByName,
        findById
    }
}
module.exports = init