import React from 'react';
import NavbarDefault from './NavBar';



export default function Gallery() {
    return (
        <div>
          
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