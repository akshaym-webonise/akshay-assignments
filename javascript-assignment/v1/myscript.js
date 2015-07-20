var isProgressTableActive = false;
var isHistoryActive = false;

function loadTheData()
{	
	document.getElementById("inputButton").addEventListener("click", function()
	{
		insertInTodo();
	}, false);	
	document.getElementById("clearButton").addEventListener("click", function()
	{
		localStorage.clear();
	}, false);	
	document.getElementById("historyVisibility").addEventListener("click", function()
	{
		isHistoryActive = document.getElementById("historyVisibility").checked;
		if(isHistoryActive)
		{
			displayTable("historyTable", "historyList", "Task History", 1);
		}
		else
		{
			document.getElementById("historyTable").innerHTML="";			
		}
	}, false);	
	document.getElementById("progressVisibility").addEventListener("click", function()
	{
		isProgressTableActive = document.getElementById("progressVisibility").checked;
		if(isProgressTableActive)
		{
			displayTable("progressTable", "inProcessList", "In Process Tasks", 3);		
		}
		else
		{
			document.getElementById("progressTable").innerHTML="";
		}
	}, false);

	var allTables = document.getElementsByTagName("table");
	for(i=0 ; i<allTables.length;i++)
	console.log(allTables[i]);

	displayTable("toDoTable", "toDoList", "To Do Tasks", 3);
	displayTable("completedTable", "completedList", "Completed Tasks", 2);
	if(isProgressTableActive)
		displayTable("progressTable", "inProcessList", "In Process Tasks", 3);
	if(isHistoryActive)
		displayTable("historyTable", "historyList", "Task History", 1);	
}

function insertColumn(data, width, parent)
{
	var col = document.createElement('td');
	if(width!==null)
	col.width = width;
	col.innerHTML = data;
	parent.appendChild(col);
}

var Row = function(data)
{
	this.text = data;	
	this.row = document.createElement('tr'); 
	this.getRow = function(cols)
	{
		insertColumn(this.text, null, this.row);
		if(cols>1)
			insertColumn('<input type="button" id="delButton" onclick="deleteRow(this.parentNode.parentNode)" value="X" class="btn-style"></input>', "15px", this.row);
		if(cols>2)
			insertColumn('<input type="button" id="shiftButton" onclick="shiftToNext(this.parentNode.parentNode)" value="Y" class="btn-style"></input>', "15px", this.row);
		return this.row;
	};	
	this.getExistingRow = function()
	{
		return this.row;
	};

	this.setRow = function(row)
	{
		this.row = row;
		this.text = row.firstChild.innerHTML;
	};
};

function insertInTodo()
{
	var task = document.getElementById("inputText");
    var table = document.getElementById("toDoTable");
	var rowClass = new Row(task.value);
	var row = rowClass.getRow(3);
	table.appendChild(row);
	task.value="";
	addToLocalStorage("toDoList", rowClass.text);
	addToLocalStorage("historyList", rowClass.text);
	if(isHistoryActive)
		displayTable("historyTable", "historyList", "Task History", 1);
}

function deleteRow(object)
{
	var table = document.getElementById(object.parentNode.id);
	deleteFromLocal(table.id, object.firstChild.innerHTML);
	table.deleteRow(object.rowIndex);
}

function getList(table)
{
	switch(table)
	{
		case "toDoTable":
			return "toDoList";
		case "completedTable":
			return "completedList";
		case "progressTable":
			return "inProcessList";
	}
}

function deleteFromLocal(tableName, data)
{
	var storage = getList(tableName);
	var tab = localStorage.getItem(storage);
	var newRows="";
	if(tab==null)
		tab="";
	else
	{
		var myRows = tab.split(',');
		for(i=0 ; i<myRows.length-1 ; i++)
			if(myRows[i]!==data)
				newRows=newRows+myRows[i]+",";
	}
	localStorage.setItem(storage,newRows);
}

function shiftToNext(obj)
{
	var oldTableName = obj.parentNode.id;
	var rowClass = new Row("");
	rowClass.setRow(obj);
	deleteRow(obj);
	var row = rowClass.getExistingRow();
	if(isProgressTableActive && oldTableName=="toDoTable")
	{
		var newTableName = "progressTable";		
	}
	else if(isProgressTableActive && oldTableName=="progressTable")
	{
		var newTableName = "completedTable";
	}
	else
	{
		var newTableName = "completedTable";
		row.deleteCell(2);
	}	
	var table = document.getElementById(newTableName);
	table.appendChild(row);				
	addToLocalStorage(getList(newTableName), rowClass.text);
}

function addToLocalStorage(Storage, data)
{
	var tab = localStorage.getItem(Storage);
	if(tab==null)
		tab="";
	tab = tab+data+",";
	localStorage.setItem(Storage,tab);
}

function displayTable(tableName, listName, headerText, cnt)
{
	var table = document.getElementById(tableName);
	var data = localStorage.getItem(listName);
	var myRows = data.split(',');
	table.innerHTML = "";
	var header = document.createElement('th');
	header.colspan=cnt;
	header.innerHTML = headerText;
	table.appendChild(header);
	for(i=0 ; i<myRows.length-1 ; i++)
	{
		var rowClass = new Row(myRows[i]);
		var row = rowClass.getRow(cnt);
		table.appendChild(row);
	}
}