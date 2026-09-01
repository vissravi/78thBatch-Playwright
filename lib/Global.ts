// To provide test data, objects/elements related to whole application
// export stands for we can use/import in another folders
import{ Page } from '@playwright/test';
export class Global{
    public page!: Page;
    constructor(page:Page){
         this.page = page;
    }

    

   // *************TestData**************//

   public hrmsApplicationUrl : string = "https://sureshitacademy.in/hrms/login.php";
   public username : string = "sureshit";
   public password : string = "sureshit";
   public empFirstName : string = "Nagendra";
   public empLastName : string = "RajKumar";
   public empMiddleName : string = "Bhushan";
   public empNickName : string = "NagaRaju";

   // *************Objects/Elements**************//

   public textbox_loginname : string = "//input[@name='txtUserName']";
   public textbox_password : string = "//input[@name='txtPassword']";
   public button_submit : string = "//input[@name='Submit']";
   public link_logout : string = "//a[text()='Logout']";

   public frame_empinfo : string = "//iframe[@id='rightMenu']";
   public button_add : string  = "//input[@value='Add']";
   public textbox_empFirstName : string = "//input[@name='txtEmpFirstName']";
   public textbox_empLastName : string ="//input[@name='txtEmpLastName']";
   public textbox_middleName: string = "//input[@name='txtEmpMiddleName']";
   public textbox_NickName:string = "//input[@name='txtEmpNickName']";
   public button_save : string = "//input[@id='btnEdit']";

   /*
   public add1: any = this.page.getByText('Add');
   */
}
