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