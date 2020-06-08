const init = (connection) => {

    const create = async(data) =>{
        const conn = await connection
        await conn.query('insert into locations(lat,lng,street_id,city_id,pav_type) values(?,?,?,?,?)',[...data])
    }

    const updatePavType = async(pavType, dataId) => {
        const conn = await connection
        //await conn.query('update streets set city_id = ?,  pav_type = ?, name = ? where id = ?', [...data, id])
        await conn.query('update locations set pav_type = ? where lat = ? and lng = ? and street_id = ? and city_id = ?',[pavType, ...dataId])
    }

    const remove = async(dataId) => {
        const conn = await connection
        await conn.query('delete from locations where lat = ? and lng = ? and street_id = ? and city_id = ? limit 1',[...dataId])
    }

    const findAllByStreet = async(streetId) => {
        const conn = await connection
        const [res] = await conn.query('select * from locations where street_id = ?',[streetId])
        return res
    }

    const findAllByCity = async(cityId) => {
        const conn = await connection
        const [res] = await conn.query('select * from locations where city_id = ?',[cityId])
        return res
    }

    const findAllByCityAndStreet = async(cityId, streetId) => {
        const conn = await connection
        const [res] = await conn.query('select * from locations where city_id = ? and street_id = ?',[cityId,streetId])
        return res
    }

    return{
        create,
        updatePavType,
        remove,
        findAllByCity,
        findAllByCityAndStreet,
        findAllByStreet
    }

}

module.exports =  init