import self from "../img/self.jpg"
import project1 from "../img/project1.png"
import project2 from "../img/project2.png"




/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = true;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: " Ajith Saiteja",
    lastName: "Baddi",
    initials: "BAST", 
    position: "a front-end Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        
        {
            emoji: "📧",
            text: "ajithsaiteja.baddi@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "As an accomplished Front-end Developer with 2 years and 3 months of specialized experience in React JS, I excel in creating dynamic and responsive web applications using HTML5, CSS3, JavaScript, and state management libraries like Redux and Context API. With a proven track record in developing single-page applications (SPAs) based on React core principles, I adeptly convert business requirements into effective technical solutions. My strong analytical, problem-solving, and interpersonal skills make me an invaluable and collaborative team player.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'photoshop'],
            exposedTo: ['nodejs', 'python' ]
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
        , {
            label: 'swmming',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://bast-cinetalk.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/basaiteja/CineTalk.git", // this should be a link to the **repository** of the project, where the code is hosted.
            image: project1
        },
        {
            title: "Project 2",
            live: "https://bast-travel-agency.netlify.app/",
            source: "https://github.com/basaiteja/travel-agency-website.git",
            image: project2
        },
        {
            title: "Project 3",
            live: "https://basaiteja.netlify.app/about",
            source: "https://github.com/basaiteja",
            image: project2
        },
        {
            title: "Project 3",
            live: "https://basaiteja.netlify.app/about",
            source: "https://github.com/basaiteja",
            image: project2
        },
    ]
}