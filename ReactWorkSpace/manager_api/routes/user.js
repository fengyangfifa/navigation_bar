import express from 'express';
import User from './../models/User';
import md5 from 'blueimp-md5';
import formidable from 'formidable';
import config from './../src/config';
import {basename} from 'path';

const router = express.Router({});

const S_KEY = 'WaYjH1314.ItLikE.CoM';

/**
 *  管理员专用(测试)
 */
router.post('/user/api/add', (req, res, next) => {
    const user_name = req.body.user_name || '';
    const user_pwd = md5(req.body.user_pwd + S_KEY) || '';
    // 2. 操作数据库
    const user = new User({
        // 用户名
        user_name: user_name,
        // 密码
        user_pwd: user_pwd
    });

    user.save((err, result) => {
        if (err) {
            return next(err)
        }
        res.json({
            status_code: 200,
            result: '添加管理员成功'
        });
    })
});

/**
 * 用户名和密码登录
 */
router.post('/user/api/login', (req, res) => {
    // 1. 获取数据
    const user_name = req.body.user_name;
    const user_pwd = req.body.user_pwd;

    console.log('------------------');
    console.log(req.body);
    console.log('------------------');

    // 2. 查询数据
    User.findOne({user_name: user_name}, (err, user) => {
        if (err) {
            return next(err);
        }

        // 2.1 如果用户存在
        if(user !== null){
            // 2.2 判断密码
            if(user.user_pwd === user_pwd){
                res.json({
                    status_code: 200,
                    result: {
                        token: user._id,
                        user_name: user.user_name,
                        real_name: user.real_name,
                        icon_url: user.icon_url,
                        sex: user.sex,
                        phone: user.phone,
                        e_mail: user.e_mail,
                        join_time: user.join_time,
                        intro_self: user.intro_self,
                    }
                });
            }else {
                res.json({
                    error_code: 1,
                    result: '输入密码错误！'
                });
            }
        }else {
            res.json({
                error_code: 1,
                result: '输入口令不存在！'
            });
        }
    });
});

/**
 * 根据token(id)修改一条数据
 */
router.post('/user/api/edit', (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = config.upload_path;
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return next(err);
        }
        // 1. 处理表单字段
        const body = fields;
        // 1.1 根据id查询数据
        User.findById(body.token, (err, user) => {
            if (err) {
                return next(err);
            }
            // 1.2. 取出要修改的数据
            user.real_name = body.real_name;
            user.user_name = body.user_name;
            user.icon_url = body.icon_url || basename(files.icon_url.path);
            user.sex = body.sex;
            user.phone = body.phone;
            user.e_mail = body.e_mail;
            user.join_time = body.join_time;
            user.intro_self = body.intro_self;

            // 3. 保存
            /*
              因为内部有一个_id，
              所以不会新增数据，而是更新已有的数据
            */
            user.save((err, result) => {
                if (err) {
                    return next(err);
                }
                console.log(result);
                res.json({
                    status_code: 200,
                    result: {
                        token: result._id,
                        real_name: result.real_name,
                        user_name: result.user_name,
                        icon_url: result.icon_url,
                        phone: result.phone,
                        sex: result.sex,
                        e_mail: result.e_mail,
                        join_time: result.join_time,
                        intro_self: result.intro_self,
                    }
                })
            });
        });
    });


});

/**
 * 根据token(id)修改密码
 */
router.post('/user/api/reset', (req, res, next) => {
    // 1. 获取数据
    const token = req.body.token;
    const old_pwd = req.body.old_pwd;
    const new_pwd = req.body.new_pwd;

    // 1.1 根据id查询数据
    User.findById(token, (err, user) => {
        if (err) {
            return next(err);
        }
        if(user === null){
            res.json({
                error_code: 1,
                result: "当前用户不存在！"
            })
        }

        console.log(user.user_pwd, old_pwd);
        // 1.2. 取出散列密码对比
        if(user.user_pwd !== old_pwd){
            res.json({
                error_code: 1,
                result: "密码不正确！"
            })
        }
        user.user_pwd = new_pwd;
        // 1.3 保存
        user.save((err, result) => {
            if (err) {
                return next(err);
            }
            res.json({
                status_code: 200,
                result: "密码修改成功"
            })
        });
    });
});

module.exports = router;