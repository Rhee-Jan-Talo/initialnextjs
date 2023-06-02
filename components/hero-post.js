import Link from 'next/link'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className='w-[100%]'>
        <div>
          <p className='text-[40px] text-center'>
            <Link href={`/posts/${slug}`} className="hover:underline">
              <strong>{title}</strong>
            </Link>
          </p>
        </div>
        <div className="mb-8 md:mb-16 mt-2">
            <CoverImage title={title} slug={slug} url={coverImage.url} />
            <div className='flex flex-col '>
              <div className='ml-auto mt-6'>
                {author && <Avatar name={author.name} picture={author.picture} />}
                <div className='flex flex-col'>
                  <p className='text-[24px] ml-auto'><DateComponent dateString={date} /></p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
