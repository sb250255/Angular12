import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IPost } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  loadedPosts = [];
  isFetchingData = false;
  error = false;
  errorMessage : any;

  constructor(private http : HttpClient, private postSrvObj : PostService){

  }

  ngOnInit(){
    this.FetchData();

    this.postSrvObj.errorMessage.subscribe(
      (errorResponse) => {
          this.error = true;
          this.errorMessage = errorResponse;
      }
    )
  }
  /// Post the data to server as soon as submit button hit
  onCreatePost(postdata : IPost){
      
    this.postSrvObj.CreateData(postdata.title, postdata.content);

      // this.http.post('https://angularhttp-96d36.firebaseio.com/data.json', postdata)
      // .subscribe(
      //   (response) => {
      //       console.log(response);
      //   }
      // )
  }

  onFetchData(){
      this.FetchData();
  }

  onClearData(){
    // this.http.delete('https://angularhttp-96d36.firebaseio.com/data.json').subscribe(
    //   (response) => {
    //       console.log(response);
    //       this.loadedPosts = [];
    //   }
    // )
    this.postSrvObj.ClearData()
      .subscribe(
        (response) => {
            console.log(response);
            this.loadedPosts = [];
        }
      )
  }
 // Get the data from extenal server
  private FetchData(){
      this.isFetchingData = true;
      this.postSrvObj.GetData().subscribe(
        (responseData) => {
          setTimeout(() => {
                    this.isFetchingData = false;
                    this.loadedPosts = responseData; // assigning the res to local variable
                    console.log(responseData);
                  }, 5000);
        }, 
        (errorResponse) => {
          console.log(errorResponse.message)
          this.error = true;
          this.errorMessage = errorResponse.message;
        }
      )

      // this.http.get<{[key : string] : IPost}>('https://angularhttp-96d36.firebaseio.com/data.json')
      // .pipe(
      //   map((response) => {

      //     const responseData : IPost[] = [];
      //     for(const key in response){
      //       if(response.hasOwnProperty(key)){ // check if it has a key?
      //           responseData.push({...response[key]});
      //       }
      //     }
      //     console.log(responseData);

      //     return responseData;

      //   })
      // )
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

  onOkay(){
    this.error = false;
    this.isFetchingData = false;
    this.loadedPosts = [];
  }
}
