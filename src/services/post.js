import db from '../models'

export const getPostsService = () => new Promise(async(resolve,reject)=>{
    try {
        const response = await db.Post.findAll({
            raw:true,
            nest:true,
            include:[
                {model: db.Image, as:'images', attributes:['image']},
                {model: db.Attribute, as:'attributes', attributes:['price', 'acreage', 'published', 'hashtag']},
                {model: db.User, as:'user', attributes:['name', 'zalo', 'phone']}
            ],
            attributes: ['id', 'title', 'star', 'address', 'description']
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Get posts failed',
            response
        })
    } catch (error) {
        reject(error)
    }
})

