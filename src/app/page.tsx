import Sidebar from '@/components/Sidebar'
import Link from 'next/link'

// Components


export default function Home() {
  return (
    <main className='container flex xl:gap-60 pb-52'>
      <Sidebar />
      <div className="what-i-do pt-72 xl:pt-64">
        <div>
          <h1 className='text-5xl sm:text-6xl mb-2 dark:text-[#DADADA]'>I&#39;m a Front End Web Developer</h1>
          <p className='text-lg dark:text-[#DADADA]'>Let me Code for You</p>
          <Link href={`/projects`}>
            <button type="button" className="mt-8 mr-4 text-black bg-white border-[1px] border-[#dadada] hover:bg-[#dadada] font-medium rounded-lg text-base px-5 py-2.5">Projects</button>
          </Link>
          <button type="button" className="bg-black border-[1px] border-spgray hover:bg-[#222] text-white font-medium rounded-lg text-base px-5 py-2.5">Resume</button>
        </div>
      </div>
    </main>
  )
}