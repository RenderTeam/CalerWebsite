YUI().use('calendar', 'datatype-date', 'cssbutton',  function(Y) {             
    var calendar = new Y.Calendar({
      contentBox: "#mycalendar",
      width:'340px',
      showPrevMonth: true,
      showNextMonth: true,
      date: new Date()}).render();    
    var dtdate = Y.DataType.Date;    
    
    calendar.on("selectionChange", function (ev) {     
      var newDate = ev.newSelection[0];
      Y.one("#selecteddate").setHTML(dtdate.format(newDate));
    });

});