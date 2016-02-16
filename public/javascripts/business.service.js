angular.module('shopHLP')
  .factory('Businesses', function(){


    var fig = {};

    var york = {};

    fig.businesses = [
    { name: 'Chicas Salon',
      address: '4934 York Blvd',
      zip: '90042',
      phone: '3239829809'
      storefront: 'images/storefronts/York_even/4934_YorkBlvd.png',
      categories: [
        { category: 'hair salon', image: ' '},
        { category: 'men salon', image: ' '},
        { category: 'women salon', image: ' '},
        ],
      hours: [
      { day: 'Monday', times: '10:00am - 7:00pm'},
      { day: 'Tuesday', times: '10:00am - 7:00pm'},
      { day: 'Wednesday', times: '10:00am - 7:00pm'},
      { day: 'Thursday', times: '10:00am - 7:00pm'},
      { day: 'Friday', times: '10:00am - 7:00pm'},
      { day: 'Saturday', times: '10:00am - 7:00pm'},
      { day: 'Sunday', times: '10:00am - 7:00pm'}
      ],
      events: [
      { title: 'Open House', startDate: '02/20/2016', endDate: '02/21/2016', startTime: '10:00am', endTime: '7:00pm' }
      ],
      about: 'Serving the community since 1986, Chicas Salon ....'
    }
    ];

    york.businesses = [
    {

    }
    ];

    return fig;

    return york;
  })
