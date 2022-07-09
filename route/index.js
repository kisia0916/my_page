const router = require("express").Router();

router.get("/",(req,res,next)=>{
    let data = {
        title:"マルバツオンライン"
    }
    res.render("test",data);
});
module.exports = router;