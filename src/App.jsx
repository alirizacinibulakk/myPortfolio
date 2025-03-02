import './App.css';
import TiltImage from './components/TiltImage';

function App() {

  return (
    <>
      <header>
        <h1>ARC.</h1>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/alirizacinibulak/" target="_blank" alt="linkedin">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1ZM3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4Z" fill="#2D3648" />
              <path fillRule="evenodd" clipRule="evenodd" d="M16 7C14.1435 7 12.363 7.7375 11.0503 9.05025C9.7375 10.363 9 12.1435 9 14V21C9 21.5523 9.44771 22 10 22H14C14.5523 22 15 21.5523 15 21V14C15 13.7348 15.1054 13.4804 15.2929 13.2929C15.4804 13.1054 15.7348 13 16 13C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4804 17 13.7348 17 14V21C17 21.5523 17.4477 22 18 22H22C22.5523 22 23 21.5523 23 21V14C23 12.1435 22.2625 10.363 20.9497 9.05025C19.637 7.7375 17.8565 7 16 7ZM16 9C14.6739 9 13.4021 9.52678 12.4645 10.4645C11.5268 11.4021 11 12.6739 11 14V20H13V14C13 13.2043 13.3161 12.4413 13.8787 11.8787C14.4413 11.3161 15.2043 11 16 11C16.7957 11 17.5587 11.3161 18.1213 11.8787C18.6839 12.4413 19 13.2043 19 14V20H21V14C21 12.6739 20.4732 11.4021 19.5355 10.4645C18.5979 9.52678 17.3261 9 16 9Z" fill="#2D3648" />
              <path fillRule="evenodd" clipRule="evenodd" d="M1 9C1 8.44772 1.44772 8 2 8H6C6.55228 8 7 8.44772 7 9V21C7 21.5523 6.55228 22 6 22H2C1.44772 22 1 21.5523 1 21V9ZM3 10V20H5V10H3Z" fill="#2D3648" />
            </svg>
          </a>
          <a href="https://www.github.com/alirizacinibulakk" target='_blank'><img src="\images\icon-github.svg" alt="github" /></a>
        </div>
      </header >
      <div className="cv-preview">
        <img className='profile-img' src="/images/profile-img.svg" alt="profile photo" />
        <h2>Ali Rıza Çinibulak</h2>
        <p>Frontend Developer</p>
        <div className="contact">
          <p>
            <img src="/images/icon-mail.svg" alt="email" />
            <span>
              <a href="mailto:alirizacinibulak@gmail.com">alirizacinibulak@gmail.com</a>
            </span>
          </p>
          <p>
            <img src="/images/icon-map.svg" alt="location" />
            <span>İstanbul, Turkey</span>
          </p>
          <p>
            <img src="/images/icon-briefcase.svg" alt="briefcase" />
            <span>Full-time / Freelancer</span>
          </p>
          <p>
            <img src="/images/icon-link.svg" alt="website" />
            <span>www.alirizacinibulak.com</span>
          </p>
        </div>
        <div className="skills">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
          </ul>
        </div>
        <a href="">Download CV <img src="/images/icon-download.svg" alt="download cv" /></a>
      </div>
      <div className="about-me">
        <div className="about-me-title">
          <span>&lt;h1&gt;</span>
          <h1>
            <span className="greeting">Hey</span>
            <span className="name">I'm <span>Ali Riza</span>,</span>
            <span className="role">Frontend Developer</span>
          </h1>
          <span>&lt;/h1&gt;</span>
        </div>
        <div className="about-me-content">
          <span>&lt;p&gt;</span>
          <p>I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
          <span>&lt;/p&gt;</span>
        </div>
        <a href="https://www.linkedin.com/in/alirizacinibulak/" target='_blank'>Let's Talk<span><img src="/images/icon-mail.svg" alt="email" /></span></a>
      </div>
      <div className="about-me-container">
        <h2>About me</h2>
        <img src="/images/me.jpg" alt="" />
        <div className="about-me-text">
          <span>&lt;p&gt;</span>
          <h3>Hello!</h3>
          <p>
            My name is Ali Riza and I specialize in web development that utilizes
            <span> HTML</span>,
            <span> CSS</span>,
            <span> JS</span> and
            <span> REACT</span> etc.
          </p>
          <p>
            I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
          </p>
          <p>
            When I'm not coding, I am
            <span> writing blogs</span>, reading, or picking up
            some new hands-on art project like
            <span> photography</span>.
          </p>
          <p>
            I like to have my perspective and belief systems challenged so that I see the world through new eyes.
          </p>
          <span>&lt;/p&gt;</span>
        </div>
      </div>
      <div className="skills-container">
        <h2>Skills</h2>
        <p>I am striving to never stop learning and improving</p>
        <div className="skills-list">
          <div className="skill">
            <img src="/images/icon-html.svg" alt="html" />
            <span>HTML</span>
          </div>
          <div className="skill">
            <img src="/images/icon-css.svg" alt="css" />
            <span>CSS</span>
          </div>
          <div className="skill">
            <img src="/images/icon-js.svg" alt="js" />
            <span>JS</span>
          </div>
          <div className="skill">
            <img src="/images/icon-react.svg" alt="react" />
            <span>React</span>
          </div>
          <div className="skill">
            <img src="/images/icon-nextjs.svg" alt="next.js" />
            <span>Next.js</span>
          </div>          <div className="skill">
            <img src="/images/icon-supabase.svg" alt="supabase" />
            <span>Supabase</span>
          </div>          <div className="skill">
            <img src="/images/icon-git.svg" alt="git" />
            <span>GIT</span>
          </div>          <div className="skill">
            <img src="/images/icon-postman.svg" alt="postman" />
            <span>Postman</span>
          </div>
        </div>
      </div>
      <div className="works-container">
        <h2>Works</h2>
        <p>I had the pleasure of working with these awesome projects</p>
        <div className="work-list">
          <TiltImage
            src="/images/work1.png"
            alt="kanban task management"
            description="Kanban Task Management"
            projectLink="https://kanban-task-management-web-app-jet.vercel.app/"
            codeLink="https://github.com/alirizacinibulakk/ASK-task-management-web-app"
          />
          <TiltImage
            src="/images/work2.png"
            alt="feedback web app"
            description="Feedback Board"
            projectLink="https://feedback-board-afk-g.vercel.app"
            codeLink="https://github.com/alirizacinibulakk/kamp-feedbackApp-AFK-G"
          />
          <TiltImage
            src="/images/work3.png"
            alt="feedback web app"
            description="Audiophile E-commerce Website"
            projectLink="https://camp-project1-ecommerce-website.vercel.app"
            codeLink="https://github.com/alirizacinibulakk/camp-project1-ecommerce-website"
          />
        </div>
      </div>
      <div className="contact-container">
        <h2>Contact</h2>
        <p>If you’re looking for a passionate collaborator to bring your visionary projects to life, let’s connect! Reach out, and let’s brainstorm what we can achieve together. Your ideas matter!</p>
        <div className="contact-footer">
          <h1>ARC.</h1>
          <div className="footer-social-media">
            <a href="https://www.linkedin.com/in/alirizacinibulak/" target='_blank'>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1ZM3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4Z" fill="#2D3648" />
                <path fillRule="evenodd" clipRule="evenodd" d="M16 7C14.1435 7 12.363 7.7375 11.0503 9.05025C9.7375 10.363 9 12.1435 9 14V21C9 21.5523 9.44771 22 10 22H14C14.5523 22 15 21.5523 15 21V14C15 13.7348 15.1054 13.4804 15.2929 13.2929C15.4804 13.1054 15.7348 13 16 13C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4804 17 13.7348 17 14V21C17 21.5523 17.4477 22 18 22H22C22.5523 22 23 21.5523 23 21V14C23 12.1435 22.2625 10.363 20.9497 9.05025C19.637 7.7375 17.8565 7 16 7ZM16 9C14.6739 9 13.4021 9.52678 12.4645 10.4645C11.5268 11.4021 11 12.6739 11 14V20H13V14C13 13.2043 13.3161 12.4413 13.8787 11.8787C14.4413 11.3161 15.2043 11 16 11C16.7957 11 17.5587 11.3161 18.1213 11.8787C18.6839 12.4413 19 13.2043 19 14V20H21V14C21 12.6739 20.4732 11.4021 19.5355 10.4645C18.5979 9.52678 17.3261 9 16 9Z" fill="#12F7D6" />
                <path fillRule="evenodd" clipRule="evenodd" d="M1 9C1 8.44772 1.44772 8 2 8H6C6.55228 8 7 8.44772 7 9V21C7 21.5523 6.55228 22 6 22H2C1.44772 22 1 21.5523 1 21V9ZM3 10V20H5V10H3Z" fill="#12F7D6" />
              </svg>
            </a>
            <a href="https://www.github.com/alirizacinibulakk" target='_blank'>
              <img src="/images/icon-github.svg" alt="github" />
            </a>
            <a href="mailto:alirizacinibulak@gmail.com" target='_blank'><img src="/images/icon-mail.svg" alt="" /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
