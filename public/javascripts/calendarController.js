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
          td.setAttribute("id", "td"+rowStart+colStart);
          td.setAttribute("ng-click", "main.showEvents")
          generateCells(++colStart,rowStart,noOfCols);
        };

        var generateTable = function(noOfRows,noOfCols){
          var table = document.createElement("table");
          table.setAttribute("id", "grid");
          document.body.appendChild(table);
          generateRowsWithCols(1,noOfRows,noOfCols);
          placeDates();
        };

        var placeDates = function(){
          console.log('hello placeDates');
          var getToday = moment();
          var getTodayString = String(getToday);
          var todaySubstr = getTodayString.slice(8, 10);
          var todayNum = Number(todaySubstr);
          console.log('today is:'+ todayNum);
          var startOfMonth = getToday.subtract(todayNum, 'days');
          startOfMonth = startOfMonth.format("ddd");
          console.log('the start of the month was a:' + startOfMonth);
            if (startOfMonth.indexOf("Sun")> -1){
                document.getElementById("td11").innerHTML = "5";
                document.getElementById("td12").innerHTML="4";
                document.getElementById("td13").innerHTML="3";
                document.getElementById("td14").innerHTML="2";
                document.getElementById("td15").innerHTML ="1";
                document.getElementById("td16").innerHTML ="29";
                document.getElementById("td17").innerHTML ="28";
                document.getElementById("td21").innerHTML ="27";
                document.getElementById("td22").innerHTML ="26";
                document.getElementById("td23").innerHTML ="25";
                document.getElementById("td24").innerHTML ="24";
                document.getElementById("td25").innerHTML ="23";
                document.getElementById("td26").innerHTML ="22";
                document.getElementById("td27").innerHTML ="21";
                document.getElementById("td31").innerHTML ="20";
                document.getElementById("td32").innerHTML ="19";
                document.getElementById("td33").innerHTML ="18";
                document.getElementById("td34").innerHTML ="17";
                document.getElementById("td35").innerHTML ="16";
                document.getElementById("td36").innerHTML ="15";
                document.getElementById("td37").innerHTML ="14";
                document.getElementById("td41").innerHTML ="13";
                document.getElementById("td42").innerHTML ="12";
                document.getElementById("td43").innerHTML ="11";
                document.getElementById("td44").innerHTML ="10";
                document.getElementById("td45").innerHTML ="9";
                document.getElementById("td46").innerHTML ="8";
                document.getElementById("td47").innerHTML ="7";
                document.getElementById("td51").innerHTML ="6";
                document.getElementById("td52").innerHTML ="5";
                document.getElementById("td53").innerHTML ="4";
                document.getElementById("td54").innerHTML ="3";
                document.getElementById("td55").innerHTML ="2";
                document.getElementById("td56").innerHTML ="1";
                document.getElementById("td57").innerHTML =" ";
                document.getElementById("td61").innerHTML ="Saturday";
                document.getElementById("td62").innerHTML ="Friday";
                document.getElementById("td63").innerHTML ="Thursday";
                document.getElementById("td64").innerHTML ="Wednesday";
                document.getElementById("td65").innerHTML ="Tuesday";
                document.getElementById("td66").innerHTML ="Monday";
                document.getElementById("td67").innerHTML ="Sunday";
              }
            }
        } else {
        console.log("don't have the date");
      }
      generateTable(6,7);
    }
    vm.createCalendar();

    vm.showEvents = function(){

    }
  };
