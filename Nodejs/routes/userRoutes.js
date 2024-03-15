// userRoutes.js
const usersController = require('../controllers/usersController');

module.exports = (app) => {
    app.post('/api/users/create', usersController.register);
    // Agrega más rutas según sea necesario
};
