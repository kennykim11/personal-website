import {WorkStats} from "../../WorkStats"

export default function () {
    return <div id="storyContents">
        <h1>Moog (Software Engineer)</h1>
        
        <WorkStats 
            company="NASA (Langley Research Center)"
            location="Hampton, Virginia (Remote)"
            position="Software Engineering Intern"
            team="SmartLab Development Team, Materials Science Directorate"
            dates="January 2021 - May 2021"/>

        <div className="introduction">
            <p>Internships have always provided opportunities for me to dive into new challenges and adventures, solve exciting problems with great people, and demonstrate the advantages of my multidisciplinary background to employers. NASA LaRC was my favorite internship, but in many ways my hardest. I channeled my passion for learning both on the job and outside of work while working under the weirdest of circumstances at the height of the pandemic.</p>
        </div>

        <h3>How I Got the Job</h3>

        <p>A team at NASA LaRC was creating a web application called SmartLab where they could record every single detail about their experiments, including when they happened, who was involved, what the results were observed, which tools were used, who exactly these tools were leased to, etc. But to get funding for this project, they needed to show that it could be used by the entire research center, so they brought on the Unmanned Aerial Systems (UAS) team of mostly aerospace and electrical engineers as a stakeholder and their first customer. This UAS team would use SmartLab to store data about their LiPo batteries every time they charge to be able to see the long term health of the battery and know when to throw it out. The four other software engineering interns who were hired before me did not have any electrical experience, so they were looking for a student with experience in backend with Django, frontend with React, data communications protocols with Modbus (a fairly obscure industrial communications protocol), and knowledge about LiPo battery charging fundamentals. My history of taking up projects during work and free time paid off hugely here - I had briefly touched Django during a hackathon project two years before, was currently working on a personal web project in React, used Modbus in one of the many tiny projects at HTL, and was designing a battery charging circuit (mine was NiMH) for a large electronics project I had a time. </p>

        <h3>Scope</h3>

        <p>I was tasked to be the go between the two teams and create the Python drivers that would pull data from the battery charger when a battery was plugged in and push it to the SmartLab API. In the first couple of weeks, I wrote the driver in Python for the specific battery charger that the UAS team used, going off of mediocre documentation from the manufacturer. A simple interface was designed using tkinter to run on a computer permanently plugged into the charger and push data to the SmartLab database. However, the API wasn’t ready once I finished with the driver so I assisted with frontend and backend development. </p>

        <h3>Extra Learning</h3>

        <p>Like all of my other internships, I asked my managers for additional side projects that I could work on. My managers on the material science team asked me to create a 3D stiffness tensor calculator that used generalized Hooke’s Law. NASA also held many online cross-center seminars and virtual tours, so I attended as many of those as possible. During these many presentations, I noticed that NASA employees were some of the friendliest, most passionate, and most interesting people I have ever seen at a company. Halfway through the semester, I realized that while I have a NASA email, I could reach out to experts like rocket engineers, mission controllers, and aerospace scientists and learn directly from the experts. I started working after hours and instead spent much of my working hours reaching out to people, doing some research before the meeting, asking lots of questions, taking tons of notes, and learning things I otherwise never would have.</p>
    
        <p>This internship was one of the most challenging, not because of the work but because of the environment. It was the first remote internship and I decided to live with my friend in Poughkeepsie, NY, even though I didn’t know anybody else there. It was impossible to meet other people in the area since it was during the height of the COVID pandemic, and I quickly got quite lonely. To combat this, I started going to many of the online social events hosted by PAXC (the cross-center intern/co-op organization) and quickly volunteered to help on the social committee. There, I organized some game nights and even gave two seminars on Python tips and tricks, where I got some feedback from attendees saying that it was very helpful. In summary, I learned a massive amount thanks to so many employees who spent the time talking about their projects to me, and I’m also glad that I was able to give back with my skills in a small way. </p>
    </div>
}