function errorResponse(message) {
    return {
        success: false,
        message: message
    }
}

module.exports = errorResponse;