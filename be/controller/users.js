const {response} = require('../helper')

let tempData = [
    {
        id : 1,
        name : 'user1',
        age : 21,
        role : 'user'
    },
    {
        id : 2,
        name : 'user2',
        age : 22,
        role : 'user'
    },
    {
        id : 3,
        name : 'user3',
        age : 23,
        role : 'user'
    },
    {
        id : 4,
        name : 'ifabula',
        age : 23,
        role : 'user'
    }
]

const getUser = (req, res, next) => {
    try {
        const {name, role} = req.body
        if (req.headers.UserID != 'ifabula' && req.headers.Scope != 'user') {
            res.json({
                responseCode : 401,
                responseMessage : "UNAUTHORIZED"
            })
        }
        let result
        for (let i = 0; i < tempData.length; i++) {
            if (tempData[i].name == name && tempData[i].role == role) {
                result = tempData[i]
            }
        }
        response(res, result, 200, 'User details', null)
    } catch (error) {
        console.log(error)
        next({ status : 500, message : 'Internal Server Error'})
    }
}

const postUser = (req, res, next) => {
    try {
        // const userId = req.headers.UserID
        // const scope = req.headers.Scope
        const {name, age, role} = req.body
        if (req.headers.UserID != 'ifabula' && req.headers.Scope != 'user') {
            res.json({
                responseCode : 401,
                responseMessage : "UNAUTHORIZED"
            })
        }
        const newData = {
            id : tempData.length+1,
            name : name, 
            age : age, 
            role : role
        }
        const currentDataLength = tempData.length
        tempData.push(newData)
        if (tempData.length > currentDataLength) {
            response(res, newData, 200, 'New User added', null)
        } else {
            res.json({
                responseCode : 400,
                responseMessage : 'Adding new user is failed'
            })
        }
    } catch (error) {
        console.log(error)
        next({ status : 500, message : 'Internal Server Error'})
    }
}

module.exports = {
    getUser,
    postUser
}