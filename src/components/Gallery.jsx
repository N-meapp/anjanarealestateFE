import React from 'react';
import NavbarDefault from './NavBar';



export default function Gallery() {
    return (
        <div>

      <h1 className="text-5xl font-bold  text-[#e1b400] text-center relative mt-6 " style={{marginTop: '10px', marginBottom: '100px'}}>
            Our Gallery
            <div style={{ width: '100px', marginTop: "10px" }} className="border-b-2 border-[#e1b400] absolute left-1/2 transform -translate-x-1/2 top-full"></div>
        </h1>
          
          <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
  <div class="grid gap-4">
    <div>
      <img 
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="/galleryImage/p1.jpeg"
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src="/galleryImage/p2.jpeg"
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="/galleryImage/p3.jpeg"
        alt="gallery-photo"
      />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="/galleryImage/p4.jpeg"
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="/galleryImage/p5.jpeg"
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="/galleryImage/p6.jpeg"
        alt="gallery-photo"
      />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="/galleryImage/p7.jpeg"
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src="/galleryImage/p8.jpeg"
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="/galleryImage/p9.jpeg"
        alt="gallery-photo"
      />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="/galleryImage/p8.jpeg"
        alt="gallery-photo"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src="/galleryImage/p4.jpeg"
        alt="gallery-photo"
      />
    </div>
  </div>
</div>

        </div>
    );
}