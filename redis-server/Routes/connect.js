const {Router} = require('express')
const router = Router();

router.get('/',(req,res)=>{
    res.json({"Status" :"Success "})
})




module.exports = router
