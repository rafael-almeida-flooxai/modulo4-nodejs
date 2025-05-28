module.expors = {

    user: (app, req, res) => {
        
        req.assert('name', 'O nome e obrigatorio').notEmpty();
        req.assert('email', 'O email esta invalido').notEmpty().isEmail();

        let errors = req.validationErrors();

        if (errors) {
            
            app.utils.error.send(err, req, res);
            return false;

        } else {

            return true;

        }
    }

}