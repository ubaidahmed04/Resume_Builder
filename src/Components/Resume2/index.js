"use client"
import Head from 'next/head';
export  function Resume2() {
  return (
    <>
      <Head>
        <title>Professional CV Template</title>
      </Head>
      <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-md mt-10">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-2xl font-bold">Jane Doe</h1>
          <p className="text-sm text-gray-600 mt-2">19 Trinity Place, San Francisco, CA 94111 | (415) 646-1277 | janedoe@gmail.com</p>
        </header>

        <hr className="border-t border-gray-300 my-4" />

        {/* Profile Section */}
        <section className="my-4">
          <h2 className="text-lg font-bold text-gray-800">Profile</h2>
          <p className="text-sm text-gray-700 mt-2">
            Experienced and innovative Lawyer with a passion for public speaking and advocacy. Skilled in preparing clients for cases, legal research, and dispute resolution. Known for dedication to the legal profession and strong ethical standards.
          </p>
        </section>

        <hr className="border-t border-gray-300 my-4" />

        {/* Employment History Section */}
        <section className="my-4">
          <h2 className="text-lg font-bold text-gray-800">Employment History</h2>
          <div className="my-4">
            <h3 className="text-md font-bold text-gray-800">Lawyer, Madison and Fletcher Attorneys at Law</h3>
            <p className="text-sm text-gray-500">Dec 2016 – Aug 2018</p>
            <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
              <li>Represented clients in court and developed strategies to resolve cases effectively.</li>
              <li>Researched case law and prepared documents for trials and hearings.</li>
              <li>Collaborated with senior attorneys on high-profile cases.</li>
            </ul>
          </div>
          <div className="my-4">
            <h3 className="text-md font-bold text-gray-800">Lawyer, Brown and Associates</h3>
            <p className="text-sm text-gray-500">Nov 2018 – Present</p>
            <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
              <li>Managed a portfolio of clients and led consultations to advise on legal options.</li>
              <li>Prepared clients for court appearances and provided representation in complex cases.</li>
              <li>Handled negotiations and settlements with opposing counsel.</li>
            </ul>
          </div>
        </section>

        <hr className="border-t border-gray-300 my-4" />

        {/* Education Section */}
        <section className="my-4">
          <h2 className="text-lg font-bold text-gray-800">Education</h2>
          <p className="text-sm text-gray-700">
            <strong>New York Law School</strong>, J.D. – May 2016
          </p>
          <p className="text-sm text-gray-700">
            <strong>New York University</strong>, B.A. in Political Science – May 2013
          </p>
        </section>

        <hr className="border-t border-gray-300 my-4" />

        {/* Skills Section */}
        <section className="my-4">
          <h2 className="text-lg font-bold text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-4 mt-2">
            <div className="text-sm p-2 border border-gray-300 rounded">Regulatory Compliance: Expert</div>
            <div className="text-sm p-2 border border-gray-300 rounded">Legal Research: Proficient</div>
            <div className="text-sm p-2 border border-gray-300 rounded">Litigation: Expert</div>
            <div className="text-sm p-2 border border-gray-300 rounded">Public Speaking: Expert</div>
            <div className="text-sm p-2 border border-gray-300 rounded">Document Review: Proficient</div>
          </div>
        </section>

        <hr className="border-t border-gray-300 my-4" />

        {/* Internships Section */}
        <section className="my-4">
          <h2 className="text-lg font-bold text-gray-800">Internships</h2>
          <p className="text-sm text-gray-700">Law Internship, Brennan Center for Justice – Jan 2016 to May 2016</p>
        </section>

        <hr className="border-t border-gray-300 my-4" />

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 mt-4">
          <p>References available upon request</p>
        </footer>
      </div>
    </>
  );
}
