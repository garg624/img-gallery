"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { CiCirclePlus } from "react-icons/ci";


interface ImageCardProps {
  url: string;
  id: string;
  width: number;
  height: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ url, id, width, height }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div
      className="relative "

    >
      <Link
        className="group relative overflow-hidden hover:shadow-lg ease-in-out inline-block transition-all duration-100 cursor-none"
        href={`/i/${id}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}

      >
        <Image
          src={url}
          alt={"title"}
          width={width}
          height={height}
          className='object-contain group-hover:brightness-50 rounded-lg  '
        />
      </Link>
      {isHovered && (
        <div
          className="fixed pointer-events-none "
          style={{ top: cursorPosition.y, left: cursorPosition.x, transform: 'translate(-50%, -50%)' }}
        >
          <CiCirclePlus className='text-4xl text-white' />
        </div>
      )}
    </div>
  );
};

export default ImageCard;
