

function populateRecords(records){
	const destination = $("#testArea");
	const sortedRecords = records.sort( (a,b)=> {
		a.type < b.type ? 1 : -1
	});
	function getAmount( a, c ){
		return a+parseFloat(c.amount)
	}
	const chargeAmount = records.filter( item => item.type==='charge').reduce( getAmount , 0);
	const cashAdvanceAmount = records.filter( item => item.type==='cash advance').reduce( getAmount, 0)

	const section = $("<div>",{
		'class': 'testOutput'
	})
	section.append( createRecord( { type: 'TYPE', source: 'SOURCE', amount: 'AMOUNT'} ));
	const domArray = sortedRecords.map( createRecord )

	section.append(domArray);
	destination.append(section);
	return { charge: chargeAmount, 'cash advance': cashAdvanceAmount}
}

function createRecord( recordData ){
	const row = $("<div>",{
		'class': 'transactionRecord'
	});
	const type = $("<div>",{
		'class': 'transactionType',
		text: recordData.type
	})
	const store = $("<div>",{
		'class': 'transactionLocation',
		text: recordData.source
	});
	console.log(typeof recordData.amount)
	const amount = $("<div>",{
		'class': 'transactionAmount',
		text: recordData.amount
	});
	row.append(type, store, amount);
	return row;
}


