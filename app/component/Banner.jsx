import Image from 'next/image'
import BannerImg from '../../public/banner.jpeg'
export default function Banner (){
    return (
        <div  className=''>
            <Image src={BannerImg} priority alt='this is a banner image'></Image>
        </div>
    )
}