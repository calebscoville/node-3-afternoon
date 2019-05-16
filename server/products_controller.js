module.exports = {
    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.create_product()
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oopsadaisies! Somethin' went awry. Our engineers are now working on it this very minute."});
            console.log(err)
        });
    },

    getOne: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_product()
            .then( product => res.status(200).send( product ) )
            .catch(err => {
                res.status(500).send({errorMessage: "Oopsadaisies! Somethin' went awry. Our engineers are now working on it this very minute."});
                console.log(err)
            });
    },

    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.read.products()
        .then ( products => res.status(200).send( products ) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oopsadaisies! Somethin' went awry. Our engineers are now working on it this very minute."});
            console.log(err)
        });
    },

    update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.update_product()
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oopsadaisies! Somethin' went awry. Our engineers are now working on it this very minute."})
            console.log(err)
        });
    },

    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.delete_product()
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oopsadaisies! Somethin' went awry. Our engineers are now working on it this very minute."})
            console.log(err)
        });
    }
};