import React from "react";

export default function GoogleMap() {
  return (
    <div className="w-full h-full lg:max-h-[510px] rounded-lg">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3225.108353463164!2d77.01410907504228!3d10.802195989348137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ4JzA3LjkiTiA3N8KwMDEnMDAuMSJF!5e1!3m2!1sen!2sin!4v1729857912517!5m2!1sen!2sin"
      width="100%"
        height="400"
        style={{ border: 0, borderRadius: 20 }}
        allowFullScreen={true}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
