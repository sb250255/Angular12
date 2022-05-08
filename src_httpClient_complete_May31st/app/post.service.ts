import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './post.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
    providedIn : 'root'
})
export class PostService {

    errorMessage = new Subject();

    constructor(private http : HttpClient){

    }

    CreateData(title : string, content : string){
        this.http.post('https://angularhttp-96d36.firebaseio.com/data.json', 
                            {title : title, content : content})
            .subscribe(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    this.errorMessage.next(error.message);
                }
            )
    }

    GetData(){

       return this.http.get<{[key : string] : IPost}>
       ('https://angularhttp-96d36.firebaseio.com/data.json',
        {
            headers : new HttpHeaders({
                'print' : 'pretty'
            }),
            params : new HttpParams().set('print', 'pretty')
        })  
        .pipe(
          map((response) => {
  
            const responseData : IPost[] = [];
            for(const key in response){
              if(response.hasOwnProperty(key)){ // check if it has a key?
                  responseData.push({...response[key]});
              }
            }
            console.log(responseData);
  
            return responseData;
  
          })
        )
        // .subscribe((responseData) => {
        //       setTimeout(() => {
        //         this.isFetchingData = false;
        //         this.loadedPosts = responseData; // assigning the res to local variable
        //         console.log(responseData);
        //       }, 5000);
        //       // this.loadedPosts = responseData; // assigning the res to local variable
  
        //       // console.log(responseData);
        // })
    }
    ClearData(){
        return this.http.delete('https://angularhttp-96d36.firebaseio.com/data.json');
    }
}