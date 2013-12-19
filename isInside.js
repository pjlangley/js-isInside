document.body.addEventListener( 'click', bodyOnClick, false );

function bodyOnClick( event ) {
	//if( ! isInside( 'id', 'js-box', event ) )
	//if( ! isInside( 'data-id', 'box', event ) )
	if( ! isInside( 'class', 'box', event ) )
		console.log( 'not inside' );
}

/*
 * Check whether a click/tap event occured inside of an element
 */
function isInside( attribute, value, event ) {
	if( event.target.getAttribute( attribute ) == value ) {
		return true;
	}

	var parent = event.target.parentNode;

	while( parent.getAttribute( attribute ) != value ) {
		if( parent.tagName.toLowerCase() == 'html' ) {
			return false;
			break;
		}
		parent = parent.parentNode;
	}

	// Correct parent found - proving we are inside
	return true;
}
