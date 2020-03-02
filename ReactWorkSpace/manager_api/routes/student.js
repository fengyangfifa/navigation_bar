import express from 'express';
import Student from './../models/Student';
import md5 from 'blueimp-md5';
import formidable from 'formidable';
import config from './../src/config';
import {basename} from 'path';
import Sowing from "../models/Sowing";

const router = express.Router({});

const _getRandomString = (len) =>{
    len = len || 32;
    let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    let maxPos = $chars.length;
    let str = '';
    for (let i = 0; i < len; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
};

const _getRandomAge = (len) =>{
    len = len || 2;
    let $chars = '12345';
    let maxPos = $chars.length;
    let str = '';
    for (let i = 0; i < len; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
};

const _getAddress = ()=>{
    let addressArr = ['北京', '上海', '深圳', '南京', '天津', '杭州', '合肥', '武汉'];
    return addressArr[Math.floor(Math.random()* (addressArr.length-1))];
};

const _getRandomPhone = (len) =>{
    len = len || 32;
    let $chars = '123456789';
    let maxPos = $chars.length;
    let str = '153';
    for (let i = 0; i < len; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
};

const _getRandomNum = ()=>{
    let $chars = '123456789';
    let maxPos = $chars.length;
    let str = '';
    for (let i = 0; i < 3; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
};

/**
 *  管理员专用(测试)
 */
router.get('/stu/api/add', (req, res, next) => {
    let stuData = [];
    for(let i=0; i<100; i++){
        const reg_account = _getRandomString(6) + '@itlike.com';
        const user_name = _getRandomString(8);
        const user_age = _getRandomAge(2);
        const user_sex = Math.floor(Math.random()) === 0 ? '男':'女';
        const area = _getAddress();
        const phone = _getRandomPhone(8);
        const points = _getRandomNum(3);
        const reg_time = '2019-03-20';
        let student = new Student({
            reg_account : reg_account,
            user_name : user_name,
            user_age : user_age,
            user_sex : user_sex,
            area : area,
            phone : phone,
            points : points,
            reg_time : reg_time
        });
        stuData.push(student);
    }
    Student.insertMany(stuData,(err, result) => {
        if (err) {
            return next(err)
        }
        res.json({
            status_code: 200,
            result: '添加数据成功'
        });
    })
});

/**
 * 获取学生数据(所有)
 */
router.get('/stu/api/list', (req, res, next) => {
    // 1. 接收传递的参数
    let {page, pageSize} = req.query;
    page = Number.parseInt(page);
    pageSize = Number.parseInt(pageSize);
    console.log('------------------------------');
    console.log(page, pageSize);
    console.log('------------------------------');
    // 2. 查询数据
    Student.find().skip((page - 1) * pageSize).limit(pageSize).exec((err, students) => {
        if (err) {
            return next(err);
        }
        res.json({
            status_code: 200,
            result: students
        })
    });
});

/*
  获取记录的总数
*/
router.get('/stu/api/count', (req, res, next) => {
    Student.count((err, count) => {
        if (err) {
            return next(err);
        }
        res.json({
            status_code: 200,
            result: count
        });
    });
});

module.exports = router;