function projectsCreation(input) {
    let architectsName = input[0];
    let countProjects = Number(input[1]);
    let neededHour = countProjects * 3;

    console.log(`The architect ${architectsName} will need ${neededHour} hours to complete ${countProjects} project/s.`)
}

projectsCreation(["George", "4"]);
projectsCreation(["Sanya", "9"]);