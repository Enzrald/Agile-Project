const express = require('express');
const bodyParser = require('body-parser');
const Emmployee = require('../../models/Employee ');
const router = express.Router();


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/addStaff', (req, res) => {
    const { id, password, role, name, phone } = req.body;
    console.log(req.body);

    try {
        const employee = new Emmployee({ id: id, password: password , role: role, name: name , phone: phone });
        employee.save().then(() => { console.log(req.body); });
    } catch (err) {
        res.status(422).send(err.message);
    }

});


module.exports = router;