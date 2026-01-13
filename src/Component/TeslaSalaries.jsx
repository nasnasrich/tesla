import React, { useState } from "react";
import "./TeslaSalaries.css";
import Nav from "./Nav"

const jobs = [
  { title: "Software Engineer", salary: 190000, description: "Write Tesla software code." },
  { title: "Mechanical Engineer", salary: 15000, description: "Design mechanical parts." },
  { title: "Electrical Engineer", salary: 12000, description: "Work on electrical systems." },
  { title: "Product Manager", salary: 110000, description: "Manage product development." },
  { title: "UX/UI Designer", salary: 95000, description: "Design user-friendly interfaces." },
  { title: "Quality Assurance", salary: 80000, description: "Test products for quality." },
  { title: "Marketing Specialist", salary: 65000, description: "Promote Tesla products." },
  { title: "Sales Executive", salary: 60000, description: "Sell Tesla vehicles." },
  { title: "Customer Support", salary: 50000, description: "Assist Tesla customers." },
  { title: "Operations Manager", salary: 105000, description: "Oversee operations." },
  { title: "Data Analyst", salary: 90000, description: "Analyze Tesla data." },
  { title: "Logistics Coordinator", salary: 58000, description: "Manage Tesla logistics." },
];

const TeslaSalaries = () => {
  const [payType, setPayType] = useState("yearly");

  const formatPay = (yearly) => {
    switch (payType) {
      case "hourly":
        return `$${(yearly / 2080).toFixed(2)} / hr`;
      case "daily":
        return `$${(yearly / 260).toFixed(2)} / day`;
      default:
        return `$${yearly.toLocaleString()} / year`;
    }
  };

  return (
    <>
    <Nav/>
    <div className="tesla-salaries">
      <div className="salary-page">
        <header>
          <h1>Tesla Career Salaries</h1>

          <div className="pay-type-selector">
            <label>
              <input
                type="radio"
                checked={payType === "yearly"}
                onChange={() => setPayType("yearly")}
              />
              Yearly
            </label>

            <label>
              <input
                type="radio"
                checked={payType === "daily"}
                onChange={() => setPayType("daily")}
              />
              Daily
            </label>

            <label>
              <input
                type="radio"
                checked={payType === "hourly"}
                onChange={() => setPayType("hourly")}
              />
              Hourly
            </label>
          </div>
        </header>

        <div className="job-list">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <h2>{job.title}</h2>
              <p className="description">{job.description}</p>
              <p className="salary">{formatPay(job.salary)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default TeslaSalaries;
