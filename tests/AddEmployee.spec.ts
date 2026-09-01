// To provide actual automation scripts
import{ test } from '@playwright/test';
import{ General } from '../lib/General';

test('TC002_Add_Employee',async ({ page })=>{
    let obj = new General(page);
    await  obj.openApplication();
    await obj.waitStmt();
    await obj.login();
    await obj.waitStmt();
    await obj.addEmployee();
    await obj.waitStmt();
    await obj.logout();
    await obj.waitStmt();
    console.log("***");

});
