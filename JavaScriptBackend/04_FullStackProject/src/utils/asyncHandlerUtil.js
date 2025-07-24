// const ansyncHandler = ()=>{}
// const ansyncHandler = (func)=>{() => {}}
// const ansyncHandler = (func)=> () => {}

//with try catch
/*
const ansyncHandler = (func) => async (req, res, next)=> {
    try{
        await func(req, res, next)
    }catch(err){
        res.status(err.code || 500).json({
            success: false, message: err.message
        })
    }
}

export {ansyncHandler};
*/

//with promises
const ansyncHandler = (reqHandler) => {
    (req, res, next)=>{
        Promise.resolve(reqHandler(req, res, next))
        .catch((err)=> next(err));
    }
}

export {ansyncHandler};
