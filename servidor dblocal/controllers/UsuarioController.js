const models = require('../models/usuario');
//import models from '../models/usuario';
var bcrypt = require('bcryptjs');

module.exports = {
    add: async(req, res, next) => {
        try {
            req.body.clave = await bcrypt.hash(req.body.clave, 4);
            const reg = await models.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    list: async(req, res, next) => {
        try {
            const reg = await models.find();
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    query: async(req, res, next) => {
       try {
            const _id = req.params.id;
            const reg = await models.findOne({_id});
            if (!reg) {
                res.status(400).send({
                    message: 'El registro no existe'
                });
            } else {
                //res.status(200).json(reg);
                res.status(200).json(reg);
            }
        } catch (e) {
             res.status(500).send({
                 message: 'Ocurrió un error'
             });
             next(e);
        }
    },
    modify: async(req, res, next) => {
        try {
            const _id = req.params.id;
            /*let pas = req.body.clave;
            const reg0 = await models.findOne({ _id });
            if (pas != reg0.clave) {
                req.body.clave = await bcrypt.hash(req.body.clave, 4);
            }*/
            const reg = await models.findByIdAndUpdate(_id, req.body, {new: true});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error en modify'
            });
            next(e);
        }
    },
    activate: async(req, res, next) => {
        try {
            const _id = req.params.id;
            const reg = await models.findByIdAndUpdate(_id, {activo: true}, {new: true});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    deactivate: async(req, res, next) => {
        try {
            const _id = req.params.id;
            const reg = await models.findByIdAndUpdate(_id, {activo: false}, {new: true});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    login: async(req, res, next) => {
        try {
            const _id = req.body.id;
            let user = await models.findOne({ _id });
            if (user) {
                let match = await bcrypt.compare(req.body.clave, user.clave);
                if (match) {
                    console.log(user.rol);
                    res.status(200).json(user);
                } else {
                    res.status(401).send({
                        message: 'Password Incorrecto'
                    });
                }
            } else {
                res.status(404).send({
                    message: 'No existe el usuario'
                });
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    register: async (req, res) => {
        try {
            //console.log(req.body.id)
            const _id = req.body.id;
            //let user = await models.findOne({ where: { _id: req.body.id } });
            let user = await models.findOne({ _id });
            if (user) {
                return res.status(409).json({
                message: "Identificación ya existe!!"
                });
            }
            req.body.clave = await bcrypt.hash(req.body.clave, 4);
            const reg = await models.create(req.body);
            res.status(200).json(reg);
        } catch (err) {
          res.status(400).json({ err: err });
        }
    }
    // remove: async(req, res, next) => {
    //     try {
    //         const reg = await models.Usuario.findByIdAndDelete({ id: req.body.id });
    //         res.status(404).json(reg);
    //     } catch (e) {
    //         res.status(404).send({
    //             message: 'Ocurrió un error'
    //         });
    //         next(e);
    //     }
    // },
}