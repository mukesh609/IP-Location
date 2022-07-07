import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ip-location';
  IPdata: any;
  constructor(private _http: HttpClient) {
    // let el = document.getElementById('map');
    // console.log(el);
  }
  ngOnInit() {
    this._http.get('https://ipapi.co/json/').subscribe((data) => {
      console.log(data);
      this.IPdata = data;
      const map = new google.maps.Map(
        document.getElementById('map') as HTMLElement,
        {
          center: { lat: this.IPdata.latitude, lng: this.IPdata.longitude },
          zoom: 8,
        }
      );
      // const loader = new Loader({
      //   apiKey: 'AIzaSyAXpesswfEnqLQvG-4HI_VuTIGaPJ27jnA',
      // });

      // loader.load().then(() => {
      //   new google.maps.Map(document.getElementById('map') as HTMLElement, {
      //     center: { lat: this.IPdata.latitude, lng: this.IPdata.longitude },
      //     zoom: 5,
      //     gestureHandling: 'greedy',
      //   });
      // });
      const marker = new google.maps.Marker({
        position: { lat: this.IPdata.latitude, lng: this.IPdata.longitude },
        map: map,
      });
    });
  }
}
