$(document).ready(function() { 
	
	/* Refer a Friend _ Google form */
	$("#existing").click(function() {
		$("#google-form-existing").show();
		$("#google-form-new").hide();
		$(".submitted").hide();
	});
	$("#new").click(function() {
		$("#google-form-new").show();
		$("#google-form-existing").hide();
		$(".submitted").hide();
	});

	$(".what").click(function() {
		$("img.screenshot").css("display", "block");
	});
	/* Cash back Calculator */
	$("#calculate-skrill").click(function() {
		var skrillInput = $("#deposit-amount-skrill").val();
		var firstSkrill;
		var secondSkrill;

		Number.prototype.formatMoney = function(c, d, t){
			var n = this, 
			c = isNaN(c = Math.abs(c)) ? 2 : c, 
			d = d == undefined ? "." : d, 
			t = t == undefined ? "," : t, 
			s = n < 0 ? "-" : "", 
			i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
			j = (j = i.length) > 3 ? j % 3 : 0;
			return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
		};

		if ( skrillInput < 20000 ) {
			console.log("zero");
			$('#skrillzero').show();
			$('html, body').animate({
				scrollTop: $('#skrillTop').offset().top
			}, 400);
		}
		else if ( 20000 <= skrillInput < 125000 ) {

			firstSkrill = skrillInput * .005;
			$(".skrilloutput1").html("$" + firstSkrill.formatMoney(2));

			secondSkrill = firstSkrill + (firstSkrill * .002);
			$(".skrilloutput2").html("$" + secondSkrill.formatMoney(2));

			$('#skrillzero').hide();
			$('.skrill-out').show();
		}
		else if ( skrillInput >= 125000 ) {
			firstSkrill = skrillInput * .006;
			$(".skrilloutput1").html("$" + firstSkrill.formatMoney(2));

			secondSkrill = firstSkrill + (firstSkrill * .002);
			$(".skrilloutput2").html("$" + secondSkrill.formatMoney(2));

			$('#skrillzero').hide();
			$('.skrill-out').show();
		}
		else {
			console.log('error');
			$('.error').show();
			$('#skrillzero').hide();
		}
	});

	$("#calculate-nt").click(function() {
		var ntInput = $("#deposit-amount-nt").val();
		var firstNt = ntInput * .003;
		var secondNt = ntInput * .0045;

		Number.prototype.formatMoney = function(c, d, t){
			var n = this, 
			c = isNaN(c = Math.abs(c)) ? 2 : c, 
			d = d == undefined ? "." : d, 
			t = t == undefined ? "," : t, 
			s = n < 0 ? "-" : "", 
			i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
			j = (j = i.length) > 3 ? j % 3 : 0;
			return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
		};

		if ( ntInput < 20000 ) {
			$('#ntzero').show();
			$('html, body').animate({
				scrollTop: $('#ntTop').offset().top
			}, 400);
		}
		else if ( ntInput >= 20000 ) {
		$(".ntoutput1").html("$" + firstNt.formatMoney(2));
		$(".ntoutput2").html("$" + secondNt.formatMoney(2));

		$('#ntzero').hide();
		$('.nt-out').show();
	}
	});
});