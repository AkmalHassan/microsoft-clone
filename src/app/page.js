import Image from 'next/image'
import Navigation from './navigation'
import Main from './main'
import Foot from './foot'


export default function Home() {
  return (

    <div className=' font-segoe-ui '>
      {/* new */}
      <Navigation />
      <Main />
      <Foot />
    </div>

  )
}
