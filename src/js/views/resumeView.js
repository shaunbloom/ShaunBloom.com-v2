import { elements } from '../base';

export const renderView = (resumeData) => {
	const markup = `
        <section id="resume-page" class="dynamic-content main-content">
            <h1>Resume — <a href="http://www.shaunbloom.com/download/Shaun_Bloom_Resume.docx">DOWNLOAD</a></h1>
            <p><strong>Objective:</strong> To use my experience and knowledge of web-based technologies, object oriented programming, and application development in a high tech solution based environment.</p>
                 
            <p><strong>Professional Experience:</strong></p>
            
            ${ renderJobs(resumeData) }
        
            <p><strong><em>Skills:</em></strong></p>
            <p><strong>Software Apps:</strong> Photoshop CS4, Dreamweaver CS4, Fireworks CS4, Contribute 3, Wordpress, Concrete5, Office 14,  Windows 7, OS X, Putty, SVN, Zend Framework</p>
            <p><strong>Languages:</strong> HTML, DHTML, ASP, PHP, CSS, JavaScript, SQL, XML, Java, VB Script, ADO, CDO, MySQL</p>
            <p><strong>Familiar with:</strong> Zend Framework, Developing on mobile devices, Mobile emulators, Ajax, ASP.NET, C#, Flash</p>
            <p><strong>Personal:</strong>  Enjoy working in a team environment or on my own. Self-starter, quick learner, driven to succeed, 
            have managed teams of people and key projects. Have an excellent understanding of the industry. I am also   currently working with AJAX to expand my skill set.</p>
        
        </section>
	`;

	elements.dynamicContent.insertAdjacentHTML('afterbegin', markup);
};

const renderJobs = (data) => {
    let jobs = "";

    data.forEach(d => {
        jobs  = jobs + `  
            <div class="job-employer">
                <p><strong><em>${d.employer}</em></strong> • ${d.city}, ${d.state} ${d.startDate} – ${d.endDate}</p>
                <p><strong>${d.jobTitle}</strong></p>
                <ul>
                    ${renderResponsibilities(d.responsibilities)}
                </ul>
            </div>

            ${d.skills.length > 0 ? renderSkills(d.skills) : '' }

            <hr>
      `;
    });

    return jobs;
};

const renderResponsibilities = (data) => {
    let responsibilities = "";

    data.forEach((d, i) => {
        responsibilities  = responsibilities + `  
            <li>${d}</li>
      `;
    });

    return responsibilities;
};

const renderSkills = (data) => {

    return `<p><strong>Core Skills Required:</strong> ${data.join(', ')}</p>`;

};