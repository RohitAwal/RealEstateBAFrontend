$(document).ready(
	function () {

		var uid;
	$('#advevet').submit(function (e) {


		e.preventDefault();

		var editDatacontact = {
        
            I_have: $('#I_have').val(),
            I_want: $('#I_want').val(),
            Name: $('#Name').val(),
            Email: $('#Email').val(),
            Phoneno: $('#Phoneno').val(),
            Adtitle: $('#Adtitle').val(),
            Description: $('#Description').val(),
            Location: $('#Location').val(),
            LandArea: $('#LandArea').val(),
            Price: $('#Price').val(),

        
		}
		console.log(editDatacontact);
		$.ajax({

			url: 'http://localhost:3003/v1/advert/' + uid, // here uid has already been set to actual userid in previous funciton when edit is clicked, since uid is global
			method: "PUT",
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify(editDatacontact),
			success: function (result) {
				console.log(result)
				window.location.href = "admindashboard.html";
			},
			error: function () {
				window.location.href = "admindashboard.html";
			}

		})

		// khjgcvdwbq nshvg

	})





	
	$('#advertlist').on('click', '#edit', function () {
		//this is the userid 
		uid = $(this)[0].attributes.uid.nodeValue;
		//cid = $(this).attr('cid');
		// var uid = $(this).attr('uid');
		$.ajax({

			url: 'http://localhost:3003/v1/advert/' + uid,
			method: 'GET',
			dataType: 'json',
			success: function (result) {
				// console.log(result.username)
                $('#I_have').val(result.I_have)
                $('#I_want').val(result.I_want)
				$('#Name').val(result.Name)
				$('#Email').val(result.Email)
				$('#Phoneno').val(result.Phoneno)
				$('#Adtitle').val(result.Adtitle)
				$('#Description').val(result.Description)
                $('#Location').val(result.Location)
                $('#LandArea').val(result.LandArea)
				$('#Price').val(result.Price)
			
				// window.location.href = "admindashboard.html";

			},
			error: function () {

			}
		})


	})

	$('#advertlist').on('click', '#delete', function () {

		console.log('delete pressed');
		console.log($(this)[0].attributes.uid.nodeValue);
		console.log($(this));
		// uid = $(this)[0].attributes.vid.nodeValue;
		var uid = $(this).attr('uid');
		console.log(uid);
		var isDelete = confirm("Are your sure you want to delete ? ");

		if (isDelete == true) {
			$.ajax({

				url: 'http://localhost:3003/v1/advert/' + uid,
				method: 'delete',
				dataType: 'json',
				success: function () {
					window.location.href = "admindashboard.html";

				},
				error: function () {
					window.location.href = "admindashboard.html";

				}
			})

		} else { // handle else 

		}

	})






		$.ajax({


			url: 'http://localhost:3003/v1/advert',
			method: 'GET',
			dataType: 'json',
			// headers: { authorization: window.localStorage.getItem('token') },
			success: function (result, status) {
				console.log(result);
				for (key in result) {
	
					// console.log(result[key].Name)
					// console.log(result[key].email)
					// console.log(result[key].Phoneno)
					// console.log(result[key].Message)
				
	
	
					$('#advertlist').append('<tr> ]\
                        <td>' + result[key].id + '</td> \
                        <td>' + result[key].I_have + '</td> \
                        <td>' + result[key].I_want + '</td> \
						<td>' + result[key].Name + '</td> \
						<td>' + result[key].Email + '</td> \
						<td>' + result[key].Phoneno + '</td> \
                        <td>' + result[key].Adtitle + '</td> \
                        <td>' + result[key].Description + '</td> \
                        <td>' + result[key].Location + '</td> \
                        <td>' + result[key].LandArea + '</td> \
                        <td>' + result[key].Price + '</td> \
						<td><button type="button" uid="' + result[key].id + '" data-toggle="modal" data-target="#exampleModals1" \
						id="edit"  class="btn btn-primary">Edit</button></td>\
						<td><button type="button" uid="' + result[key].id + '"  id="delete" class="btn btn-danger">Delete</button></td>\
						</tr>')
				}
			},
			error: function (jqXHR, status) {
	
			}
	
	
		})

	
		
	
	})


	$(document).on('submit', '#advertForm', function(e){
		e.preventDefault();
		var myFormData = {
                I_have: $('#I_have').val(),
                I_want: $('#I_want').val(),
				Name: $('#Name').val(),
				Email: $('#Email').val(),
                Phoneno: $('#Phoneno').val(),
                Adtitle: $('#Adtitle').val(),
                Description: $('#Description').val(),
                Location: $('#Location').val(),
                LandArea: $('#LandArea').val(),
                Price: $('#Price').val(),
			}
			$.ajax({
				url: 'http://localhost:3003/v1/advert',
				method: 'POST',
				contentType: 'application/json',
				data: JSON.stringify(myFormData),

				success: function (result, status) {
					// console.log(result);
					// console.log(result.message); 
					// console.log(status);
					alert('Registered');
					// $('#message').html(result.message)


					// $('#rform').hide();
					// $('#lform').show()
				},
				error: function (jqXHR, status) {
					console.log(jqXHR);
					// console.log(jqXHR.responseJSON.message);
					// $('#message').html(jqXHR.responseJSON.message)
					alert('milyena');
				}
			})







	});






	
	