//Javasciprt define classes: https://www.w3schools.com/js/js_classes.asp
class Project {
    constructor(time, alt, src, title, description, list1, list2){
        this.time = time;
        this.alt = alt;
        this.src = src;
        this.title = title;
        this.description = description;
        this.list1 = list1;
        this.list2 = list2; 
    }

}

const project1 = new Project(20220430, "umap", "assets/img/map-logo.png", "Umap", "A map for UofT student", 
    "Developed the front-end, back-end and unit-testing of a GIS system targeted towards university students",
    "Implemented new APIs to access data from a larger than 1 GB database and applied various STL data structures for optimization.");
const project2 = new Project(20220830, "smile", "assets/img/smile-logo.jpg", "Smiling Machine", 
    "A GenAI-based model that turns non-smiling pictures into smiling pictures ",
    "Developed a conditional deep convolutional generative adversarial network (cDCGAN) to generate smiling face images abnd showcased the result with Tensorboard",
    "Generated reports on analyzing the difficulty in GAN training, and received a mark of 90 under evaluation");

// Javascript function: https://www.w3schools.com/js/js_functions.asp 
function generateHTML(project){
    return `<div class="col s12 m6 l4">
            <div class="card medium">
              <div class="card-image waves-effect waves-block waves-light">
                <img alt="${project.alt}" src="${project.src}" style="height: 100%; width: 100%" class="activator" />
              </div>
              <div class="card-content">
                <span class="card-title activator teal-text hoverline">${project.title}<i
                    class="mdi-navigation-more-vert right"></i></span>
                <p>
                    ${project.description}
                </p>
              </div>
              <div class="card-reveal">
                <!-- TODO: change this -- only close button -->
                <!-- <span class="card-title brown-text">Accomplishments<i class="mdi-navigation-close right"></i></span> -->
                <span class="card-title grey-text"><small>Accomplishments</small><i
                    class="mdi-navigation-close right"></i></span>
                <ul>
                  <li>${project.list1}</li>
                  <li>${project.list2}</li>
                </ul>
              </div>
            </div>
          </div>`;
}
// Javascript arrays: https://www.w3schools.com/js/js_arrays.asp
const projects = [project1, project2];

// Javascript Numeric sort: https://www.w3schools.com/js/js_array_sort.asp#mark_numeric
// project[0] is the latest 
projects.sort(function(a, b){return b.time - a.time});

document.getElementById("recent_projects").innerHTML = generateHTML(projects[0]);



