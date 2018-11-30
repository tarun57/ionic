import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

export class UsernameValidators{
  static  cannotContainSpace(control : AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf('') >=0)
            return { cannotContainSpace: true };
            return null;
    }

    static usernameTaken(control: AbstractControl): Promise<ValidationErrors> {
        return new Promise((resolve, reject) => {   
            setTimeout(() => {          
                if (control.value == "David") {
                    console.log('username taken')
                    resolve({"usernameTaken": true})
                } else {
                resolve(null);
                };                
            }, 1000);
        });

    }
    


}