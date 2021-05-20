var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    res.json({
        "title": "결재요청 처리하기",
        "accept": "검토 결과 전송하기",
        "decline": "취소",
        "value":"eapproval_id=10",
        "blocks": [
            {
                "type": "label",
                "text": "검토결과 선택(필수)",
                "markdown": false
            },
            {
                "type": "select",
                "name": "sel_result",
                "required": true,
                "options": [
                    {
                         "text": "승인",
                         "value": "1"
                    },
                    {
                         "text": "반려",
                         "value": "2"
                    }
                ],
                "placeholder": "검토 결과를 선택해주세요"
            },
            {
                "type": "label",
                "text": "결과 선택 사유를 입력하세요(필수)",
                "markdown": false
            },
            {
                "type": "input",
                "name": "text_reason",
                "required": true,
                "placeholder": "사유를 입력해주세요(최대 1,000자)"
            }
        ]
     });
});

router.post('/', async (req, res, next) => {
    res.json({
        "title": "결재요청 처리하기",
        "accept": "검토 결과 전송하기",
        "decline": "취소",
        "value":"eapproval_id=10",
        "blocks": [
            {
                "type": "label",
                "text": "검토결과 선택(필수)",
                "markdown": false
            },
            {
                "type": "select",
                "name": "sel_result",
                "required": true,
                "options": [
                    {
                         "text": "승인",
                         "value": "1"
                    },
                    {
                         "text": "반려",
                         "value": "2"
                    }
                ],
                "placeholder": "검토 결과를 선택해주세요"
            },
            {
                "type": "label",
                "text": "결과 선택 사유를 입력하세요(필수)",
                "markdown": false
            },
            {
                "type": "input",
                "name": "text_reason",
                "required": true,
                "placeholder": "사유를 입력해주세요(최대 1,000자)"
            }
        ]
     });
});

module.exports = router;
