const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const calculate = (firstNum,secondNum,operator) =>
	fetch(`${api}/api/calculate`, {
	    method: 'POST',
	    headers: {
	        ...headers,
	        'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({firstNum:firstNum,secondNum:secondNum,operator:operator})
	}).then(res => {
	    return res.json();
	}).catch(error => {
        return error;
    });
