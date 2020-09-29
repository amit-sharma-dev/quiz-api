exports.sendAccepted = function (res, data, message = null) {
    return res.status(200).send({
        status: true,
        status_code: 200,
        data: data,
        message: message ? message : res.__('accepted'),
        request_id: res.request_id
    });
};

exports.sendCreated = function (res, data, message = null) {
    return res.status(201).send({
        status: true,
        status_code: 201,
        data: data,
        message: message ? message : res.__('accepted'),
        request_id: res.request_id
    });
};

exports.sendBadRequest = function (res, err, message = null) {
    return res.status(400).send({
        status: false,
        status_code: 400,
        error: err,
        message: message ? message : res.__('bad_request'),
        request_id: res.request_id
    });
};

exports.sendUnauthorized = function (res, err, message = null) {
    return res.status(401).send({
        status: false,
        status_code: 401,
        error: err,
        message: message ? message : res.__('unauthorized'),
        request_id: res.request_id
    });
};

exports.sendForbidden = function (res, err, message = null) {
    return res.status(403).send({
        status: false,
        status_code: 403,
        error: err,
        message: message ? message : res.__('forbidden'),
        request_id: res.request_id
    });
};

exports.sendNotFound = function (res, err, message = null) {
    return res.status(404).send({
        status: false,
        status_code: 404,
        error: err,
        message: message ? message : res.__('not_found'),
        request_id: res.request_id
    });
};

exports.sendInternalServerError = function (res, err, message = null) {
    return res.status(500).send({
        status: false,
        status_code: 500,
        error: err,
        message: message ? message : res.__('server_error'),
        request_id: res.request_id
    });
};
