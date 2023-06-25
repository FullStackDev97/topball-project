import {findUserByEmail,findUserByUserName} from '../model.managers/User.Model.Manager.js';

test('check if email is used ', async ()=>{
    const emailUsed = await findUserByEmail('toti@gmail.com');
    expect(emailUsed.exists).toBe(true);
    
});

test('check if user_name is used ', async ()=>{
    const U_nameUsed = await findUserByUserName('toto');
    expect(U_nameUsed.exists).toBe(false);
    
});

