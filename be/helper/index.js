const response = (res, result, status, message, error) => {
    res.status(status).json({
        status : `Success!`,
        code : status || 200,
        data : result,
        message : message || null,
        error : error || null
    })
}

const handleURLNotFound = (req, res, next) => {
    res.status(404)
    res.json({
        message : `URL NOT FOUND`
    })
}

const errorHandling = (err, req, res, next) => {
    const statusCode = err.status
    const message = err.message
    response(res, null, statusCode, message)
}

module.exports = {
    response,
    handleURLNotFound,
    errorHandling
}