const Projects = () => {
  return (
    <section id="projects" className='sections padding-x max-container'>
      <div className="justify-center items-center">
        <h1 className="section-heading">Projects</h1>
        <div className="grid grid-cols-2 gap-8 p-4 justify-center items-center mb-8">
          <div className="hover:shadow-xl bg-paradiso-800 rounded-xl flex flex-col justify-center items-center h-auto w-[550px]">
            <img src="https://via.placeholder.com/150" alt="project" className="rounded-t-xl w-full h-48 object-cover" />
            <h2>Project 1</h2>
            <p className="text-center px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec facilisis.</p>
            <a href="#!" className="mt-auto mb-4 text-blue-500">View Project</a>
          </div>
          <div className="hover:shadow-xl bg-paradiso-800 rounded-xl flex flex-col justify-center items-center h-auto w-[550px]">
            <img src="https://via.placeholder.com/150" alt="project" className="rounded-t-xl w-full h-48 object-cover" />
            <h2>Project 2</h2>
            <p className="text-center px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec facilisis.</p>
            <p className="text-center px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec facilisis.</p>
            <p className="text-center px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec facilisis.</p>
            <a href="#!" className="mt-auto mb-4 text-blue-500">View Project</a>
          </div>
          <div className="hover:shadow-xl bg-paradiso-800 rounded-xl flex flex-col justify-center items-center h-auto w-[550px]">
            <img src="https://via.placeholder.com/150" alt="project" className="rounded-t-xl w-full h-48 object-cover" />
            <h2>Project 3</h2>
            <p className="text-center px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec facilisis.</p>
            <a href="#!" className="mt-auto mb-4 text-blue-500">View Project</a>
          </div>
          <div className="hover:shadow-xl bg-paradiso-800 rounded-xl flex flex-col justify-center items-center h-auto w-[550px]">
            <img src="https://via.placeholder.com/150" alt="project" className="rounded-t-xl w-full h-48 object-cover" />
            <h2>Project 4</h2>
            <p className="text-center px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec facilisis.</p>
            <a href="#!" className="mt-auto mb-4 text-blue-500">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
