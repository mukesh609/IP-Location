import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ip-location';
  IPdata: any;
  map: any;

  markers: any[] = [];
  constructor(private _http: HttpClient) {
    // let el = document.getElementById('map');
    // console.log(el);
  }
  ngOnInit() {
    // this._http.get('https://ipapi.co/json/').subscribe((data) => {
    //   console.log(data);
    //   this.IPdata = data;
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5,
      }
    );
    // this.getLocalIp()
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
    // const marker = new google.maps.Marker({
    //   position: { lat: this.IPdata.latitude, lng: this.IPdata.longitude },
    //   map: this.map,
    // });
    // });
  }

  clickOne() {
    this.IPdata = null;
    this.markers = [];
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5,
      }
    );
    this._http.get('https://ipapi.co/json/').subscribe((data) => {
      // console.log(data);
      this.IPdata = data;
      this.markers.push({
        lat: this.IPdata.latitude,
        lng: this.IPdata.longitude,
      });
      // this.map = new google.maps.Map(
      //   document.getElementById('map') as HTMLElement,
      //   {
      //     center: { lat: this.IPdata.latitude, lng: this.IPdata.longitude },
      //     zoom: 8,
      //   }
      // );
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
      // const marker = new google.maps.Marker({
      //   position: this.markers[0],
      //   map: this.map,
      // });
      this.getmarker();
    });
  }
  clickThree() {
    this.IPdata = null;
    this.markers = [];
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5,
      }
    );
    this._http
      .get(
        'https://api.ipgeolocation.io/ipgeo?apiKey=7bfbf2ebf7eb4e8d9c5668299686aae5'
      )
      .subscribe((data) => {
        // console.log(data);
        this.IPdata = data;
        this.markers.push({
          lat: Number(this.IPdata.latitude),
          lng: Number(this.IPdata.longitude),
        });
        // this.map = new google.maps.Map(
        //   document.getElementById('map') as HTMLElement,
        //   {
        //     center: { lat: this.IPdata.latitude, lng: this.IPdata.longitude },
        //     zoom: 8,
        //   }
        // );
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
        // const marker = new google.maps.Marker({
        //   position: this.markers[0],
        //   map: this.map,
        // });
        this.getmarker();
      });
  }
  clickTwo() {
    this.IPdata = null;
    this.markers = [];
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5,
      }
    );
    new google.maps.Marker();
    this._http
      .get('https://jsonip.com/')
      .pipe(
        switchMap((value: any) => {
          console.log(value);

          const ip = value?.ip;
          // const ip = '192.168.1.5';

          let url = `http://api.ipstack.com/${ip}?access_key=89f250b5498b26944125ef13ea977f66
`;
          return this._http.get(url);
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.IPdata = data;
        this.markers.push({
          lat: this.IPdata.latitude,
          lng: this.IPdata.longitude,
        });
        // console.log(this.IPdata);
        this.getmarker();
        // const marker = new google.maps.Marker({
        //   position: this.markers[0],
        //   map: this.map,
        // });
      });

    //  this.IPdata = data;

    // });
  }

  clickFour() {
    this.IPdata = null;
    this.markers = [];
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5,
      }
    );
    //www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY

    this._http
      .post(
        'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAXpesswfEnqLQvG-4HI_VuTIGaPJ27jnA',
        {}
      )
      .subscribe((data: any) => {
        console.log(data);
        this.IPdata = data?.location;
        this.markers.push({
          lat: this.IPdata.lat,
          lng: this.IPdata.lng,
        });
        // this.map = new google.maps.Map(
        //   document.getElementById('map') as HTMLElement,
        //   {
        //     center: { lat: this.IPdata.latitude, lng: this.IPdata.longitude },
        //     zoom: 8,
        //   }
        // );
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
        // const marker = new google.maps.Marker({
        //   position: this.markers[0],
        //   map: this.map,
        // });
        this.getmarker();
      });
  }
  clickFive() {
    this.IPdata = null;
    this.markers = [];
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: 20.5937, lng: 78.9629 },
        zoom: 5,
      }
    );
    //www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY

    this._http.get('https://json.geoiplookup.io/').subscribe((data: any) => {
      console.log(data);
      this.IPdata = data;
      this.markers.push({
        lat: this.IPdata.latitude,
        lng: this.IPdata.longitude,
      });
      // this.map = new google.maps.Map(
      //   document.getElementById('map') as HTMLElement,
      //   {
      //     center: { lat: this.IPdata.latitude, lng: this.IPdata.longitude },
      //     zoom: 8,
      //   }
      // );
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
      // const marker = new google.maps.Marker({
      //   position: this.markers[0],
      //   map: this.map,
      // });
      this.getmarker();
    });
  }
  getmarker() {
    for (let e of this.markers) {
      console.log(e);
      // e.setMap(this.map);
      const marker = new google.maps.Marker({
        position: e,
        map: this.map,
      });
    }
  }
  // getLocalIp() {
  //       var RTCPeerConnection =
  //         /*window.RTCPeerConnection ||*/ window.webkitRTCPeerConnection ||
  //         window.mozRTCPeerConnection;
  //       if (RTCPeerConnection)
  //         (function () {
  //           var rtc = new RTCPeerConnection({
  //             iceServers: [],
  //           });
  //           if (1 || window.mozRTCPeerConnection) {
  //             rtc.createDataChannel('', {
  //               reliable: false,
  //             });
  //           }
  //           rtc.onicecandidate = function (evt) {
  //             if (evt.candidate) grepSDP('a=' + evt.candidate.candidate);
  //           };
  //           rtc.createOffer(
  //             function (offerDesc) {
  //               grepSDP(offerDesc.sdp);
  //               rtc.setLocalDescription(offerDesc);
  //             },
  //             function (e) {
  //               console.warn('offer failed', e);
  //             }
  //           );
  //           var addrs = Object.create(null);
  //           addrs['0.0.0.0'] = false;

  //           function updateDisplay(newAddr) {
  //             if (newAddr in addrs) return;
  //             else addrs[newAddr] = true;
  //             var displayAddrs = Object.keys(addrs).filter(function (k) {
  //               return addrs[k];
  //             });
  //             document.getElementById('list').textContent =
  //               displayAddrs.join(' or perhaps ') || 'n/a';
  //           }

  //           function grepSDP(sdp) {
  //             var hosts = [];
  //             sdp.split('\r\n').forEach(function (line) {
  //               if (~line.indexOf('a=candidate')) {
  //                 var parts = line.split(' '),
  //                   addr = parts[4],
  //                   type = parts[7];
  //                 if (type === 'host') updateDisplay(addr);
  //               } else if (~line.indexOf('c=')) {
  //                 var parts = line.split(' '),
  //                   addr = parts[2];
  //                 updateDisplay(addr);
  //               }
  //             });
  //           }
  //         })();
  //       else {
  //         document.getElementById('list').innerHTML =
  //           '<code>ifconfig| grep inet | grep -v inet6 | cut -d" " -f2 | tail -n1</code>';
  //         document.getElementById('list').nextSibling.textContent =
  //           'In Chrome and Firefox your IP should display automatically, by the power of WebRTCskull.';
  //       }
  // }
}
