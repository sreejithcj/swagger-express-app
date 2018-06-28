'use strict';
var express = require('express');
import { UserService } from '../services/user';

//Creates a new user
//POST http://localhost:5000/v1/users will invoke this
const createUser = (req, res) => {
    const { username, password, first_name, last_name, full_name } = req.body;
    return UserService.createUser(username, password, first_name, last_name, full_name)
    .then(user => {
        res.statusMessage = 'User created successfully';
        res.status(201).json({ userID: user });
    })   
}

module.exports = {
	createUser
};