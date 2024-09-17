import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Life Task Helper',
        description: "Me and my Team Developed an android application that allows the user to take notes when they perform a specific task at a date, location or they can make a note, of that action. then they can review the notes they took when they were at that time, and schedule when they a reminder would notify them to perform the action again, all information is using SQL Data tables to make a linked table, for that specific task. as well as the Moibile Geo locations and address to global cordinates.",
        tools: ['SQLlite', 'Android', 'Google Maps API', 'Android Location'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Sport Data API',
        description: 'I developed an application using Rest API to Retrieve the scores of a sport team using theSportsDB.com for the API Data. using the Koltin Language and MVVM Archetecture to Create and android application.',
        tools: ['RestAPI',"MVVM Archetcture"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'Predict Pay Days',
        description: 'I have made an application that generates the Paydays and time periods that you would get paid on. this uses Winforms and the Date Library to predict what months give you 3 pay days and what days you will be paid. also the dates are copy and pasteable so you can put it into your own notes or excel spread sheet.',
        tools: ['Date Libraty'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    }
];

//description: "Me and my team built an AI-powered financial mobile application. 
// I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, 
//and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. 
//Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
//

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },