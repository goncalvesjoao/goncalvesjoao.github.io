$(function() {
	$("textarea.line").each(function(){
		var this_id = $(this).attr('id');
		if (this_id != '' && this_id != undefined) {
			CodeMirror.fromTextArea(document.getElementById(this_id), {
		    tabMode: "indent",
		    matchBrackets: true,
		    indentUnit: 2,
				theme: "ambiance"
		  });
		}
	});
});