// Renders manager information
/*function renderManager(manager) {
  return `    <div class="card manager flex-container">
          <div class="card-top">
              <h2>${manager.getName()}</h2>
              <h3><i class="fas fa-user-tie"></i> ${manager.getRole()}</h3>
          </div>
          <div class="card-bottom">
              <p>
              <i class="far fa-id-card"></i> ID #${manager.getId()}<br>
              <i class="far fa-envelope"></i> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a><br>
              <i class="far fa-building"></i> Office #${manager.officeNumber}
              </p>
          </div>
      </div>
`
}

// Renders engineer information
function renderEngineer(engineer) {
  return `        <div class="card engineer flex-container">
          <div class="card-top">
              <h2>${engineer.getName()}</h2>
              <h3><i class="fas fa-laptop-code"></i> ${engineer.getRole()}</h3>
          </div>
          <div class="card-bottom">
              <p>
                  <i class="far fa-id-card"></i> ID #${engineer.getId()}<br>
                  <i class="far fa-envelope"></i> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a><br>            
                  <i class="fab fa-github"></i> <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a>
              </p>
          </div>
      </div>
`
}

// Renders intern information
function renderIntern(intern) {
  return `        <div class="card intern flex-container">
          <div class="card-top">
              <h2>${intern.getName()}</h2>
              <h3><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h3>
          </div>
          <div class="card-bottom">
              <p>
                  <i class="far fa-id-card"></i> ID #${intern.getId()}<br>
                  <i class="far fa-envelope"></i> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a><br>    
                  <i class="fas fa-graduation-cap"></i> ${intern.getSchool()}        
              </p>
          </div>
      </div>
`
}

// Renders whole team 
function renderTeam(teamArray) {
  let html = "";
  for (var i = 0; i < teamArray[0].length; i++) {
      html += renderManager(teamArray[0][i]);
  }

  // Sorts engineer array (within team array) by ID (ascending)
  teamArray[1].sort(function(a, b) {
      return a.id - b.id;
  })

  for (var i = 0; i < teamArray[1].length; i++) {
      html += renderEngineer(teamArray[1][i]);
  }

  // Sorts intern array (within team array) by ID (ascending)
  teamArray[2].sort(function(a, b) {
      return a.id - b.id;
  })

  for (var i = 0; i < teamArray[2].length; i++) {
      html += renderIntern(teamArray[2][i]);
  }
  return html;
}

// Generates team profile HTML page template
function generateHTML(teamArray) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <header>
    <h1>Our Team</h1>
  </header>
  <main>
  <div class ="flex-wrap">
  ${renderTeam(teamArray)}
  </div>
  </main>
</body>
</html>`;
}

module.exports = generateHTML;*/

const managerCard = (teamArray) => {
    
    return `<section>
    <div class="container">
        <div class="manager">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <div class="card-header bg-primary text-white">
                    <h4 class="card-title"><span class="material-icons">local_cafe</span>${teamArray.getName()}</h4>
                    <h5 class="card-subtitle mb-2">Manager</h5>
                    </div>
                    <p></p>
                    <h6 class="card-text">ID: ${teamArray.id}</h6>
                    <h6 class="card-text">Email: <a href="mailto:${teamArray.email}">${teamArray.email}</a></h6>
                    <h6 class="card-text">Office Number: ${teamArray.officeNumber}</h6>
                </div>
            </div>
        </div>
    </div>
    </section>`
    
    };
    
    const engineerCard = (teamArray) => {
    
        return `<section>
            <div class="container">
                <div class="engineer">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-header bg-primary text-white">
                            <h4 class="card-title"><span class="material-icons">engineering</span>${teamArray.name}</h4>
                            <h5 class="card-subtitle mb-2">Engineer</h5>
                            </div>
                            <p></p>
                            <h6 class="card-text">ID: ${teamArray.id}</h6>
                            <h6 class="card-text">Email: <a href="mailto:${teamArray.email}">${teamArray.email}</a></h6>
                            <h6 class="card-text">GitHub: <a href="https://github.com/${teamArray.github}" target="_blank" rel="noopener noreferrer">${teamArray.github}</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
        }
    
        const internCard = (teamArray) => {
        
            return `
        <section>
            <div class="container">
                <div class="intern">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                            <div class="card-header bg-primary text-white">
                            <h4 class="card-title"><span class="material-icons">school</span>${teamArray.name}</h4>
                            <h5 class="card-subtitle mb-2">Intern</h5>
                            </div>
                            <p></p>
                            <h6 class="card-text">ID: ${teamArray.id}</h6>
                            <h6 class="card-text">Email: <a href="mailto:${teamArray.email}">${teamArray.email}</a></h6>
                            <h6 class="card-text">School: ${teamArray.school}</h6>
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
        console.log(cardInput);
        return cardInput;
       
    }
    
    //export function to generate entire page
    const generateHTML = (teamArray) => {
        //destructure page teamArraya by type of employee... 
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
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    <main>
        <div class="flex-wrap">
    ${cards(teamArray)}
    </div>
    </main> 
    </body>
    </html>
        `;
    };
    
    module.exports = generateHTML;