function addMockUser(req, res, next) {
    req.me = {
        id: '1',
        username: 'Robin Wieruch',
    };
    next();
}

function verifyToken(req, res, next) {
    //get auth header value
    const bearerHeader = req.headers['authorization'];

    //check if undefined
    if (typeof bearerHeader !== 'undefined') {
        // format - Authorization: bearer <token>
        //split on space to get token
        const bearer = bearerHeader.split(' ')
        //get token from array
        const bearerToken = bearer[1]
        //set token
        req.token = bearerToken
        next()
    } else {
        //forbidden
        res.sendStatus(403)
    }
}

module.exports = {addMockUser, verifyToken}