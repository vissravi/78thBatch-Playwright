// To provide actual automation scripts
import{ test } from '@playwright/test';
import{ General } from '../lib/General';

test('TC001_Login_logout',async({page})=>{
    let obj = new General(page);
    await obj.openApplication();
    await obj.waitStmt();
    await obj.login();
    await obj.waitStmt();
    await obj.logout();
    await obj.waitStmt();
   


});