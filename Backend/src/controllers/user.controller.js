const Usuario = require('../models/user.modelo');
const { Role } = require('../models/roles.modelo');

const userCtrl = {
  crearUsuario: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const rolesFound = await Role.find({ name: 'user' });
      const user = new Usuario({
        username,
        email,
        password,
        roles: rolesFound.map((role) => role._id),
      });

      //salvar nuevo usuario
      const savedUser = await user.save();

      return res.status(200).json({
        _id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        roles: savedUser.roles,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getUsers: async (_, res) => {
    const users = await Usuario.find().populate('roles');
    res.json(users);
  },
};

module.exports = userCtrl;
