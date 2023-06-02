import ContentfulImage from './contentful-image'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center mr-8">
      <div className="relative w-[50px] h-[52px] mr-2">
        <ContentfulImage
          src={picture.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-2xl font-bold">{name}</div>
    </div>
  )
}
