angular.module('shopHLP')
  .controller('CalendarController', CalendarController);

  CalendarController.$inject = ['BusinessService'];

  function CalendarController(BusinessService){
    var vm = this;

    vm.bizEvents = BusinessService.events;

    vm.date = new Date();

    vm.events = [
    {}
    ];


    vm.createCalendar = function(){
      console.log(vm.date);
      var today = vm.date;
      var todayString = String(today);
      if (todayString.indexOf("Feb")>-1){
        console.log("got the date");
        var generateRowsWithCols = function(rowStart, noOfRows, noOfCols){
          if (rowStart> noOfRows)
            return;
          var table = document.getElementById("grid");
          var tr = table.insertRow("tr");
          tr.setAttribute("id", "tr"+rowStart);
          generateCells(1, rowStart, noOfCols);
          generateRowsWithCols(++rowStart, noOfRows,noOfCols);
        };

        var generateCells = function(colStart,rowStart,noOfCols){
          if (colStart > noOfCols)
            return;
          var row = document.getElementById("tr"+rowStart);
          var td = row.insertCell('td');
          td.setAttribute("id", "td"+colStart);
          generateCells(++colStart,rowStart,noOfCols);
        };

        var generateTable = function(noOfRows,noOfCols){
          var table = document.createElement("table");
          table.setAttribute("id", "grid");
          document.body.appendChild(table);
          generateRowsWithCols(1,noOfRows,noOfCols);
        };

      } else {
        console.log("don't have the date");
      }
      generateTable(5,6);
    }
    vm.createCalendar();
  };
