const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("we have been hit!");
    res.json({ 
        msg: "success", 
        status: 200, 
        data: { users: "Victor", title: "Student"}
    });
});
router.get("/isActive", (req, res) => {
    console.log("we have been hit!");
    res.json({ 
        msg: "success", 
        status: 200, 
        data: { active: true }
    });
});


router.put("/putexample", (req, res) => {
    console.log(req.body);
    const id = req.body.id
    res.json({ 
        msg: "success", 
        status: 200, 
        data: { id: id}
    });
});

router.post("/queryString", (req, res) => {
    console.log(req.query);
    res.json(req.query);
});

router.patch("/parameter/:hash/:name", (req, res) => {
    console.log(req.params);
    res.json({msg: "success"})
});

//NOTE: Personal practice


router.get("/whoisme", (req, res) => {
    console.log("my body");
    res.json({
        height: "66inches",
        weight: "150lb",
        gender: "male"
    })
})

router.put("/liketotravel", (req, res) => {
    console.log(res.body)
    const asia = req.body.asia;
    const europe = req.body.europe
    res.json({
        status: 200,
        data: { Asia: asia, Europe: europe}
    })
})

router.patch("/parameter/:first/:last/:age/:from", (req, res) => {
    console.log(req.params);
    res.json({msg: "success"})
});

router.post("/query", (req, res) => {
    console.log(req.query);
    res.json(req.query);
});

module.exports = router;