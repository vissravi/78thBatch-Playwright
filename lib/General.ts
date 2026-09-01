//To provide the re-usable functions /methods for whole application
import { Global } from './Global';
export class General extends Global{
// Add general resuable methods
//Go to URL
async openApplication(){
    await this.page.goto(this.hrmsApplicationUrl);
    console.log("Application Opened");
}
//Enter Credentials
async login(){
    await this.page.locator(this.textbox_loginname).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.button_submit).click();
    console.log("Login Completed");

}
// Logout from Application
async logout(){
    await this.page.locator(this.link_logout).click();
    console.log("Logout completed");
    
}

async addEmployee(){
    const frame = this.page.frameLocator(this.frame_empinfo);
    await frame.locator(this.button_add).click();
    await frame.locator(this.textbox_empFirstName).fill(this.empFirstName);
    await frame.locator(this.textbox_empLastName).fill(this.empLastName);
    await frame.locator(this.textbox_middleName).fill(this.empMiddleName);
    await frame.locator(this.textbox_NickName).fill(this.empNickName);
    await frame.locator(this.button_save).click();
    console.log("Employee Added");

}

async waitStmt(){

    await this.page.waitForTimeout(3000);
    console.log("Wait for 3 seconds");
}

};