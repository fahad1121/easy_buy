import Grid01 from '@/public/assets/images/shape/grid-01.svg';
import Image from "next/image";

export default function Shape(){
    return (
        <>
        <div className="absolute right-0 top-0 -z-1 w-full max-w-[250px] xl:max-w-[450px]">
            <Image
                src={Grid01}
                alt="Logo"
                width={150}
                height={150}
                priority
            />
        </div>
    <div className="absolute bottom-0 left-0 -z-1 w-full max-w-[250px] rotate-180 xl:max-w-[450px]">
        <Image
            src={Grid01}
            alt="Logo"
            width={150}
            height={150}
            priority
        />
    </div>
        </>
)
}