import db from '../models'

export const getPricesService = () => new Promise(async(resolve, reject)=>{
    try {
        const response = await db.Price.findAll({
            raw:true,
            attributes: ['code', 'value', 'order']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? "Ok" : "Failed to get prices",
            response
        })
    } catch (error) {
        reject(error)
    }
})

// export const filter 