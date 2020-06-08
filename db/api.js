const db = require('./mysqldb')
const cities = require('./cities')(db)
const streets = require('./streets')(db)
const locations = require('./locations')(db)


const test = async() => {
    //await cities.create('apague2')
    //await cities.remove(6)
    //await cities.update(5,['apague att'])
    //const cits = await cities.findAll()
    //const cits = await cities.findByName('paulista')
    //const cits = await cities.findById(1)
    //console.log(cits.rows)
    const num_ruas_pav = await streets.countPavTypeByCity(1,1)
    console.log(num_ruas_pav)
    console.log(num_ruas_pav[0])
    console.log(num_ruas_pav[0]['count(id)'])

    //await streets.create([2,'','Avenida Rosa e Silva'])
    //await streets.update(887,[2,'','Avenida Conselheiro Rosa e Silva'])
    //const st = await streets.findAll()
    //const st = await streets.findById(885)
    //const st = await streets.findByCity(2)
    //console.log(st)
    //await streets.remove(887)
    //const count = await streets.countPavTypeByCity(1,3)
    //console.log(count)

    //await locations.create([-1,-1,31,2,1])
    //await locations.updatePavType(2,[-1,-1,31,2])
    //const loc = await locations.findAllByStreet(710)
    //console.log(loc)
    //await locations.remove([-1,-1,31,2])
    
}

test()