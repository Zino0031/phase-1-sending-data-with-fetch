function submitData(username, useremail) {
    const formData = {
      name: username,
      email: useremail
    };
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    };
  
     const result = fetch("http://localhost:3000/users", options)
      .then(res => res.json())
      .then(data => { 
 
    document.body.innerHTML = data.id;
       
      })
      .catch(error => {
        document.body.innerHTML = error.message;
  
    });
    return result;
}

submitData();