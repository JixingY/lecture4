var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let counter = 0;
router.get('/hitcount', function(req, res, next) {
    counter ++;
    res.send(String(counter));
});

var posts = [
    {
        title: "An Example Post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus, lorem non varius consequat, ipsum magna vestibulum lectus, et fringilla tellus augue id nisl. Donec tempus est a hendrerit ornare.",
        tags: ["tag1","tag2","tag3"],
        date: new Date("1 JAN 1901"),
        upvotes: 9001
    },
    {
        title: "Another Example Post",
        content: "Proin convallis, urna nec consequat mattis, erat mauris volutpat neque, vitae facilisis enim est eu felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla in odio id lorem facilisis dapibus quis ac mi. Cras semper ipsum eu sem sodales dapibus.",
        tags: ["tag1","tag4"],
        date: new Date("2 JAN 1902"),
        upvotes: 42
    }
];

router.get('/posts', function(req, res, next) {
    res.json(posts);
});

//
router.post('/addpost', function(req, res, next) {
    if("title" in req.body && "content" in req.body && "tags" in req.body && "date" in req.body && "upvotes" in req.body) {
        posts.push(req.body);
        res.end();
    } else {
        res.sendStatus(400);
    }
});


router.get('/posthtml', function(req, res, next) {
    res.send(`<div class="post">
            <div class="votes">
                <button onclick="upvote(0)">+</button>
                <p><span class="count">0</span><br />votes</p>
                <button onclick="downvote(0)">-</button>
            </div>
            <div class="content">
                <h3><a href="#">sdfgsdfg</a></h3>
                <p>dadf</p>
                <span class="date">${new Date().toLocaleString()}</span>
            </div></div>
        `);
});


module.exports = router;
