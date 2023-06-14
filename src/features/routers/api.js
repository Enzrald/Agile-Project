const express = require('express');
const bodyParser = require('body-parser');
const Employee = require('../../models/Employee ');
const Product = require('../../models/Product');
const router = express.Router();


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/addStaff', (req, res) => {
    const { id, password, role, name, phone } = req.body;
    console.log(req.body);

    try {
        const employee = new Employee({ id: id, password: password, role: role, name: name, phone: phone });
        employee.save().then(() => { console.log(req.body); });
    } catch (err) {
        res.status(422).send(err.message);
    }

});

router.get('/getStaff', async (req, res) => {
    await Employee.find({})
        .then(result => {
            console.log(result);
            res.json(result);
        })
});

router.get('/:id/deleteStaff', (req, res) => {
    Employee.findOneAndRemove({ _id: req.params.id })
        .then(result => {
            console.log(result);
            res.json(result)
        })
})

router.post('/addProduct',(req, res) => {
    const {id, idCategory , name , price} = req.body;
    try {
        const product = new Product({ id: id, idCategory: idCategory, name: name, price: price });
        product.save().then(() => { console.log(req.body); });
    } catch (err) {
        res.status(422).send(err.message);
    }
    
});

router.get('/getProduct', async (req, res) => {
    await Product.find({})
        .then(result => {
            console.log(result);
            res.json(result);
        })
});

router.get('/:id/deleteProduct', (req, res) => {
    Product.findOneAndRemove({ _id: req.params.id })
        .then(result => {
            console.log(result);
            res.json(result)
        })
})


module.exports = router;