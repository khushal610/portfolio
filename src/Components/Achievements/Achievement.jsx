import React from 'react';
import Certificate from '../templates/Certificate';

function Achievement() {
  return (
    <>
      <div className="container mx-auto p-4 flex flex-col items-center md:items-start">
        <div className="w-full ">
          <Certificate image={"Images/certi1.jpg"} name={"Introduction to Generative AI"} />
          <Certificate image={"Images/certi2.jpg"} name={"Foundational C# With Microsoft"} className={'bg-gray-200'} />
          <Certificate image={"Images/certi3.jpg"} name={"Crash Course on Python"} />
        </div>
      </div>
    </>
  );
}

export default Achievement;
