import { Pipe, PipeTransform } from '@angular/core';
import { FunctionExpr } from '@angular/compiler';

@Pipe({
  name: 'checkBoxSalaryPipe'
})
export class CheckBoxSalaryPipePipe implements PipeTransform {

  transform(value: any, sal : number): any {
    if(sal == undefined){
      return value;
    }else{
      const outputArray = [];
      value.forEach(function(emp){
          if(emp["salary"] >= sal){
            outputArray.push(emp);
          }
      })
      return outputArray;
    }
  }

}
