import React from 'react';

function AboutCard({
  icon,
  title,
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet dolore recusandae cumque, placeat fugiat deserunt ipsam quas perspiciatis vel ut dolorem corrupti sunt ducimus nemo numquam aliquid vitae eaque!"
}) {
  return (
    <div className="flex flex-col w-full sm:w-5/12 md:w-1/3 lg:w-1/4 p-4 items-center text-center">
      <div className="flex py-2 text-4xl md:text-5xl text-yellow-500 mb-2">
        {icon}
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl md:text-2xl font-semibold mb-2">{title}</h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default AboutCard;
