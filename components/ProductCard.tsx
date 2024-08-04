import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href="/" className="p-4 border rounded-lg hover:scale-105 transition-all duration-500">
      {/* CARD HEADER */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-md">
        <Image 
          src={product.img} 
          alt={product.name} 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.desc}</p>
        <p className="mt-2 text-xl font-bold text-gray-900">{product.price} €</p>
      </div>
    </Link>
  )
}
