import "./../app.css";
// import React from 'react'

export default function Slider() {
  const images = [
    {
      id: 1,
      backgroundImage:
        "url(https://images.pexels.com/photos/12626953/pexels-photo-12626953.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
    },
    {
      id: 2,
      backgroundImage:
        "url(https://images.pexels.com/photos/9864565/pexels-photo-9864565.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
    },
    {
      id: 3,
      backgroundImage:
        "url(https://images.pexels.com/photos/18714731/pexels-photo-18714731.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
    },
    {
      id: 4,
      backgroundImage:
        "url(https://images.pexels.com/photos/7999035/pexels-photo-7999035.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
    },
    {
      id: 5,
      backgroundImage:
        "url(https://images.pexels.com/photos/13500012/pexels-photo-13500012.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
    },
    {
      id: 6,
      backgroundImage:
        "url(https://images.pexels.com/photos/325045/pexels-photo-325045.jpeg?auto=compress&cs=tinysrgb&w=600)",
    },
    {
      id: 7,
      backgroundImage:
        "url(https://images.pexels.com/photos/219906/pexels-photo-219906.jpeg?auto=compress&cs=tinysrgb&w=600)",
    },
    {
      id: 8,
      backgroundImage:
        "url(https://images.pexels.com/photos/62289/yemen-chameleon-chamaeleo-calyptratus-chameleon-reptile-62289.jpeg?auto=compress&cs=tinysrgb&w=600)",
    },
    {
      id: 9,
      backgroundImage:
        "url(https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=600)",
    },
  
  ];

  return (
    <div className="h-screen w-screen flex flex-col">
      <div className=" flex  items-center overflow-y-scroll  justify-between gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            id={index}
            className="imgdiv  w-[100vw] h-[90vh] bg-fixed bg-auto bg-no-repeat  md:bg-center flex justify-center items-center"
            style={{ backgroundImage: image.backgroundImage }}
          >       <marquee width="60%" direction="right" height="100px">
      
          </marquee>
            <div className="h-[30vh] w-[100vw]"></div>
          </div>
        ))}

      </div>

      <div className="w-[60vw] flex justify-between self-center">
      {images.map((image, index) => (
            <a href={'#'+index} key={index} className="w-5 h-5 bg-sky-500/40 rounded-full"> 
   
            </a>
        ))}
        </div>
    </div>
  );
}
