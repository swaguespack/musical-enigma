// Creates manager card
const managerCard = (teamArray) => {
    
    return `<section>
    <div class="container is-fluid">
        <div class="manager">
                <div class="card">
                    <div class="card-header has-background-primary has-text-white">
                    <h4 class="card-header-title has-text-white">${teamArray.name}</h4>
                    <h5 class="card-header-icon has-text-weight-semibold is-size-5"><span class="material-icons p-1">local_cafe</span>Manager</h5>
                    </div>
                    <div class="card-content">
                    <h6 class="p-2 is-size-5">ID: ${teamArray.id}</h6>
                    <h6 class="p-2 is-size-5">Email: <a href="mailto:${teamArray.email}">${teamArray.email}</a></h6>
                    <h6 class="p-2 is-size-5">Office Number: ${teamArray.officeNumber}</h6>
                    </div>
                 </div>
        </div>
    </div>
    </section>`
    
    };
    
// Creates engineer card
    const engineerCard = (teamArray) => {
    
        return `<section>
            <div class="container is-fluid">
                <div class="engineer">
                    <div class="card">
                            <div class="card-header has-background-primary has-text-white">
                            <h4 class="card-header-title has-text-white">${teamArray.name}</h4>
                            <h5 class="card-header-icon has-text-weight-semibold is-size-5"><span class="material-icons p-1">engineering</span>Engineer</h5>
                            </div>
                            <div class="card-content">
                            <h6 class="p-2 is-size-5">ID: ${teamArray.id}</h6>
                            <h6 class="p-2 is-size-5">Email: <a href="mailto:${teamArray.email}">${teamArray.email}</a></h6>
                            <h6 class="p-2 is-size-5">GitHub: <a href="https://github.com/${teamArray.github}" target="_blank" rel="noopener noreferrer">${teamArray.github}</a></h6>
                            </div>
                        </div>
                </div>
            </div>
        </section>`;
        }
    
    // Creates intern card
        const internCard = (teamArray) => {
        
            return `
        <section>
            <div class="container is-fluid">
                <div class="intern">
                        <div class="card">
                        <div class="card-header has-background-primary has-text-white">
                        <h4 class="card-header-title has-text-white">${teamArray.name}</h4>
                        <h5 class="card-header-icon has-text-weight-semibold is-size-5"><span class="material-icons p-1">school</span>Intern</h5>
                            </div>
                            <div class="card-content">
                            <h6 class="p-2 is-size-5">ID: ${teamArray.id}</h6>
                            <h6 class="p-2 is-size-5">Email: <a href="mailto:${teamArray.email}">${teamArray.email}</a></h6>
                            <h6 class="p-2 is-size-5">School: ${teamArray.school}</h6>
                            </div>
                        </div>
                    
                </div>
            </div>
        </section>
        `;
        
        
    }
    
    
    const cards = teamArray => {
        var cardInput = '';
        for (i=0; i < teamArray.length; i ++) {
            console.log(teamArray[i])
            if (teamArray[i].getRole() === 'Manager') {
                cardInput += managerCard(teamArray[i]);
            }
            else if (teamArray[i].getRole() === 'Intern'){
                cardInput += internCard(teamArray[i]);
            }
            else if (teamArray[i].getRole() === 'Engineer') {
                cardInput += engineerCard(teamArray[i]);
            }
        }
        return cardInput;
       
    }

    const generateHTML = (teamArray) => {

        console.log(teamArray);
        
       
        return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Portfolio</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
        <header class="hero is-primary p-6 has-text-centered">
            <h1 class="title">My Team</h1>
        </header>
    <main class="hero-body">
        <div class="is-flex is-justify-content-center">
    ${cards(teamArray)}
    </div>
    </main> 
    </body>
    </html>
        `;
    };
    
    module.exports = generateHTML;