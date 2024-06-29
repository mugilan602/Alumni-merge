import React from 'react';
import { Link } from 'react-router-dom';
import './JobCard.css';

function JobCard({ job }) {
  const { _id, title, company, pay, experience, location } = job;
  const jobId = _id;

  return (
    <div className="2xl:container ">
      <div className="w-[90] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="container">
            <div className="">
              <div className="job-card">
                <div className="job-card-header">
                  <h2 className="job-title">{title}</h2>
                  <p>{company}</p>
                </div>
                <div className="job-card-body">
                  {location && (
                    <p className="job-detail">
                      <strong>Location:</strong> {location}
                    </p>
                  )}
                  <p className="job-detail">
                    <strong>Salary:</strong> {pay}
                  </p>
                  <p className="job-detail">
                    <strong>Experience:</strong> {experience}
                  </p>
                  <Link
                    to={`/apply/${jobId}`}
                    className="apply-button"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default JobCard;
