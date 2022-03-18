//NYC Open API
//Complaints by borough
//Police response
//--------- Burough, Agency, Resolution
//---Manhattan, brooklyn, queens, staten island,
//---Bronx
const API_KEY =`69uh9nbtrfizmousubqdebd1b`;
const BASE_URL = `https://data.cityofnewyork.us`;
const main = document.querySelector('#main');
const searchInput = document.querySelector('#search');
const brooklyn = document.querySelector('#brooklyn');
const manhattan = document.querySelector('#manhattan');
const queens = document.querySelector('#queens');
const bronx = document.querySelector('#bronx');
const staten = document.querySelector('#staten_island');

brooklyn.addEventListener('click', async()=>{
    let listAmount = searchInput.value;
    if(listAmount === ''){ listAmount = 10 }
    else { listAmount = searchInput.value }
    try{
    const response = await axios.get(`${BASE_URL}/resource/erm2-nwe9.json`,
         {
        data: {
          "$limit" : 5000,
          "$$app_token" : API_KEY
        }
    }).then(function(response) {
        let result = response.data;
        console.log(result)
        for(let i = 0; i < listAmount; i++){
            if(result[i].agency === 'NYPD' && result[i].borough === 'BROOKLYN'){
                let event = document.createElement('div');
                let complaint = document.createElement('strong');
                let resolution = document.createElement('button')
                let detail = document.createElement('div');
                event.className = 'event';
                complaint.className = 'complaint';
                resolution.className = 'resolution';
                detail.className = 'detail';
                main.appendChild(event);
                event.appendChild(complaint);
                event.appendChild(resolution);
                main.appendChild(detail);
                complaint.innerHTML = result[i].descriptor;
                resolution.style.display = 'block';
                resolution.innerHTML = 'WHAT DID THE POLICE DO?';
                detail.innerHTML = `${result[i].borough} / ${result[i].agency} ${result[i].created_date}: ${result[i].resolution_description}`;
                detail.style.display = 'none';
                resolution.addEventListener('click', (e)=>{
                    if(e.target.className === 'resolution'){
                        let info = e.target.parentNode.nextElementSibling;
                        if(info.style.display === 'none'){
                            info.style.display = 'block';
                        }else{info.style.display = 'none'}
                     }
                });
            }else{ listAmount++ }
        }
    });
}catch(error){
    console.log(error)
}

});
////////////////////////Manhattan
manhattan.addEventListener('click', async()=>{
    let listAmount = searchInput.value;
    if(listAmount === ''){ listAmount = 10 }
    else { listAmount = searchInput.value }
    try{
    const response = await axios.get(`${BASE_URL}/resource/erm2-nwe9.json`,
         {
        data: {
          "$limit" : 5000,
          "$$app_token" : API_KEY
        }
    }).then(function(response) {
        let result = response.data
        console.log(result)
        for(let i = 0; i < listAmount; i++){
            if(result[i].agency === 'NYPD' && result[i].borough ==='MANHATTAN' ){
                let event = document.createElement('div');
                let complaint = document.createElement('strong');
                let resolution = document.createElement('button')
                let detail = document.createElement('div');
                event.className = 'event';
                complaint.className = 'complaint';
                resolution.className = 'resolution';
                detail.className = 'detail';
                main.appendChild(event);
                event.appendChild(complaint);
                event.appendChild(resolution);
                main.appendChild(detail);
                complaint.innerHTML = result[i].descriptor;
                resolution.style.display = 'block';
                resolution.innerHTML = 'WHAT DID THE POLICE DO?';
                detail.innerHTML = `${result[i].borough} / ${result[i].agency} ${result[i].created_date}: ${result[i].resolution_description}`;
                detail.style.display = 'none';
                resolution.addEventListener('click', (e)=>{
                    if(e.target.className === 'resolution'){
                        let info = e.target.parentNode.nextElementSibling;
                        if(info.style.display === 'none'){
                            info.style.display = 'block';
                        }else{info.style.display = 'none'}
                     }
                });
            }else{ listAmount+= 1 }
        }
    });
}catch(error){
    console.log(error)
}

});

////////////////////////Queens
queens.addEventListener('click', async()=>{
    let listAmount = searchInput.value;
    if(listAmount === ''){ listAmount = 10 }
    else { listAmount = searchInput.value }
    try{
    const response = await axios.get(`${BASE_URL}/resource/erm2-nwe9.json`,
         {
        data: {
          "$limit" : 5000,
          "$$app_token" : API_KEY
        }
    }).then(function(response) {
        let result = response.data
        console.log(result)
        for(let i = 0; i < listAmount; i++){
            if(result[i].agency === 'NYPD' && result[i].borough ==='QUEENS'){
                let event = document.createElement('div');
                let complaint = document.createElement('strong');
                let resolution = document.createElement('button')
                let detail = document.createElement('div');
                event.className = 'event';
                complaint.className = 'complaint';
                resolution.className = 'resolution';
                detail.className = 'detail';
                main.appendChild(event);
                event.appendChild(complaint);
                event.appendChild(resolution);
                main.appendChild(detail);
                complaint.innerHTML = result[i].descriptor;
                resolution.style.display = 'block';
                resolution.innerHTML = 'WHAT DID THE POLICE DO?';
                detail.innerHTML = `${result[i].borough} / ${result[i].agency} ${result[i].created_date}: ${result[i].resolution_description}`;
                detail.style.display = 'none';
                resolution.addEventListener('click', (e)=>{
                    if(e.target.className === 'resolution'){
                        let info = e.target.parentNode.nextElementSibling;
                        if(info.style.display === 'none'){
                            info.style.display = 'block';
                        }else{info.style.display = 'none'}
                     }
                });
            }else{ listAmount += 1 }
        }
    });
}catch(error){
    console.log(error)
}

});


////////////////////////BRONX
bronx.addEventListener('click', async()=>{
    let listAmount = searchInput.value;
    if(listAmount === ''){ listAmount = 10 }
    else { listAmount = searchInput.value }
    try{
    const response = await axios.get(`${BASE_URL}/resource/erm2-nwe9.json`,
         {
        data: {
          "$limit" : 5000,
          "$$app_token" : API_KEY
        }
    }).then(function(response) {
        let result = response.data
        console.log(result)
        for(let i = 0; i < listAmount; i++){
            if(result[i].agency === 'NYPD' && result[i].borough ==='BRONX'){
                let event = document.createElement('div');
                let complaint = document.createElement('strong');
                let resolution = document.createElement('button')
                let detail = document.createElement('div');
                event.className = 'event';
                complaint.className = 'complaint';
                resolution.className = 'resolution';
                detail.className = 'detail';
                main.appendChild(event);
                event.appendChild(complaint);
                event.appendChild(resolution);
                main.appendChild(detail);
                complaint.innerHTML = result[i].descriptor;
                resolution.style.display = 'block';
                resolution.innerHTML = 'WHAT DID THE POLICE DO?';
                detail.innerHTML = `${result[i].borough} / ${result[i].agency} ${result[i].created_date}: ${result[i].resolution_description}`;
                detail.style.display = 'none';
                resolution.addEventListener('click', (e)=>{
                    if(e.target.className === 'resolution'){
                        let info = e.target.parentNode.nextElementSibling;
                        if(info.style.display === 'none'){
                            info.style.display = 'block';
                        }else{info.style.display = 'none'}
                     }
                });
            }else{ listAmount += 1 }
        }
    });
}catch(error){
    console.log(error)
}

});

////////////////////////BRONX
staten.addEventListener('click', async()=>{
    let listAmount = searchInput.value;
    if(listAmount === ''){ listAmount = 10 }
    else { listAmount = searchInput.value }
    try{
    const response = await axios.get(`${BASE_URL}/resource/erm2-nwe9.json`,
         {
        data: {
          "$limit" : 5000,
          "$$app_token" : API_KEY
        }
    }).then(function(response) {
        let result = response.data
        console.log(result)
        for(let i = 0; i < listAmount; i++){
            if(result[i].agency === 'NYPD' && result[i].borough ==='STATEN ISLAND'){
                let event = document.createElement('div');
                let complaint = document.createElement('strong');
                let resolution = document.createElement('button')
                let detail = document.createElement('div');
                event.className = 'event';
                complaint.className = 'complaint';
                resolution.className = 'resolution';
                detail.className = 'detail';
                main.appendChild(event);
                event.appendChild(complaint);
                event.appendChild(resolution);
                main.appendChild(detail);
                complaint.innerHTML = result[i].descriptor;
                resolution.style.display = 'block';
                resolution.innerHTML = 'WHAT DID THE POLICE DO?';
                detail.innerHTML = `${result[i].borough} / ${result[i].agency} ${result[i].created_date}: ${result[i].resolution_description}`;
                detail.style.display = 'none';
                resolution.addEventListener('click', (e)=>{
                    if(e.target.className === 'resolution'){
                        let info = e.target.parentNode.nextElementSibling;
                        if(info.style.display === 'none'){
                            info.style.display = 'block';
                        }else{info.style.display = 'none'}
                     }
                });
            }else{ listAmount += 1 }
        }
    });
}catch(error){
    console.log(error)
}

});