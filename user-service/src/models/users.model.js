module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define('users', {
        email: {
            type: Sequelize.STRING,
            validate: { isEmail: {msg: "Email bạn nhập vào không hợp lệ"}}
        },
        password: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    })

    return Users;
};