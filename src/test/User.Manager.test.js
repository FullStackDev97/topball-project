import { findUserById,deleteUserById,findUserByEmail, createUser,findUserByUserName } from '../model.managers/User.Model.Manager.js';

test('find user by id', async () => {
    const user = await findUserById(5);
    //console.log(user.dataValues);
    expect(user).toMatchObject({
        user_id: 5, last_name: 'Loudian', first_name: 'Manfred', user_name: 'mloudian4', email: 'mloudian4@google.de', password: 'kalikush1', date_birth: '1924-01-07',
        profil_pic: 'http://dummyimage.com/194x100.png/dddddd/000000', role: 'admin', adress_id: 1, division_id: 11
    });

});


test('find user by id', async () => {
    const user = await findUserById(5);
    //console.log(user.dataValues);
    expect(user).toMatchObject({
        user_id: 5, last_name: 'Loudian', first_name: 'Manfred', user_name: 'mloudian4', email: 'mloudian4@google.de', password: 'kalikush1', date_birth: '1924-01-07',
        profil_pic: 'http://dummyimage.com/194x100.png/dddddd/000000', role: 'admin', adress_id: 1, division_id: 11
    });

});

test('check if email is used ', async ()=>{
    const emailUsed = await findUserByEmail('toti@gmail.com');
    expect(emailUsed.exists).toBe(true);
    
});

test('check if user_name is used ', async ()=>{
    const U_nameUsed = await findUserByUserName('toto');
    expect(U_nameUsed.exists).toBe(false);
    
});

test('create user ', async ()=>{
    const userCreated = await createUser('toto');
    expect(userCreated).toBe(false);
    
});

test('create user ', async ()=>{
    const userCreated = await createUser({last_name: 'Loudian', first_name: 'Manfred', user_name: 'test4', email: 'test4@google.co', password: 'testnb4', date_birth: '1924-01-07',
    role: 'baller'});
    expect(userCreated).toBe(true);
    
});

/*test('delete user ', async ()=>{
    const userCreated = await deleteUserById('blbla');
    expect(userCreated).toBe(false);
    
});*/
