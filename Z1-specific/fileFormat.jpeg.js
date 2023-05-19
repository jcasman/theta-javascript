const body = {'name': 'camera.setOptions',
              "parameters": {
                "options": {
                    "fileFormat": {'type': 'jpeg','width': 6720,'height': 3360}
        }   
    }
}

const response = await fetch('http://192.168.1.1/osc/commands/execute', 
	{method: 'POST', 
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json'}
});

const data =  await response.json();

console.log(data);