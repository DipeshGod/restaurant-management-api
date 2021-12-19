"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDocRouter = void 0;
var express_1 = require("express");
var router = (0, express_1.Router)();
exports.apiDocRouter = router;
router.get('/', function (_, res) {
    res.send({
        rootURL: 'http://restaurantmanagementapi-env.eba-eujhhwnw.ap-south-1.elasticbeanstalk.com/api',
        endpoints: {
            '/user': {
                method: 'GET',
                description: 'Get all users',
                POST: {
                    allowed: true,
                    body: {
                        name: 'string (required)',
                        password: 'string (required)',
                        role: 'string array (required)',
                    },
                },
            },
            '/auth/login': {
                method: 'POST',
                description: 'Login user',
                body: {
                    name: 'String',
                    password: 'String',
                },
            },
        },
    });
});
