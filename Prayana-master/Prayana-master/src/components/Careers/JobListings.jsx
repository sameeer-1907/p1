import React, { useEffect, useState } from 'react';
import "../../styles/JobListings.css"

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  return (
    <div className="JobListings_container">
    <div className="title1_container">
        <p className="title1">Job Listings at</p>
        <p className="title2">PrayanaElectric</p>
      </div>
      <div className="title_caption_container">
        <p className="title_caption">Discover your next career adventure with our diverse job listings. We have exciting opportunities across multiple digital fields such as web design, mobile app development, digital marketing, project management, and more. Each listing is packed with detailed information about the role, responsibilities, required qualifications, and the benefits you can expect. We invite seasoned professionals and recent graduates alike to explore our openings and find the perfect fit for their skills and passions. Join us and become a part of our dynamic team! </p>
      </div>
    <div class="container">
        <div class="job-details">
            <p className='Job_Title' >Product Manager</p>
            <div class="tags">
                <span class="tag">Full-Time</span>
                <span class="tag">Remote</span>
                <span class="tagk">Product</span>
            </div>
            <ul class="summary">
                <li>Salary - $45,000 - $60,000 per year.</li>
                <li>Experience - Minimum 1 year of professional web design experience.</li>
                <li>Skills - Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.</li>
            </ul>
            <div class="job-description">
                <p className='job_desription_title'>Job Description</p>
                <p className='job_desription_para' >As a Product Manager at PrayanaElectric, you will be responsible for guiding the development of innovative products from conception to launch. Collaborating closely with engineering, design, marketing, and sales teams, you will translate business strategies into product plans and roadmaps. This position provides a unique opportunity to drive the success of cutting-edge products and make a significant impact on our diverse portfolio of projects.</p>
            </div>
            <div class="responsibilities">
                <p className='job_desription_title' >Responsibilities</p>
                <ul className='job_desription_para' >
                    <li>Define and prioritize product features and requirements based on market research and customer feedback.</li>
                    <li>Collaborate with engineering, design, marketing, and sales teams to ensure alignment and successful product delivery.</li>
                    <li>Conduct competitive analysis to identify market opportunities and inform product strategy.</li>
                    <li>Develop and maintain product roadmaps, ensuring timely and effective product releases.</li>
                    <li>Present product concepts and updates to internal teams and stakeholders for feedback and approval.</li>
                </ul>
            </div>
        </div>
        <div class="application-form">
            <p className='application_title'>Application</p>
            <form>
                <div class="form-group">
                    <label for="first-name">First Name <span className='red'>*</span> </label>
                    <input type="text" id="first-name" name="first-name" required/>
                </div>
                <div class="form-group">
                    <label for="last-name">Last Name <span className='red'>*</span></label>
                    <input type="text" id="last-name" name="last-name" required/>
                </div>
                <div class="form-group">
                    <label for="email">Email <span className='red'>*</span></label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="phone">Phone Number <span className='red'>*</span></label>
                    <input type="tel" id="phone" name="phone" required/>
                </div>
                <div class="form-group">
                    <label for="message">What would you like us to know?</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <div class="form-group">
                    <label for="resume">Resume <span className='red'>*</span></label>
                    <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required/>
                </div>
                <button type="submit">Submit Application</button>
            </form>
        </div>
    </div>
    </div>
  );
};

export default JobListings;
