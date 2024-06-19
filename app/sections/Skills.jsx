import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const Skills = () => {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
  return (
    <section id="skills" className='padding-x max-container bg-blue-20 w-full min-h-screen justify-center items-center flex flex-col'>
        <div>
          <h1 className="text-6xl font-montserrat font-bold py-8 text-blue-15">heading</h1>
        </div>
        <div>
        <TextGenerateEffect words={words} />
        </div>
    </section>
  )
}

export default Skills