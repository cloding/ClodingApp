const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Design = require("../models/Design");

router.post('/save-design', (req, res, next) => {
    let user = req.body.userId;
    let type = req.body.type;
    let designName = req.body.designName;
    let red = req.body.red;
    let green = req.body.green;
    let blue = req.body.blue;
    let image1 = {
        url: req.body.image1.url,
        active: req.body.image1.active,
        opacity: req.body.image1.opacity,
        hue: req.body.image1.hue,
        value: req.body.image1.value,
        x: req.body.image1.x,
        y: req.body.image1.y,
        scaleX: req.body.image1.scaleX,
        scaleY: req.body.image1.scaleY,
        rotation: req.body.image1.rotation
    };
    let image2 = {
        url: req.body.image2.url,
        active: req.body.image2.active,
        opacity: req.body.image2.opacity,
        hue: req.body.image2.hue,
        value: req.body.image2.value,
        x: req.body.image2.x,
        y: req.body.image2.y,
        scaleX: req.body.image2.scaleX,
        scaleY: req.body.image2.scaleY,
        rotation: req.body.image2.rotation
    };
    let text1 = {
        text: req.body.text1.text,
        x: req.body.text1.x,
        y: req.body.text1.y,
        fill: req.body.text1.fill,
        family: req.body.text1.family,
        size: req.body.text1.size,
        style: req.body.text1.style
    }
    let text2 = {
        text: req.body.text2.text,
        x: req.body.text2.x,
        y: req.body.text2.y,
        fill: req.body.text2.fill,
        family: req.body.text2.family,
        size: req.body.text2.size,
        style: req.body.text2.style
    }
    let text3 = {
        text: req.body.text3.text,
        x: req.body.text3.x,
        y: req.body.text3.y,
        fill: req.body.text3.fill,
        family: req.body.text3.family,
        size: req.body.text3.size,
        style: req.body.text3.style
    }

    let design = new Design({
        type,
        designName,
        red,
        green,
        blue,
        image1,
        image2,
        text1,
        text2,
        text3
    });
    design
        .save()
        .then((design) => {

            User.update(
                { _id: user },
                { $push: { tShirt: design } }
            )
                .then(user => res.json(user))
                .catch(err => next(err))
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/all-tShirt', (req, res, next) => {
    let userId = req.body.userId
    User
        .findById(userId)
        .populate('tShirt')
        .then(user => {
            res.json(user)
            console.log(user)
        })
        .catch(err => next(err))
})

router.post('/add-quantity', (req, res, next) => {
    let designId = req.body.designId
    let quantity = req.body.quantity
    Design
        .findByIdAndUpdate(designId, { quantity: quantity })
        .then(design => {
            res.json(design)
        })
        .catch(err => next(err))
})

router.post('/delete-design', (req, res, next) => {

    let user = req.body.userId;

    Design
        .findByIdAndDelete({ _id: req.body.id })
        .then(design => {
            User.update(
                { _id: user },
                { $pull: { tShirt: req.body.id } }
            )
                .then(user => res.json(user))
                .catch(err => next(err))
        })

        .catch(e => next(e));
});

router.get('/design/:id', (req, res, next) => {
    Design
        .findById(req.params.id)
        .then(theDesign => res.json(theDesign))
});


router.post('/edit-design', (req, res, next) => {
    let designId = req.body.designId
    let designName = req.body.designName;
    let red = req.body.red;
    let green = req.body.green;
    let blue = req.body.blue;
    let image1 = {
        url: req.body.image1.url,
        active: req.body.image1.active,
        opacity: req.body.image1.opacity,
        hue: req.body.image1.hue,
        value: req.body.image1.value,
        x: req.body.image1.x,
        y: req.body.image1.y,
        scaleX: req.body.image1.scaleX,
        scaleY: req.body.image1.scaleY,
        rotation: req.body.image1.rotation
    };
    let image2 = {
        url: req.body.image2.url,
        active: req.body.image2.active,
        opacity: req.body.image2.opacity,
        hue: req.body.image2.hue,
        value: req.body.image2.value,
        x: req.body.image2.x,
        y: req.body.image2.y,
        scaleX: req.body.image2.scaleX,
        scaleY: req.body.image2.scaleY,
        rotation: req.body.image2.rotation
    };
    let text1 = {
        text: req.body.text1.text,
        x: req.body.text1.x,
        y: req.body.text1.y,
        fill: req.body.text1.fill,
        family: req.body.text1.family,
        size: req.body.text1.size,
        style: req.body.text1.style
    }
    let text2 = {
        text: req.body.text2.text,
        x: req.body.text2.x,
        y: req.body.text2.y,
        fill: req.body.text2.fill,
        family: req.body.text2.family,
        size: req.body.text2.size,
        style: req.body.text2.style
    }
    let text3 = {
        text: req.body.text3.text,
        x: req.body.text3.x,
        y: req.body.text3.y,
        fill: req.body.text3.fill,
        family: req.body.text3.family,
        size: req.body.text3.size,
        style: req.body.text3.style
    }

    Design
        .findByIdAndUpdate(designId, { 
            designName,
            red,
            green,
            blue,
            image1,
            image2,
            text1,
            text2,
            text3
         })
        .then(design => {
            res.json(design)
        })
        .catch(err => next(err))
});


module.exports = router;