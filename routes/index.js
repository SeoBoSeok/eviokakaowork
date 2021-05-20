var express = require('express');
var router = express.Router();
const axios = require('axios');
const moment = require('moment');
require('moment-timezone');

moment.tz.setDefault("Asia/Seoul"); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', apiKey: process.env.KAKAOAPIKEY });
});

router.get('/info/:userEmail', function(req, res, next) {
  console.log(process.env.KAKAOAPIKEY);
  axios.get("https://api.kakaowork.com/v1/users.find_by_email?email=" + req.params.userEmail, {
    headers: {
        'Authorization': `Bearer ${process.env.KAKAOAPIKEY}`
    }
  }).then(result => {
    // console.log(JSON.stringify(result.data));
    res.render('info', {email: req.params.userEmail, apiKey: process.env.KAKAOAPIKEY, result: result.data});
  }).catch(error => next(error));
});

router.post('/info', async function(req, res, next) {
  let result, conversation, message;
  // try {
  //   result = await axios.get("https://api.kakaowork.com/v1/users.find_by_email?email=" + req.body.userEmail, {
  //     headers: {
  //         'Authorization': `Bearer ${process.env.KAKAOAPIKEY}`
  //     }
  //   });
  // } catch (error) {
  //   next(error);
  // }
  // try {
  //   result = await axios.get("https://api.kakaowork.com/v1/users.list", {
  //     headers: {
  //         'Authorization': `Bearer ${process.env.KAKAOAPIKEY}`
  //     }
  //   });
  // } catch (error) {
  //   next(error);
  // }
  // // console.log(result.data);
  // const userList = result.data.users.map(obj => {
  //   return obj.id
  // });
  // console.log(userList);
  // const userId = result.data.user.id;
  // console.log(userId);
  // conversation open
  // console.log(userList.join());
  // try {
  //   conversation = await axios.post("https://api.kakaowork.com/v1/conversations.open", {
  //     user_ids: userList
  //   } , {
  //     headers: {
  //         'Authorization': `Bearer ${process.env.KAKAOAPIKEY}`
  //     }
  //   });
  // } catch (error) {
  //   next(error);
  // }
  // console.log('conversation', conversation);
  // message
  // console.log(req.body);
  try {
    let messageData = {
      "conversation_id": 1229929,
      "text": "몰트 적립 신청서",
      "blocks":
      [
        {
          "type": "header",
          "text": "Header Sample",
          "style": "blue"
        },
        {
          "type": "text",
          "text": "text sample",
          "markdown": true
        },
        {
          "type": "divider"
        },
        {
          "type": "text",
          "text": "text sample",
          "markdown": true
        },
        {
          "type": "divider"
        },
        {
          "type": "image_link",
          "url": "https://t1.kakaocdn.net/kakaowork/resources/block-kit/imagelink/image4@3x.jpg"
        },
        {
          "type": "action",
          "elements": [
            {
              "type": "button",
              "text": "승인",
              "style": "primary",
              "action_name": "accept",
              "action_type": "submit_action",
              "value": "http://52.79.227.73/molts"
            },
            {
              "type": "button",
              "text": "반려",
              "style": "danger",
              "action_type": "submit_action",
              "value":"http://52.79.227.73/molts"
            }
          ]
        },
        {
          "type": "section",
          "content": {
            "type": "text",
            "text": "카카오엔터프라이즈의\n업무용메신저\n*카카오워크*",
            "markdown": true
          },
          "accessory": {
            "type": "image_link",
            "url": "https://t1.kakaocdn.net/kakaowork/resources/block-kit/section/7tangerin@3x.jpg"
          }
        },
        {
          "type": "context",
          "content": {
            "type": "text",
            "text": "[카카오 판교 오피스](http://kko.to/RRWQwZQj0)",
            "markdown": true
          },
          "image": {
            "type": "image_link",
            "url": "https://t1.kakaocdn.net/kakaowork/resources/block-kit/context/doc@3x.png"
          }
        },
        {
          "type": "description",
          "term": "일시",
          "content": {
            "type": "text",
            "text": moment().format("MM월DD일 HH시mm분ss초"),
            "markdown": false
          },
          "accent": true
        }
      ]
      // "blocks": [
      //   {
      //     "type": "header",
      //     "text": req.body.firstName,
      //     "style": "blue"
      //   },
      //   {
      //     "type": "text",
      //     "text": req.body.lastName,
      //     "markdown": true
      //   },
      //   {
      //     "type": "divider"
      //   },
      //   {
      //     "type": "text",
      //     "text": "text sample",
      //     "markdown": true
      //   },
      //   {
      //     "type": "divider"
      //   },
      //   {
      //     "type": "text",
      //     "text": "text sample",
      //     "markdown": true
      //   },
      //   {
      //     "type": "divider"
      //   },
      //   {
      //     "type": "text",
      //     "text": "text sample",
      //     "markdown": true
      //   },
      //   {
      //     "type": "divider"
      //   },
      //   {
      //     "type": "description",
      //     "term": "일시",
      //     "content": {
      //       "type": "text",
      //       "text": moment().format("MM월DD일 HH시mm분ss초"),
      //       "markdown": false
      //     },
      //     "accent": true
      //   }
      // ]
    };
    message = await axios.post("https://api.kakaowork.com/v1/messages.send", messageData , {
      headers: {
          'Authorization': `Bearer ${process.env.KAKAOAPIKEY}`
      }
    });
  } catch (error) {
    next(error);
  }
  console.log(message.data);
  res.json(message.data);
  // res.send(result.data);
});

module.exports = router;
