import {WorkStats} from "../../WorkStats"

export default function () {
    return <div id="storyContents">
        <h1>Moog (Software Engineer)</h1>
        
        <WorkStats 
            company="Moog Inc."
            location="East Aurora, New York"
            position="Software Engineering Intern"
            team="Corporate IT Development"
            dates="May 2019 - August 2019"/>

        <div className="introduction">
            <p>Internships have always provided opportunities for me to dive into new challenges and adventures, solve exciting problems with great people, and demonstrate the advantages of my multidisciplinary background to employers. NASA LaRC was my favorite internship, but in many ways my hardest. I channeled my passion for learning both on the job and outside of work while working under the weirdest of circumstances at the height of the pandemic.</p>
        </div>

        <h3>How I Got the Job</h3>

        <p>I knew that getting my first corporate internship would be an uphill battle, especially because on the surface, software engineering teams have no reason to hire someone studying “Applied Arts and Sciences” over a computer science or software engineering major. However, my eagerness to learn paid off since I had C# from a personal project I was writing using .NET, and the Moog Corporate IT team had a hard time finding people familiar with that tech stack since C# is not taught in any CS or SE classes. Additionally, I got more experienced with pitching myself through my experience at Friendzone and learned about the techniques for software engineering interviewing at CSH. </p>

        <h3>Scope</h3>

        <p>Moog is an industrial manufacturer of servo valves and other aircraft components located near Buffalo, New York. While they have some teams doing embedded software development, I was on the corporate IT team that made the internal tools and software that help in running the company. My first task was to compare various testing tools for running unit, coverage, integration, and performance tests on the C# backend codebases and recommend a testing strategy. At the same time, I was eager to take on additional projects and expose myself to more technologies. One project I got involved in was configuring an Azure DevOps pipeline to handle and store MQTT data streams from dozens of IoT devices that would be monitoring the factory floor. Another project that I was the responsible engineer for was a new web application that would demonstrate the advantages of Single-Page Application frameworks over the current ASP.NET stack the team was currently using. I designed the frontend for an ITAR-registration internal application in Adobe XD, then wrote the front end using Vue (with the Vuetify component library) and Sass for styling.</p>

        <h3>Extra Learning</h3>

        <p>Outside of projects I also took many tours provided by the internship program of the manufacturing facilities where I got a basic introduction to what mechanical and industrial engineering work looks like. The Moog internship program also hosted a near-weekly Lunch-and-Learn’s given by very experienced engineers. Getting these previews of the mechanical world helped me set my expectations for my mechanical engineering classes and internships. 

        I also did a little exploration of the Buffalo area while I was there, especially how I can improve my making skills. I found a makerspace called The Foundary where I met an electrical engineer who helped me make my business card and took a welding class where I created a laptop stand.
        </p>
    </div>
}