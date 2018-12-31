

function removeClassFromElement(target, classToRemove){
	$(target).removeClass( classToRemove );
}

function toggleClassOnElement(target, classToToggle){
	$(target).toggleClass( classToToggle );
}

function hideElements( target, removalType ){
	switch( removalType ){
		case 'hide':
			$(target).hide();
			break;
		case 'removeChildren':
			$(target).empty();
			break;
		case 'removeSelf':
			$(target).remove();
			break;
	}
}

function addAttributeToElement( target, attributeKey, attributeValue){
	$(target).attr(attributeKey, attributeValue);
}

function putPosInElement( element ){
	const position = $(element).position();
	$(element).html( `x: ${position.left}px<br>y: ${position.top}px`);
	return {x: position.left, y: position.top}
}


