
import React from 'react'
import Icon from '@/public/Titheware icon.png'
import playstore from '@/public/mage_playstore.png'
import vector from '@/public/Vector.png'
import Image from 'next/image'
import { Kumbh_Sans } from 'next/font/google'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import frame  from '@/public/Frame 4.png'
import twitter from '@/public/prime_twitter.png'
import facebook from '@/public/line-md_facebook.png'
import vector1 from '@/public/Vector (1).png'
import group from '@/public/Group.png'

const font1= Kumbh_Sans({subsets:['latin'], weight:'700'})
const font2 = Kumbh_Sans({subsets:['latin'], weight:'400'})
const font3 = Kumbh_Sans({subsets:['latin'], weight:'600'})
const font4 = Inter({subsets:['latin'], weight:'400'})
const font5 = Poppins({subsets:['latin'], weight:'400'})
const font6 = Kumbh_Sans({subsets:['latin'], weight:'500'})
const Main = () => {
const date = new Date()
const year = date.getFullYear()
  return (
    <div className='bg-[#262626]'>
    
<Image src={Icon} alt='icon' className='w-[52px] h-[52px] absolute top-[16px] left-[64px] cursor-pointer'/>
<section className='w-[1440px] h-[733px] mt-[100px] -rotate-0'>
<div className='w-[952px] h-[733px] flex flex-col gap-[24px] ml-[64px]'>
<div className='w-[952px] h-[356px]'>
<p className={[`${font1.className}`,' text-[#f2f2f2] text-[72px] leading-[89.3px]' ]}> Crafting world class solutions for <span className='text-[#2f80ed]'>visionary</span> institutions by redefining <span className= 'text-[#2f80ed]'>excellence</span>on a global scale.</p>
</div>

<div className={[`${font2.className}`,'w-[650px] h-[103px] gap-[32px] text-[20px] leading-[34px] text-[#f2f2f2]']}>
Lorem ipsum dolor sit amet consectetur. Malesuada nisl augue<br/> posuere aliquam. Lacinia nulla et quis molestie. Non eleifend ut ac<br/> sollicitudin elementum maecenas dolor magna. Mattis leo luctus.
</div>
<button className={[`${font3.className}`, ' w-[237px] h-[56px] border-[1px] border-[#212934] gap-[10px] rounded-[6px] bg-[#2F80ED] leading-[16px] text-[16px] text-center text-[#f2f2f2] shadow-[0 1 0 0] cursor-pointer']}>Join the wait list</button>

<div className=' w-[224px] h-[98px] flex flex-col gap-[16px]'>
<p className={[`${font2.className}`,'w-[224px] h-[34px] text-[20px] leading-[34px] text-[#f2f2f2]']}> Download Tendre from:</p>
<div className=' w-[160px] h-[48px] flex justify-between'>
<Image src={playstore}  alt='playstore' className='w-[48px] h-[48px]'/>
<Image src={vector} alt='vector' className='w-[42px] h-[42px] mt-[3px] ml-[3px] '/>
</div>
</div>

</div>
    </section>
<section className='w-[1440px] h-[540px] absolute top-[833px]'>
<aside className='w-[1328px] h-[331px]  relative top-[96px] left-[64px] flex '>
<div className='w-[766px] h-[331px] flex flex-col gap-[32px]'>
<button className='w-[115px] h-[39px] rounded-[24px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[10px] bg-[#333] text-[#fff] text-[16px] cursor-pointer'><p className={`${font4.className}`}>ABOUT US</p></button>
<div className='w-[766px] h-[180px]'>
<p className={[`${font1.className}`,' text-[#f2f2f2] text-[48px] leading-[59.53px]' ]}>Making financial records <span className='text-[#2f80ed]'>simple,</span> accessible and clear for <span className='text-[#2f80ed]'>everyone</span> everywhere</p>
</div>
<button className={[`${font3.className}`, ' w-[237px] h-[56px] border-[1px] border-[#212934] gap-[10px] rounded-[6px] bg-[#2F80ED] leading-[16px] text-[16px] text-center text-[#f2f2f2] shadow-[0 1 0 0] cursor-pointer']}>Join the wait list</button>

</div>
<div className='w-[540px] h-[326px] flex flex-col gap-[24px]'>
<p className={[`${font2.className}`,'w-[504px] h-[151px]  text-[20px] leading-[35px] text-[#e0e0e0]']}>
Lorem ipsum dolor sit amet consectetur. Malesuada <br/> nisl augue posuere aliquam. Lacinia nulla et quis<br/> molestie. Non eleifend ut ac sollicitudin elementum<br/>maecenas dolor magna. Mattis leo luctus.
</p>
<p className={[`${font2.className}`,'w-[504px] h-[151px]  text-[20px] leading-[35px] text-[#e0e0e0]']}>
Lorem ipsum dolor sit amet consectetur. Malesuada <br/> nisl augue posuere aliquam. Lacinia nulla et quis<br/> molestie. Non eleifend ut ac sollicitudin elementum<br/>maecenas dolor magna. Mattis leo luctus.
</p>
</div>
</aside>
</section>

<section className='w-[1272px] h-[510px] absolute top-[1465px] left-[54px] rounded-[32px] bg-[#E0E0E0] flex'>
<div className='w-[707px] h-[414px] relative top-[48px] left-[64px] flex flex-col gap-[48px]'>
    <p className={[`${font3.className}`, ' w-[528px] h-[120px] leading-[59.53px] text-[48px]  text-[#2F80ED] shadow-[0 1 0 0] cursor-pointer']}>Be the first to know <br/>
    when there’s an update</p>
    <p className={[`${font2.className}`,'w-[707px] h-[160px]  text-[20px] leading-[32px] text-[#4F4F4F]']}>Figma ipsum component variant main layer. Prototype object mask fill pixel<br/> prototype rectangle. Pencil pencil <br/> image scale plugin draft edit library pencil flows. Hand move line library boolean duplicate ipsum effect. Edit pixel<br/> rectangle plugin italic font. Rotate bullet select scale arrow main flows.<br/> Plugin team horizontal content move follower content. Comment variant.</p>
    <div className='w-[657px] h-[62px] flex gap-[16px]'>
<input placeholder='Enter your email address' className={[`${font5.className}`,'w-[510px] h-[62px] rounded-[8px] border-[1px]  text-[20px]  border-[#828282] outline-none bg-[#828282] pt-[16px] pr-[245px] pb-[16px] pl-[16px] leading-[30px] gap-[10px]']}/>
<button className='w-[131px] h-[62px] rounded-[8px] p-[16px] gap-[10px] bg-[#2F80ED]'><p className={[`${font5.className}`, ' w-[99px] h-[30px] text-[20px] leading-[30px] text-[#e0e0e0]']}>Subscribe</p></button>
</div>
</div>
<div className='w-[351.71px] h-[295.87px] relative left-[172px] top-[107px] gap-[10px]'>
<Image src={frame} alt='frame'/>
</div>
</section>

<section className='w-[1437px] absolute top-[2155px] h-[393px] left-[2px] border-top-[1px] border-[#262626] '>
<main className='w-[1266px] h-[156px] flex gap-[644px] mt-[63px] ml-[81px] flex flex-col gap-[86px]'>


<div className='w-[1266px] h-[156px] flex gap-[644px] cursor-pointer'>

<div className='w-[225px] h-[101px] flex flex-col gap-[24px]'>
<Image src={Icon} alt='icon' className='w-[52px] h-[52px] cursor-pointer '/>
<p className={[`${font3.className}`, ' text-[20px] leading-[24.8px] text-[#fff]']}>Tendre <span className='text-[#646464]'>by Proskueno</span></p>
</div>

<nav className='w-[397px] h-[156px] flex gap-[64px]'>
<div className=' w-[137px] h-[156px] flex flex-col gap-[24px]'>
<p className={[`${font3.className}`, ' text-[20px] leading-[24.8px] text-[#fff]']}>Company</p>
<div className={[`${font6.className}`,' w-[137px] h-[107px] flex flex-col gap-[16px] text-[20px] leading-[24.8px] text-[#646464]']}>
<p>Home</p>
<p>About Us</p>
<p>Contact Us</p>
</div>
</div>

<div className='w-[196px] h-[74px] flex flex-col gap-[24px]'>
<p className={[`${font3.className}`, ' text-[20px] leading-[24.8px] text-[#fff]']}>Website</p>
<div className={[`${font6.className}`,' w-[137px] h-[107px] flex flex-col gap-[16px] text-[20px] leading-[24.8px] text-[#646464]']}>
<p>Tendre.com</p>
</div>

</div>
</nav>
</div>
<footer className='w-[1037px] h-[25px] flex justify-between'>
<div className={[`${font4.className}`, ' w-[262px] h-[25px] text-[#646464] text-[20px]']}>&copy;Tendre by Proskueno {year}</div>
<div className='w-[164px] h-[24px] flex gap-[24px] cursor-pointer '>

<Image  className='w-[20px] h-[20px] relative top-[2px] left-[2px] 'src={twitter} alt='twitter'/>
<Image  className='w-[20px] h-[20px] relative top-[2px] left-[2px] ' src={facebook} alt='facebook'/>
<Image  className='w-[20px] h-[20px] relative top-[2px] left-[2px] ' src={group} alt='group'/>
<Image  className='w-[20px] h-[20px] relative top-[2px] left-[2px] ' src={vector1} alt='vector1'/>
</div>
</footer>

</main>

</section>
    </div>
  )
}

export default Main