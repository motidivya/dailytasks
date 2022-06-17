const requestURL = 'data.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = processData;

console.log(request.response)
    
function processData() {
    const data = request.response;
    const projects = data.projects;
    populateProjectsCardGrid(projects);
    console.log(projects);
}

function populateProjectsCardGrid(projects) {
    const projectCardGrid = document.querySelector('.project-cards-grid');

    if (projects.length > 0) {
        projects.forEach(project => {
            const projectDiv = createElement('div', projectCardGrid);
            const titleH1 = createElement('h1', projectDiv);
            titleH1.textContent = project.name;
            
            const clientH2 = createElement('h2', projectDiv);
            clientH2.textContent = project.client;
            
            const summaryDiv = createElement(
                'div',
                projectDiv,
                'project-summary',
            );
            
            const summaryPara = createElement('p', summaryDiv);
            summaryPara.textContent = project.summary;
            
            if (
                project.technologystack !== undefined &&
                project.technologystack.length > 0
            ) {
                const technologyDiv = createElement(
                    'div',
                    projectDiv,
                    'project-technology',
                );
                const technologyUL = createElement('ul', technologyDiv);
                project.technologystack.forEach(item => {
                    const itemLI = createElement('li', technologyUL);
                    itemLI.textContent = item;
                });
            }
        });
    }
}

// createElement helper function
function createElement(type, parent, classList) {
    const element = document.createElement(type);
    if (classList !== undefined) {
        typeof classList === 'Array' && classList.length > 0
            ? element.classList.add(...classList)
            : (element.className = classList);
    }
    parent.append(element);
    console.log(parent);
    return element;
}