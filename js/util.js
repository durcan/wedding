// add axtra names to RSVP
function range(start, count) {
    return Array.apply(0, Array(count))
                .map(function (element, index) { 
                         return index + start;  
                     });
}

function nameUpdate(n) {
	var fdata = range(1, Number(n));

	var inp = d3.select('#form-name-list').selectAll('.form-group')
				.data(fdata);

	inp.enter().append("div")
				.attr("class", "form-group")
				.attr('id', function (d) {return 'form-name' + d})
				.append("div")
				.attr("class", "controls")
				.append("input")
				.attr("type", "text")
				.attr("name", function (d) {return "Name" + d})
				.attr("class", "form-control")
				.attr("placeholder", function (d) {return "Full Name " + d; })
				.append("p")
				.attr("class", "help-block");
	inp.exit().remove();

	return inp;

}


//Side Menu and Smooth Scrolling
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});