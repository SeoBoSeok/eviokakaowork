var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    let result = "";
    try {
        result = await axios.get("https://api.kakaowork.com/v1/conversations.list", {
            headers: {
                'Authorization': `Bearer ${process.env.KAKAOAPIKEY}`
            }
        });
        res.json(result.data);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
