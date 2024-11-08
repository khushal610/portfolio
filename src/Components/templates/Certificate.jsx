import React from 'react';

function Certificate({
  image,
  name,
  desc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa amet deserunt nobis rerum ullam magnam! Enim voluptates ex blanditiis molestiae cumque et, delectus officia! Tempora id hic quas maxime a!",
}) {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-3 p-4">
        <div className="flex items-center justify-center md:w-4/5 w-full">
          <img
            src={image}
            className="p-2 blur-sm pointer-events-none w-full md:w-10/12"
            alt={name}
          />
        </div>
        <div className="flex flex-col justify-center md:w-4/5 w-full text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-semibold">{name}</h1>
          <p className="text-sm md:text-base mt-2">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default Certificate;
