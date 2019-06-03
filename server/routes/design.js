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
    let front = {
        image1: {
            url: req.body.front.image1.imageUrlFix,
            active: req.body.front.image1.active,
            x: req.body.front.image1.x,
            y: req.body.front.image1.y,
            opacity: req.body.front.image1.opacity,
            scaleX: req.body.front.image1.scaleX,
            scaleY: req.body.front.image1.scaleY,
            rotation: req.body.front.image1.rotation,
            hue: req.body.front.image1.hue,
            saturation: req.body.front.image1.saturation,
            value: req.body.front.image1.value
        },
        image2: {
            url: req.body.front.image2.imageUrlFix,
            active: req.body.front.image2.active,
            x: req.body.front.image2.x,
            y: req.body.front.image2.y,
            opacity: req.body.front.image2.opacity,
            scaleX: req.body.front.image2.scaleX,
            scaleY: req.body.front.image2.scaleY,
            rotation: req.body.front.image2.rotation,
            hue: req.body.front.image2.hue,
            saturation: req.body.front.image2.saturation,
            value: req.body.front.image2.value
        },
        image3: {
            url: req.body.front.image3.imageUrlFix,
            active: req.body.front.image3.active,
            x: req.body.front.image3.x,
            y: req.body.front.image3.y,
            opacity: req.body.front.image3.opacity,
            scaleX: req.body.front.image3.scaleX,
            scaleY: req.body.front.image3.scaleY,
            rotation: req.body.front.image3.rotation,
            hue: req.body.front.image3.hue,
            saturation: req.body.front.image3.saturation,
            value: req.body.front.image3.value
        },
        image4: {
            url: req.body.front.image4.imageUrlFix,
            active: req.body.front.image4.active,
            x: req.body.front.image4.x,
            y: req.body.front.image4.y,
            opacity: req.body.front.image4.opacity,
            scaleX: req.body.front.image4.scaleX,
            scaleY: req.body.front.image4.scaleY,
            rotation: req.body.front.image4.rotation,
            hue: req.body.front.image4.hue,
            saturation: req.body.front.image4.saturation,
            value: req.body.front.image4.value
        },
        text1: {
            text: req.body.front.text1.text,
            textFill: req.body.front.text1.textFill,
            textFamily: req.body.front.text1.textFamily,
            textSize: req.body.front.text1.textSize,
            textStyle: req.body.front.text1.textStyle,
            textRotation: req.body.front.text1.textRotation,
            textX: req.body.front.text1.textX,
            textY: req.body.front.text1.textY
        },
        text2: {
            text: req.body.front.text2.text,
            textFill: req.body.front.text2.textFill,
            textFamily: req.body.front.text2.textFamily,
            textSize: req.body.front.text2.textSize,
            textStyle: req.body.front.text2.textStyle,
            textRotation: req.body.front.text2.textRotation,
            textX: req.body.front.text2.textX,
            textY: req.body.front.text2.textY
        },
        text3: {
            text: req.body.front.text3.text,
            textFill: req.body.front.text3.textFill,
            textFamily: req.body.front.text3.textFamily,
            textSize: req.body.front.text3.textSize,
            textStyle: req.body.front.text3.textStyle,
            textRotation: req.body.front.text3.textRotation,
            textX: req.body.front.text3.textX,
            textY: req.body.front.text3.textY
        },
        text4: {
            text: req.body.front.text4.text,
            textFill: req.body.front.text4.textFill,
            textFamily: req.body.front.text4.textFamily,
            textSize: req.body.front.text4.textSize,
            textStyle: req.body.front.text4.textStyle,
            textRotation: req.body.front.text4.textRotation,
            textX: req.body.front.text4.textX,
            textY: req.body.front.text4.textY
        }
    };
    let back = {
        image1: {
            url: req.body.back.image1.imageUrlFix,
            active: req.body.back.image1.active,
            x: req.body.back.image1.x,
            y: req.body.back.image1.y,
            opacity: req.body.back.image1.opacity,
            scaleX: req.body.back.image1.scaleX,
            scaleY: req.body.back.image1.scaleY,
            rotation: req.body.back.image1.rotation,
            hue: req.body.back.image1.hue,
            saturation: req.body.back.image1.saturation,
            value: req.body.back.image1.value
        },
        image2: {
            url: req.body.back.image2.imageUrlFix,
            active: req.body.back.image2.active,
            x: req.body.back.image2.x,
            y: req.body.back.image2.y,
            opacity: req.body.back.image2.opacity,
            scaleX: req.body.back.image2.scaleX,
            scaleY: req.body.back.image2.scaleY,
            rotation: req.body.back.image2.rotation,
            hue: req.body.back.image2.hue,
            saturation: req.body.back.image2.saturation,
            value: req.body.back.image2.value
        },
        image3: {
            url: req.body.back.image3.imageUrlFix,
            active: req.body.back.image3.active,
            x: req.body.back.image3.x,
            y: req.body.back.image3.y,
            opacity: req.body.back.image3.opacity,
            scaleX: req.body.back.image3.scaleX,
            scaleY: req.body.back.image3.scaleY,
            rotation: req.body.back.image3.rotation,
            hue: req.body.back.image3.hue,
            saturation: req.body.back.image3.saturation,
            value: req.body.back.image3.value
        },
        image4: {
            url: req.body.back.image4.imageUrlFix,
            active: req.body.back.image4.active,
            x: req.body.back.image4.x,
            y: req.body.back.image4.y,
            opacity: req.body.back.image4.opacity,
            scaleX: req.body.back.image4.scaleX,
            scaleY: req.body.back.image4.scaleY,
            rotation: req.body.back.image4.rotation,
            hue: req.body.back.image4.hue,
            saturation: req.body.back.image4.saturation,
            value: req.body.back.image4.value
        },
        text1: {
            text: req.body.back.text1.text,
            textFill: req.body.back.text1.textFill,
            textFamily: req.body.back.text1.textFamily,
            textSize: req.body.back.text1.textSize,
            textStyle: req.body.back.text1.textStyle,
            textRotation: req.body.back.text1.textRotation,
            textX: req.body.back.text1.textX,
            textY: req.body.back.text1.textY
        },
        text2: {
            text: req.body.back.text2.text,
            textFill: req.body.back.text2.textFill,
            textFamily: req.body.back.text2.textFamily,
            textSize: req.body.back.text2.textSize,
            textStyle: req.body.back.text2.textStyle,
            textRotation: req.body.back.text2.textRotation,
            textX: req.body.back.text2.textX,
            textY: req.body.back.text2.textY
        },
        text3: {
            text: req.body.back.text3.text,
            textFill: req.body.back.text3.textFill,
            textFamily: req.body.back.text3.textFamily,
            textSize: req.body.back.text3.textSize,
            textStyle: req.body.back.text3.textStyle,
            textRotation: req.body.back.text3.textRotation,
            textX: req.body.back.text3.textX,
            textY: req.body.back.text3.textY
        },
        text4: {
            text: req.body.back.text4.text,
            textFill: req.body.back.text4.textFill,
            textFamily: req.body.back.text4.textFamily,
            textSize: req.body.back.text4.textSize,
            textStyle: req.body.back.text4.textStyle,
            textRotation: req.body.back.text4.textRotation,
            textX: req.body.back.text4.textX,
            textY: req.body.back.text4.textY
        }
    }

    let design = new Design({
        type,
        designName,
        red,
        green,
        blue,
        front, 
        back
    });
    design
        .save()
        .then((design) => {
            User.updateOne(
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
        })
        .catch(err => next(err))
})

router.post('/all-old-orders', (req, res, next) => {
    let userId = req.body.userId
    User
        .findById(userId)
        .populate('buy')
        .then(user => {
            res.json(user)
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
        .then(() => {
            User.updateOne(
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
        saturation: req.body.image1.saturation,
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
        saturation: req.body.image2.saturation,
        x: req.body.image2.x,
        y: req.body.image2.y,
        scaleX: req.body.image2.scaleX,
        scaleY: req.body.image2.scaleY,
        rotation: req.body.image2.rotation
    };
    let image3 = {
        url: req.body.image3.url,
        active: req.body.image3.active,
        opacity: req.body.image3.opacity,
        hue: req.body.image3.hue,
        value: req.body.image3.value,
        saturation: req.body.image3.saturation,
        x: req.body.image3.x,
        y: req.body.image3.y,
        scaleX: req.body.image3.scaleX,
        scaleY: req.body.image3.scaleY,
        rotation: req.body.image3.rotation
    };
    let image4 = {
        url: req.body.image4.url,
        active: req.body.image4.active,
        opacity: req.body.image4.opacity,
        hue: req.body.image4.hue,
        value: req.body.image4.value,
        saturation: req.body.image4.saturation,
        x: req.body.image4.x,
        y: req.body.image4.y,
        scaleX: req.body.image4.scaleX,
        scaleY: req.body.image4.scaleY,
        rotation: req.body.image4.rotation
    };
    let text1 = {
        text: req.body.text1.text,
        x: req.body.text1.x,
        y: req.body.text1.y,
        fill: req.body.text1.fill,
        family: req.body.text1.family,
        size: req.body.text1.size,
        style: req.body.text1.style,
        rotation: req.body.text1.rotation
    }
    let text2 = {
        text: req.body.text2.text,
        x: req.body.text2.x,
        y: req.body.text2.y,
        fill: req.body.text2.fill,
        family: req.body.text2.family,
        size: req.body.text2.size,
        style: req.body.text2.style,
        rotation: req.body.text2.rotation
    }
    let text3 = {
        text: req.body.text3.text,
        x: req.body.text3.x,
        y: req.body.text3.y,
        fill: req.body.text3.fill,
        family: req.body.text3.family,
        size: req.body.text3.size,
        style: req.body.text3.style,
        rotation: req.body.text3.rotation
    }
    let text4 = {
        text: req.body.text4.text,
        x: req.body.text4.x,
        y: req.body.text4.y,
        fill: req.body.text4.fill,
        family: req.body.text4.family,
        size: req.body.text4.size,
        style: req.body.text4.style,
        rotation: req.body.text4.rotation
    }

    Design
        .findByIdAndUpdate(designId, {
            designName,
            red,
            green,
            blue,
            image1,
            image2,
            image3,
            image4,
            text1,
            text2,
            text3,
            text4
        })
        .then(design => {
            res.json(design)
        })
        .catch(err => next(err))
});

router.post('/add-toPay', (req, res, next) => {
    let designId = req.body.designId
    let toPayOne = req.body.toPayOne
    Design
        .findByIdAndUpdate(designId, { price: toPayOne })
        .then(user => {
            res.json(user)
        })
        .catch(err => next(err))
})

router.post('/buy', (req, res, next) => {
    let userId = req.body.userId
    let arrDesign = req.body.arrDesign

    User.updateOne(
        { _id: userId },
        { $push: { buy: arrDesign } }
    )
        .then(() => {
            User.updateOne(
                { _id: userId },
                { $pullAll: { tShirt: arrDesign } }
            )
                .then(user => res.json(user))
                .catch(err => next(err))
        })
        .catch(err => next(err))
})

router.post('/move-to-cart', (req, res, next) => {
    let userId = req.body.userId
    let oldOrderId = req.body.oldOrderId

    User.updateOne(
        { _id: userId },
        { $push: { tShirt: oldOrderId } }
    )
        .then(user => res.json(user))
        .catch(err => next(err))
})

module.exports = router;