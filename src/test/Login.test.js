import {findUserByEmail,findUserByUserName} from '../model.managers/User.Model.Manager.js';
import { login } from '../controllers/Auth.Controller.js';
import { request } from 'express';

test('check if user_name is used ', async ()=>{
    const U_nameUsed = await findUserByEmail('toto@gmail.com');
    expect(U_nameUsed.exists).toBe(false);
    
});

test('check if user_name is used ', async ()=>{
    const U_nameUsed = await findUserByEmail('emiliosensuavictor@gmail.com');
    expect(U_nameUsed.exists).toBe(true);
    
});


