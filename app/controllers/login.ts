import { Router, Request, Response } from 'express';
import { mongodb } from './helpers/mongodb';
import * as myConfig from 'config';

let config: any = myConfig.get('Config');
var jwt = require("jwt-simple");

const router: Router = Router();

router.post("/api/doLogin", function (req, res) {
    if(req.body.username && req.body.password){
        mongodb.collection("users").findOne({
            username: req.body.username,
            password: req.body.password
        }).then((results) => {
            var userInfo = results;
            if(userInfo){
                var token = jwt.encode(userInfo, config.auth.jwtSecret);
                res.json({
                    success: true,
                    token: token
                });
            }else{
                res.json({
                    success: false,
                    message: 'Login fail.'
                });
            }
        }).catch((err) => {
            res.sendStatus(401);
        });
    }else{
        res.status(401);
    }
});

export const LoginController: Router = router;