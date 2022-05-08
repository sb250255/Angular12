import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteredPipe',
  pure : false
})
export class FilteredPipePipe implements PipeTransform {

  // Value - Employees object of array
  // filteText contains first parameter to the filter in HTML
  // filterBy contains - 'name' / 'id' ..etc speciified in HTML
  transform(value: any, filterTxt : any, filterBy? : string): any {

    if(filterTxt == undefined){
      return value;
    }
    else if(typeof(filterTxt) == "object"){ // {name : '', id: '' }
      // Make sure an object contains some value.
      if((filterTxt['name'] !== undefined && filterTxt['name'] != '') || 
           (filterTxt['id'] !== undefined && filterTxt['id']!= ''))
      {
            const outputArray = [];
            // loop through the employees array
            value.forEach(function(emp){ // 1st iteration;emp = {name: Jhon,id:101, ....date:'', dept: ''}
                // get the keys from the object
                let matchedEmployee = undefined;

                let keys = Object.keys(filterTxt); // returns an array of keys ['name', 'id']
                // loop through the keys
                for(let i = 0; i<keys.length; i++){ // keys[0] = name; keys[1]=id
                  if(filterTxt[keys[i]]!= undefined && filterTxt[keys[i]]!=''){
                    if(emp[keys[i]].toString().toLowerCase().includes(filterTxt[keys[i]].toString().toLowerCase())){
                      // outputArray.push(emp);
                      if(matchedEmployee == undefined){
                        matchedEmployee = emp;
                      }else{
                        if(!matchedEmployee[keys[i]].toString().toLowerCase().includes(filterTxt[keys[i]].toString().toLowerCase())){
                            matchedEmployee = undefined;
                        }
                      }
                    }else{
                      matchedEmployee = undefined;
                      break;
                    }
                  }
                } 
                if(matchedEmployee !== undefined){
                  outputArray.push(matchedEmployee);
                }
            })
            return outputArray;
      }else{
        return value;
      }

    }
    else{
      const formattedArr = [];

      if(filterBy == undefined){
            value.forEach(function(element){
                if(element.toLowerCase().includes(filterTxt.toLowerCase())){
                formattedArr.push(element);
            }
      });
      }else{
          value.forEach(function(emp){ // {name: "Jhon",...}
              if(emp[filterBy].toString().toLowerCase().includes(filterTxt.toString().toLowerCase())){// emp[name] = Jhon
                formattedArr.push(emp);
           } 
         })
      }
      return formattedArr;
    }
   

   
  }

}
