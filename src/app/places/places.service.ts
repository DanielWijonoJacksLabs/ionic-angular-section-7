import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1',
    'Manhattan',
    'In the heart of new york city',
    'https://i.pinimg.com/736x/2c/cf/ee/2ccfee2af8d9561cefe57baad9f6f72e--photos-new-york.jpg',
    300000
    ),
    new Place('p2',
    'Manhattan p2',
    'In the heart of city p2',
    'https://i.pinimg.com/736x/2c/cf/ee/2ccfee2af8d9561cefe57baad9f6f72e--photos-new-york.jpg',
    485948
    ),
    new Place('p3',
    'Manhattan p3',
    'In the heart of new york city p3 bro',
    'https://i.pinimg.com/736x/2c/cf/ee/2ccfee2af8d9561cefe57baad9f6f72e--photos-new-york.jpg',
    349855
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
