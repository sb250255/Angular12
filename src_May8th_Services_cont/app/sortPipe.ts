import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name : 'sortPipe'
})

export class sortPipe implements PipeTransform {

    // Transform is an API method mandatory to define when we create our own pipe
    transform(value : any, str:number, end? : number){

            if(value.length > 0){
                if(end == undefined){
                    return  value.substr(str,4) + "...";
                }else{
                    return value.substr(str, end)+ "..";
                }
            }
    }
}