export class AppError
{
    constructor(public orgError?:any){
        console.log("APPERROR ERRORMESSAGE: " + orgError);     
       
    }

}