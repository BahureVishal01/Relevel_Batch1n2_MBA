/**
 * I will have the logic to transform the object
 */

exports.userResponse = (users) => {
    usersResponse = [];

    users.forEach(user => {
        usersResponse.push({
            _id: user._id,
            name: user.name,
            userId: user.userId,
            email: user.email,
            address: user.address,
            age: user.age,
            userType: user.userType
        });
    })

    return usersResponse
}

exports.userSigninResponse = (user, token) => {
    usersResponse = {
        name: user.name,
        userId: user.userId,
        address: user.address,
        age: user.age,
        userType: user.userType,
        accessToken: token
    };
    return usersResponse
}