$(document).ready(function()
{
	$("#toggleMenu").bind("click", function()
	{
		$(this).toggleClass("fa-times");
		$("nav").slideToggle("menuActive");
	});
});