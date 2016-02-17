angular.module('shopHLP')
  .factory('BusinessService', ['$http', function($http){

    var service = {};

    service.businesses = [

      { "name": "Chicas Salon",
        "type": "salon",
        "address": "4934 York Blvd",
        "zip": "90042",
        "phone": "3239829809",
        "website": " ",
        "storefront": "images/storefronts/York_even/4934_YorkBlvd.png",
        "categories": [
          { "category": "hair salon", "image": " "},
          { "category": "men's salon", "image": " "},
          { "category": "women's salon", "image": " "},
          ],
        "hours": [
        { "day": "Monday", "times": "10:00am - 7:00pm" },
        { "day": "Tuesday", "times": "10:00am - 7:00pm"},
        { "day": "Wednesday", "times": "10:00am - 7:00pm"},
        { "day": "Thursday", "times": "10:00am - 7:00pm"},
        { "day": "Friday", "times": "10:00am - 7:00pm"},
        { "day": "Saturday", "times": "10:00am - 7:00pm"},
        { "day": "Sunday", "times": "10:00am - 7:00pm"}
        ],
        "events": [
        { "title": "Open House", "startDate": "02/20/2016", "endDate": "02/21/2016", "startTime": "10:00am", "endTime": "7:00pm" }
        ],
        "about": "Serving the community since 1986, Chicas Salon ...."
      },

      { "name": "The Juice",
        "type": "Juice Bar",
        "address": "4936 York Blvd",
        "zip": "90042",
        "phone": "3239997764",
        "website": "http://thejuicela.com/",
        "storefront": "images/storefronts/York_even/4936_YorkBlvd.png",
        "categories": [
          { "category": "juice", "image": " "},
          { "category": "juice cleanse", "image": " "},
          { "category": "smoothies", "image": " "},
          { "category": "vegan", "image": " "},
          { "category": "raw", "image": " "},
          ],
        "hours": [
        { "day": "Monday", "times": "8:00am - 7:00pm"},
        { "day": "Tuesday", "times": "8:00am - 7:00pm"},
        { "day": "Wednesday", "times": "8:00am - 7:00pm"},
        { "day": "Thursday", "times": "8:00am - 7:00pm"},
        { "day": "Friday", "times": "8:00am - 7:00pm"},
        { "day": "Saturday", times: "8:00am - 7:00pm"},
        { "day": "Sunday", "times": "8:00am - 7:00pm"}
        ],
        "events": [
        { "title": "Open House", "startDate": "02/20/2016", "endDate": "02/21/2016", "startTime": "10:00am", "endTime": "7:00pm" }
        ],
        "about": "Neighborhood Juice & Smoothie Shops serving 100%  Organic Cold Pressed Juices and smoothies.  As well as healthy sweets, treats and more."
      },

      { "name": "Cafe de Leche",
        "type": "Coffee Shop",
        "address": "5000 York Blvd",
        "zip": "90042",
        "phone": " ",
        "website": "http://www.cafedeleche.net/CDL/main.html",
        "storefront": "images/storefronts/York_even/5000_YorkBlvd.png",
        "categories": [
          { "category": "coffee shop", "image": " "},
          { "category": "Stumptown", "image": " "},
          { "category": "pastries", "image": " "}
          ],
        "hours": [
        { "day": "Monday", "times": "7:00am - 6:00pm"},
        { "day": "Tuesday", "times": "7:00am - 6:00pm"},
        { "day": "Wednesday", "times": "7:00am - 6:00pm"},
        { "day": "Thursday", "times": "7:00am - 6:00pm"},
        { "day": "Friday", "times": "7:00am - 7:00pm"},
        { "day": "Saturday", "times": "7:00am - 7:00pm"},
        { "day": "Sunday", "times": "7:00am - 6:00pm"}
        ],
        "events": [
        { "title": "Open House", "startDate": "02/20/2016", "endDate": "02/21/2016", "startTime": "10:00am", "endTime": "7:00pm" }
        ],
        "about": "Proudly serving Stumptown Coffee.  Free WiFi!"
      },

      { "name": "The POP-HOP",
        "type": "Book Store",
        "address": "5002 York Blvd",
        "zip": "90042",
        "phone": "3232592490",
        "website": "http://www.thepophop.com/",
        "storefront": "images/storefronts/York_even/5002_YorkBlvd.png",
        "categories": [
          { "category": "books", "image": " "},
          { "category": "zines", "image": " "},
          { "category": "stationary", image: " "},
          { "category": "gifts", "image": " "},
          ],
        "hours": [
        { "day": "Monday", "times": "10:00am - 7:00pm"},
        { "day": "Tuesday", "times": "10:00am - 7:00pm"},
        { "day": "Wednesday", "times": "10:00am - 7:00pm"},
        { "day": "Thursday", "times": "10:00am - 7:00pm"},
        { "day": "Friday", "times": "10:00am - 7:00pm"},
        { "day": "Saturday", "times": "10:00am - 7:00pm"},
        { "day": "Sunday", "times": "10:00am - 7:00pm"}
        ],
        "events": [
        { "title": "Sumarr Reading Series", "dayOfWeek": "Sunday", "startDate": "05/24/2016", "endDate": "09/27/2016", "startTime": "3:00pm", "endTime": "5:00pm" }
        ],
        "about": "The Pop-Hop is a bookstore specializing in a curated selection of used books, small press, zines and handcrafted items nestled in the heart of Highland Park on York Boulevard. We sell a wide array of constantly changing used and unusual books including everything from contemporary classics and fiction to sci-fi and art books!"
      },

      { "name": "Urchin",
        "type": "Clothing",
        "address": "5006 1/2 York Blvd",
        "zip": "90042",
        "phone": "3232599059",
        "website": "https://www.facebook.com/Urchin-Vintage-150524738378348/",
        "storefront": "images/storefronts/York_even/5006_12_YorkBlvd.png",
        "categories": [
          { "category": "vintage clothes", "image": " "},
          { "category": "womens clothes", "image": " "},
          { "category": "mens clothes", "image": " "}
          ],
        "hours": [
        { "day": "Monday", "times": "12:00pm - 8:00pm"},
        { "day": "Tuesday", "times": "12:00pm - 8:00pm"},
        { "day": "Wednesday", "times": "12:00pm - 8:00pm"},
        { "day": "Thursday", "times": "12:00pm - 8:00pm"},
        { "day": "Friday", "times": "12:00pm - 8:00pm"},
        { "day": "Saturday", "times": "12:00pm - 8:00pm"},
        { "day": "Sunday", "times": "12:00pm - 8:00pm"}
        ],
        "events": [
        { "title": "Spring Sale", "dayOfWeek": " ", "startDate": "02/20/2016", "endDate": "02/29/2016", "startTime": "12:00pm", "endTime": "8:00pm" }
        ],
        "about": "Affordable vintage fashions for men and women."
      }
    ];

    service.types = getUnique(service.businesses, 'type');

    return service;


    function getUnique(arr, field) {
      var obj = {};
      arr.forEach(function(e){
        obj[e[field]] = true;
      });
      return Object.keys(obj).sort();
    };


  }]);
