const body = {'name': 'camera.listFiles',
              "parameters": {
                  "fileType": "all",
                  "entryCount": 5,
                  "maxThumbSize": 0   
    }
}
const response = await fetch('https://fake-theta.vercel.app/osc/commands/execute', 
	{method: 'POST', 
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json'}
});
const data =  await response.json();

const prettyData = JSON.stringify(data,null,4)

console.log(prettyData);