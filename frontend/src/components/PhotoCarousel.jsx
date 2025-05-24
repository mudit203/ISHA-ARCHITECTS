import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  'https://www.shutterstock.com/image-illustration/architectural-drawing-3d-illustration-600nw-1167388633.jpg',
  'https://www.shutterstock.com/image-illustration/architectural-drawing-3d-illustration-600nw-1167388633.jpg',
  'https://www.shutterstock.com/image-illustration/architectural-drawing-3d-illustration-600nw-1167388633.jpg',
  'https://www.shutterstock.com/image-illustration/architectural-drawing-3d-illustration-600nw-1167388633.jpg',
  'https://www.shutterstock.com/image-illustration/architectural-drawing-3d-illustration-600nw-1167388633.jpg',
];

const PhotoCarousel = () => {
  const outerRef = useRef(null); // wrapper for pin
  const scrollRef = useRef(null); // scrolling content

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const totalScroll = scrollContainer.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(scrollContainer, {
        x: `-${totalScroll}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: outerRef.current,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={outerRef} className="relative w-full h-[100vh] bg-white overflow-hidden">
      <div className='flex flex-col'>
        <span className="text-3xl font-bold text-center z-10 mt-20" > Our Gallery</span>
       
        <span className="block h-1 w-24 bg-yellow-500 mx-auto mt-2 rounded-full" />
      </div>

      <div
        ref={scrollRef}
        className="flex w-max gap-10 px-10 h-[70vh] items-center"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[80vw] h-full rounded-xl overflow-hidden"
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoCarousel;
