// import { use, useContext } from "react";
import { useBioContext } from ".";

export const About = () => {
  const { myName, myAge } = useBioContext();
  // const { myName, myAge } = useContext(BioContext);
  // const { myName, myAge } = use(BioContext);

  // const newHook = true;
  // let myName, myAge;

  // if (newHook) {
  //   ({ myName, myAge } = useContext(BioContext));
  // }

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center  items-center bg-gray-900 text-white`}
    >
      <h1>
        Hello Context API (About). My name is {myName}. I am {myAge} yrs old
      </h1>
    </section>
  );
};
