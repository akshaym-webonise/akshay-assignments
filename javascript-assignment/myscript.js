var isProgressTableActive = false;
var isHistoryActive = false;

function loadTheData()
{			
	displayTable("toDoTable", "toDoList", "To Do Tasks", 3);
	displayTable("completedTable", "completedList", "Completed Tasks", 2);
	if(isProgressTableActive)
		displayTable("progressTable", "inProcessList", "In Process Tasks", 3);
	if(isHistoryActive)
		displayTable("historyTable", "historyList", "Task History", 1);
}

function getRow(data, cols)
{
	var row = document.createElement('tr'); 
	var col1 = document.createElement('td'); 
	col1.innerHTML=data;
	row.appendChild(col1);
	if(cols>1)
	{
		var col2 = document.createElement('td');
		col2.width="15px";
		col2.innerHTML = '<input type="button" id="delButton" onclick="deleteRow(this)" value="X" class="btn-style"></input>';
		row.appendChild(col2);
	}
	if(cols>2)
	{
		var col3 = document.createElement('td');
		col3.width="15px";
		col3.innerHTML = '<input type="button" id="delButton" onclick="shiftToNext(this)" value="Y" class="btn-style"></input>';
		row.appendChild(col3);
	}
	return row;
}		

function createRow()
{
	var task = document.getElementById("inputText");
    var table = document.getElementById("toDoTable");
	var row = getRow(task.value, 3);
	table.appendChild(row);
	task.value="";
	addToLocalStorage("toDoList", row.firstChild.innerHTML);
	addToLocalStorage("historyList", row.firstChild.innerHTML);
	if(isHistoryActive)
		displayTable("historyTable", "historyList", "Task History", 1);
}

function deleteRow(object)
{
	var table = document.getElementById(object.parentNode.parentNode.parentNode.id);
	deleteFromLocal(table.id, (object.parentNode.previousSibling).innerHTML);
	table.deleteRow(object.parentNode.parentNode.rowIndex);
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
	{
		tab="";
	}
	else
	{
		var myRows = tab.split(',');
		for(i=0 ; i<myRows.length-1 ; i++)
		{
			if(myRows[i]!==data)
			{
				newRows=newRows+myRows[i]+",";
			}
		}
	}
	localStorage.setItem(storage,newRows);
}

function shiftToNext(row)
{
	var rowNum = row.parentNode.parentNode.rowIndex;
	var oldTableName = row.parentNode.parentNode.parentNode.id;
	var text = (document.getElementById(oldTableName).rows[rowNum]).firstChild.innerHTML;
	deleteFromLocal(oldTableName, text);
	document.getElementById(oldTableName).deleteRow(rowNum);
	if(isProgressTableActive && oldTableName=="toDoTable")
	{
		var newTableName = "progressTable";		
		var row = getRow(text, 3);		
	}
	else if(isProgressTableActive && oldTableName=="progressTable")
	{
		var newTableName = "completedTable";
		var row = getRow(text, 2);
	}
	else
	{
		var newTableName = "completedTable";
		var row = getRow(text, 2);
	}
	var table = document.getElementById(newTableName);
	table.appendChild(row);				
	addToLocalStorage(getList(newTableName), row.firstChild.innerHTML);
}

function addToLocalStorage(Storage, data)
{
	var tab = localStorage.getItem(Storage);
	if(tab==null)
	{
		console.log(Storage+" is null");
		tab="";
	}
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
		var row = getRow(myRows[i], cnt);
		table.appendChild(row);
	}
}

function setProgress()
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
}

function setHistory()
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
}

function clearLocalStorage()
{
	localStorage.clear();
}
