// components/CVTemplate.js

export  function Resume1({downloadcv}) {
  return (
    <div ref={downloadcv} className="max-w-3xl mx-auto my-5 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header Section */}
      <header className="bg-blue-500 text-white text-center p-5">
        <h1 className="text-2xl font-bold">John Doe</h1>
        <p>Web Developer</p>
        <p>Email: johndoe@example.com | Phone: (123) 456-7890 | Location: City, Country</p>
      </header>

      {/* Profile Summary */}
      <section className="p-5">
        <h2 className="text-xl font-bold text-blue-500 mb-2">Profile</h2>
        <p>
          A highly motivated and skilled web developer with over 3 years of experience in designing
          and developing web applications. Proficient in front-end and back-end technologies, with
          a passion for creating responsive, user-friendly websites and applications.
        </p>
      </section>

      {/* Skills Section */}
      <section className="p-5">
        <h2 className="text-xl font-bold text-blue-500 mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-gray-200 text-blue-500 px-3 py-1 rounded-full text-sm">HTML</span>
          <span className="bg-gray-200 text-blue-500 px-3 py-1 rounded-full text-sm">CSS</span>
          <span className="bg-gray-200 text-blue-500 px-3 py-1 rounded-full text-sm">JavaScript</span>
          <span className="bg-gray-200 text-blue-500 px-3 py-1 rounded-full text-sm">React</span>
          <span className="bg-gray-200 text-blue-500 px-3 py-1 rounded-full text-sm">Node.js</span>
          <span className="bg-gray-200 text-blue-500 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="p-5">
        <h2 className="text-xl font-bold text-blue-500 mb-2">Work Experience</h2>
        
        <div className="mb-5">
          <h3 className="text-lg font-bold mt-2">Front-End Developer</h3>
          <p className="text-gray-600 text-sm">Tech Company | Jan 2021 - Present</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Developed and maintained responsive websites for clients.</li>
            <li>Collaborated with designers and backend developers to create high-quality user experiences.</li>
            <li>Implemented modern JavaScript frameworks and CSS libraries.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mt-2">Web Developer</h3>
          <p className="text-gray-600 text-sm">Another Company | Jun 2018 - Dec 2020</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Designed and developed full-stack web applications.</li>
            <li>Utilized Agile methodologies for project management.</li>
            <li>Improved website performance by 20% through optimization.</li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="p-5">
        <h2 className="text-xl font-bold text-blue-500 mb-2">Education</h2>
        <div>
          <h3 className="text-lg font-bold">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-600 text-sm">University Name | Graduated: 2018</p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="p-5">
        <h2 className="text-xl font-bold text-blue-500 mb-2">Certifications</h2>
        <p>Certified Web Developer, ABC Certification</p>
      </section>
    </div>
  );
}
