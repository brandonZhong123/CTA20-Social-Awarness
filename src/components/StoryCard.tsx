import React from 'react';

interface StoryCardProps {
  name: string;
  community?: string;
  location: string;
  image?: string;
  story: string;
  date: string;
}

export default function StoryCard({
  name,
  community,
  location,
  image,
  story,
  date
}: StoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {image && (
        <div className="relative h-48 w-full">
          <img
            src={image}
            alt={`${name}'s story`}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-black">{name}</h3>
        <p className="text-sm text-body">
          {community && <span>{community} • </span>}{location}
        </p>
        <div className="mt-4">
          <p className="text-body mb-4">{story}</p>
          <span className="text-sm text-black/75">{date}</span>
        </div>
        <div className="flex items-center justify-between border-t pt-4">
          <button className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
            Share Story
          </button>
          <button className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
} 