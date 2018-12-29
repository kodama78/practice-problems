

function changeElements(ele){
	$(ele).each( (index, element)=>{ $(element).text(lCon($(element).text()) || $(element).text()  )})

}

function appendTextToElement(target, text){
	$(target).each( (index, element)=>{ $(element).text($(element).text()+text)})

}

function addClass(target, addClass){
	return $(target).addClass(addClass).length;
}

function removeElements(targetElement){
	$(targetElement).remove();
}
