module.exports = {
    error:function(err){
        return{
            status:"ERROR",
            message:err
        };
    },
    success:function(dt,msg){
        return{
            status:"SUCCESS",
            data:dt,
            message:msg
        };
    }
}