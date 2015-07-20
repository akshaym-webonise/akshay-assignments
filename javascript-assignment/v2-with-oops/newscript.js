var isProgressTableActive = false;
var isHistoryActive = false;
var genericTable;
var storageManager;

/******************************************** Form Loading ***********************************************/

function loadTheData()
{	
	genericTable = new GenericTable();
	storageManager = new StorageManager();
	document.getElementById("inputButton").addEventListener("click", function()
	{
		var task = document.getElementById("inputText");
		if(task.value=="" || task.value==null)
		{
			alert("Please enter some task");
			return;
		}
		genericTable.addRow("toDoTable", task.value);
		console.log("returned");
		task.value="";
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
			genericTable.displayTable("historyTable", genericTable.getColumnCount("historyTable"));
		}
		else
		{
			document.getElementById("historyTable").tBodies[0].innerHTML="";			
		}
	}, false);	
	document.getElementById("progressVisibility").addEventListener("click", function()
	{
		isProgressTableActive = document.getElementById("progressVisibility").checked;
		console.log("progress table activated");
		if(isProgressTableActive)
		{
			genericTable.displayTable("progressTable", genericTable.getColumnCount("progressTable"));
		}
		else
		{
			document.getElementById("progressTable").tBodies[0].innerHTML="";
		}
	}, false);	
	
	var allTables = document.getElementsByTagName("table");
	for(i=0 ; i<allTables.length;i++)
	{
		console.log(i);
		genericTable.displayTable(allTables[i].id, genericTable.getColumnCount(allTables[i].id));
		console.log("returned to "+i);
	}
	genericTable.displayTable(allTables[1].id, genericTable.getColumnCount(allTables[1].id));
}

/******************************************** For row creation ***********************************************/

var Row = function(data)
{
	this.text = data;	
	this.row = document.createElement('tr'); 
	this.getRow = function(cols)
	{
		this.insertColumn(this.text, null, this.row);
		if(cols>1)
			this.insertColumn('<input type="button" id="delButton" onclick="genericTable.deleteRow(this.parentNode.parentNode)" value="X" class="btn-style"></input>', "15px", this.row);
		if(cols>2)
			this.insertColumn('<input type="button" id="shiftButton" onclick="genericTable.shiftToNext(this.parentNode.parentNode)" value="Y" class="btn-style"></input>', "15px", this.row);
		return this.row;
	};

	this.insertColumn = function(data, width, parent)
	{
		var col = document.createElement('td');
		if(width!==null)
		col.width = width;
		col.innerHTML = data;
		parent.appendChild(col);
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

/******************************************** To deal with table operations ***********************************************/

var GenericTable = function()
{
	this.addRow = function(tableName, data)
	{
		var table = document.getElementById(tableName);
		var rowClass = new Row(data);
		var row = rowClass.getRow(genericTable.getColumnCount(tableName));
		table.tBodies[0].appendChild(row);		
		storageManager.addToLocalStorage(this.getList(tableName), rowClass.text);
		if(tableName=="toDoTable")
		{
			storageManager.addToLocalStorage("historyList", rowClass.text);
			if(isHistoryActive)
			this.displayTable("historyTable", "historyList", "Task History", 1);	
		}		
	};

	this.deleteRow = function(object)
	{
		var table = document.getElementById(object.parentNode.parentNode.id);
		storageManager.deleteFromLocal(table.id, object.firstChild.innerHTML);
		table.deleteRow(object.rowIndex);
	};

	this.shiftToNext = function(obj)
	{
		var oldTableName = obj.parentNode.parentNode.id;
		var data = obj.firstChild.innerHTML;
		this.deleteRow(obj);
		console.log(isProgressTableActive+" "+oldTableName);
		if(isProgressTableActive && oldTableName=="toDoTable")
		{
			console.log("in first if");
			var newTableName = "progressTable";		
		}
		else if(isProgressTableActive && oldTableName=="progressTable")
		{
			var newTableName = "completedTable";
		}
		else
		{
			var newTableName = "completedTable";
		}	
		console.log(newTableName+" "+data);
		this.addRow(newTableName, data);
	};
	
	this.getList = function(tableName)
	{
		switch(tableName)
		{
			case "toDoTable":
				return "toDoList";
			case "completedTable":
				return "completedList";
			case "progressTable":
				return "inProcessList";
			case "historyTable":
				return "historyList";
		}
	};

	this.displayTable = function(tableName, cnt)
	{
		console.log(tableName);
		if(tableName=="historyTable" && isHistoryActive==false)
			return;
		if(tableName=="progressTable" && isProgressTableActive==false)
			return;
		var table = document.getElementById(tableName);
		var data = localStorage.getItem(this.getList(tableName));
		var myRows = data.split(',');
		table.tBodies[0].innerHTML = "";
		for(i=0 ; i<myRows.length-1 ; i++)
		{
			var rowClass = new Row(myRows[i]);
			var row = rowClass.getRow(cnt);
			table.tBodies[0].appendChild(row);
		}
		console.log(tableName+" leaving");
	};

	this.getColumnCount = function(tableName)
	{
		switch(tableName)
		{
			case "historyTable":
				return 1;
			case "completedTable":
				return 2;
			default:
				return 3;
		}
	};	
};

/******************************************** To deal with local storage ***********************************************/

var StorageManager = function()
{
	this.addToLocalStorage = function(Storage, data)
	{
		var tab = localStorage.getItem(Storage);
		if(tab==null)
		tab="";
		tab = tab+data+",";
		localStorage.setItem(Storage,tab);
	}

	this.deleteFromLocal = function(tableName, data)
	{
		var storage = genericTable.getList(tableName);
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
	};
};