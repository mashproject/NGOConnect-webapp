 $(function() {


   var ngo = [];
   var cause = [];

   $.getJSON('./ngo.json', function(data) {
     $.each(data.ngo, function(i, f) {
      var tblRow = "<li class=\"col-xs-12 col-md-3 col-sm-4\">" + "<a class=\"stickie\" href=\"\" rel=\"bookmark\">" + "<span class=\"annotation top-left\">" + f.jobLocation + "</span>" +
      "<span class=\"annotation top-right\">" + f.lastDate + "</span>" + " <span class=\"headline\">" + f.jobDescribtion + "</span>" +"<span class=\"annotation bottom-left\">"+f.jobCause+"</span>"+"<span class=\"annotation bottom-right\">"+f.Name+"</span>"+ " </a>"+ "</li>"
      $(tblRow).appendTo("#stickie-area");

      if ($.inArray(f.jobLocation, ngo) === -1) {
        ngo.push(f.jobLocation);
        var list = "<li class=\"active \">"+"<div class=\"checkbox\">"+"<label>"+"<input type=\"checkbox\" value=\"\">"+ f.jobLocation +"</label>"+"</div>"+"</li>"
        $(list).appendTo("#checkLocation");
      }

      if ($.inArray(f.jobCause, cause) === -1) {
        cause.push(f.jobCause);
        var list = "<li class=\"active \">"+"<div class=\"checkbox\">"+"<label>"+"<input type=\"checkbox\" value=\"\">"+ f.jobCause +"</label>"+"</div>"+"</li>"
        $(list).appendTo("#checkCause");
      }

    });

});

});

