import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteredPipe',
  pure : false
})
export class FilteredPipePipe implements PipeTransform {

  transform(value: any, filterTxt : string, filterBy? : string): any {

    if(filterTxt == undefined){
      return value;
    }else{
      const formattedArr = [];

      if(filterBy == undefined){
            value.forEach(function(element){
                if(element.toLowerCase().includes(filterTxt.toLowerCase())){
                formattedArr.push(element);
            }
      });
      }else{
          value.forEach(function(emp){ // {name: "Jhon",...}
              if(emp[filterBy].toLowerCase().includes(filterTxt)){// emp[name] = Jhon
                formattedArr.push(emp);
           } 
         })
      }
      return formattedArr;
    }
   

   
  }

}
