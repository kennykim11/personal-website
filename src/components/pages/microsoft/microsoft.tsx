import {WorkStats} from "../../WorkStats"

import '../story_styles.scss'

export default function () {
    return <div id="storyContents">
        <h1>Microsoft (Software Engineer)</h1>

        <WorkStats 
            company="Microsoft"
            location="Redmond, Washington (Remote)"
            position="Software Engineering Intern"
            team="Backend Engineering, Power Virtual Agents"
            dates="May 2021 - August 2021"/>

        <div className="introduction">
            <p>Internships have always provided opportunities for me to dive into new challenges and adventures, solve exciting problems with great people, and demonstrate the advantages of my multidisciplinary background to employers. NASA LaRC was my favorite internship, but in many ways my hardest. I channeled my passion for learning both on the job and outside of work while working under the weirdest of circumstances at the height of the pandemic.</p>
        </div>

        <h3>How I Got the Job</h3>

        <p>During the time I went to RIT, I was registered with the Spectrum Support Program (SSP), an organization meant to assist students on the autism spectrum. It was during the Fall of 2020 when I was extremely stressed when I got an email from SSP saying that Microsoft had an Autism Hiring Program and had a link to apply. I was extremely serious about wanting to work at Microsoft because of how it had such a broad impact and had fewer issues than many of its competitors. After many anxious weeks of continuously getting pointed to other contacts, I was invited to a 4-day Virtual Assessment Program.</p>

        <p>This assessment was by far my most different interviewing experience - every day our cohort of about 15 applicants had activities designed to help us with the interview process, including Q&A with Microsoft employees, mock interviews, personality quizzes, and ending with 3 rounds of interviews back to back. However, the strangest thing was the group challenge activities on Minecraft that were meant to assess our teamwork skills. The biggest thing I learned during the program was to explain during interviews not only why I was a skilled employee, but how those skills could impact the business. Though the program was offered to a specific demographic, it was still equally competitive, and I only heard one other person who got a n offer in my annual class of 15. After I got my offer, I persistently asked my friendly recruiter to be put on a team that had to do with either machine learning, security, firmware, or OS, and she kindly helped me to find a good team that matched what I wanted to learn about. And now I can say that I played Minecraft as part of my Microsoft software engineering application, not many people can say that :)</p>


        <h3>Scope</h3>

        <p>The team I worked with made Power Virtual Agents, which is Microsoft’s version of the chatbot that assists visitors to company websites. The team worked with a custom version of GPT-3 (two years before ChatGPT came out) to understand user prompts and figure out a way to answer. Our customers were the IT departments at other companies, specifically the developers in those companies that made the public websites. The developers would create flows of how conversations with customers should go and write example pairs of questions visitors ask and what kind of information the chatbot should respond with. I was on the backend engineering team that didn’t directly work on the model, but provided the bridge between the AI algorithms and the user interface.</p>

        <p>My project was to write a website scraper that the developers could use to scrape their own website and automatically generate the question answer pairs. This was an extremely hard problem, since it is hard to tell from just the raw HTML code of a website what text is emphasized, what is invisible, and what is metadata. I used the named entity recognition, language detection, and embedding similar tools created by the data science team to get some confidence about what text might be informational to users. The snippets might be text corresponding to product features, prices, or customer service answers. Unfortunately, I didn’t get to work on an algorithm to generate the questions for the collected informational text since the scraper filtering never had high confidence.</p>


        <h3>Extra Learning</h3>

        <p>Carrying on from the lesson I had just learned at NASA, I attended as many informational sessions for interns and social events as possible, as well as asking tons of engineers from all different departments questions about their work. I learned a ton about everything from accessibility design to Xbox hardware security to the code behind Excel to startup acceleration for Windows to machine learning for control systems.</p>

        <p>However, the biggest lesson I learned was to give myself rest if I wanted to be efficient. It seems counterintuitive, but I was burned out before even starting the job. For reference, the last time I had a break was a year before, and since then, I did my internship at HTL, had an extremely rough experience as a virtual orientation leader, went through a difficult semester in school and as CSH’s R&D director, helped my friend with his business for my 6-week long spring break, worked remotely at NASA and even extended that internship by two weeks, then moved and started work for NASA, and all of this was back to back with only a weekend separating each period. At the same time, I overstretched myself that semester by taking an online Thermodynamics course and buying a Volvo 740 estate to work on. As a result, I was constantly tired and had a very hard time focusing on work. One of my biggest regrets is that I did not learn very much about machine learning and AI during this period when I could have so easily met with experts. </p>

        <p>Working at Microsoft was an extremely different, almost surreal, experience. Though my team was very nice and personable, with 180,000 employees and 4,000 interns alone, it was hard not to feel like a small cog in a machine. The scale of the projects, funding, problems - everything, was incredible. They had an official intern day where interns were made to not work and instead join a Teams meeting where Gabriel Iglesias MC’ed and up-and-coming Olivia Rodrigo sang, things like, “you guys are all doing incredible things at Microsoft!” Some of the interns were complaining that for that summer’s intern gift, we chose what charity to donate $50 to, instead of getting Surface laptops or Xbox X’s like previous years. Overall, it was a very unique internship, from the application to the work to the intern experience.</p>
    </div>
}