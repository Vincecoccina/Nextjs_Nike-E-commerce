import React from 'react'

export default function Banner() {
  return (
    <div
    className="w-full h-[500px] bg-cover bg-center"
    style={{ backgroundImage: "url('https://cdn.lesitedelasneaker.com/wp-content/images/2020/01/nike-chinese-new-year-collection-2020-banner.jpg')" }}
  >
  
    <div className="flex flex-col justify-end h-full px-7 py-[100px] gap-5">
      <p className="text-white text-7xl font-bold font-oswald uppercase">Un été <br /> sportif</p>
      <p className="text-white text-xl font-[600] font-montserrat">Inscrit-toi sur la Nike App et découvre pourquoi les menbre ont tout à gagner.</p>
    </div>
  </div>
  )
}
