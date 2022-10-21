// create a reference to the model

let businessContactsModel = require('../models/user');

exports.businessContactsList = function(req, res, next) {  
    
    businessContactsModel.find((err, businessContactsList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('business/list', {
                title: 'Business Contacts', 
                BusinessContactsList  : businessContactsList,
                userName: req.user ? req.user.username : ''
            })
        }
    }).sort({lastName:1});
}

module.exports.displayAddPage = (req, res, next) => {

    let newUser = businessContactsModel();

    res.render('business/add_edit', {
        title: 'Add a new User',
        user: newUser,
        userName: req.user ? req.user.username : ''
    })          

}

module.exports.processAddPage = (req, res, next) => {

    let newUser = businessContactsModel({
        _id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        username: req.body.username
    });

    businessContactsModel.create(newUser, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(newUser)
            res.redirect('/business/list');
        }
    });
    
}

module.exports.displayEditPage = (req, res, next) => {
    
    let id = req.params.id;

    businessContactsModel.findById(id, (err, userToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('business/add_edit', {
                title: 'Edit User', 
                user: userToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {

    let id = req.params.id

    let updatedUser = businessContactsModel({
        _id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        username: req.body.username
    });

    businessContactsModel.updateOne({_id: id}, updatedUser, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/business/list');
        }
    });
}


module.exports.performDelete = (req, res, next) => {

    let id = req.params.id;


    businessContactsModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/business/list');
        }
    });
}
