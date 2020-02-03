import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator{

    static  nospacebetweenusername(control:AbstractControl) :ValidationErrors | null{
        if((control.value as string).indexOf(" ")>=0){
            return {nospacebetweenusername :true}
        }
  
  
        else{
            return null;
        }
    }

    static samename(con:AbstractControl) :ValidationErrors |null{
        if((con.value as string)==="admin"){
            return {samename :true}
        }
        else{
            return null;
        }
    }
}