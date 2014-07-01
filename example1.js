/*
 * STEP 1: DISCOVERY
 */
 
	xdi.discovery(

		"=markus",
		function(discovery) {
			alert(discovery.cloudNumber());			// [=]!:uuid:1111
			alert(discovery.xdiEndpointUri());      // https://xdi...../
		},
		function(errorText) {
			alert(errorText);
		},
		[],
		"https://xdidiscoveryservice.xdi.net/"
	);
 
/*
 * STEP 2: MESSAGE
 */

	var message = xdi.message("[=]!:uuid:1111");
	message.toAddress("([=]!:uuid:1111)");
	message.linkContract("([=]!:uuid:1111/[=]!:uuid:1111)$do");
	message.secretToken("mysecret");
	message.operation("$set", '[=]!:uuid:1111<#email>&/&/"test@gmail.com"');

	message.send(

		endpoint,
		function(response) {
			alert("success");
		},
		function(errorText) {
			alert(errorText);
		}
	);
 