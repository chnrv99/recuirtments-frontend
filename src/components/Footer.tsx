import React from 'react'
import nextImage from '../../public/next.svg'
import Image from 'next/image'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <div>
            <div className=" border-t border-neutral-900 px-8 pt-20 pb-32 relative">
                <div className="max-w-7xl mx-auto text-sm text-neutral-400 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start ">
                    <div>
                        <a href="" className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20">
                            <Image src={nextImage} alt="Next.js Logo" width={35} height={35} />
                            <div className="text-white font-bold">CYSCOM VIT</div>
                        </a>
                        <div>Copyright {`©`} 2024 CYSCOM VIT</div>
                    </div>
                    <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
                        <div className="flex justify-center space-y-4 flex-col mt-4">
                            <a href="" className="transition-colors hover:text-black text-muted-dark text-xs sm:text-sm">Sample1</a>
                            <a href="" className="transition-colors hover:text-black text-muted-dark text-xs sm:text-sm">Sample1</a>
                            <a href="" className="transition-colors hover:text-black text-muted-dark text-xs sm:text-sm">Sample1</a>
                        </div>
                        <div className="flex justify-center space-y-4 flex-col mt-4">
                            <a href="" className="transition-colors hover:text-black text-muted-dark text-xs sm:text-sm">Sample1</a>
                            <a href="" className="transition-colors hover:text-black text-muted-dark text-xs sm:text-sm">Sample1</a>
                            <a href="" className="transition-colors hover:text-black text-muted-dark text-xs sm:text-sm">Sample1</a>
                        </div>
                        <div className="flex justify-center space-y-4 flex-col mt-4">
                            <a href="" className="transition-colors hover:text-black text-muted-dark text-xs sm:text-sm">Sample1</a>
                            <a href="" className="transition-colors hover:text-black text-muted-dark text-xs sm:text-sm">Sample1</a>
                            <a href="" className="transition-colors hover:text-black text-muted-dark text-xs sm:text-sm">Sample1</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}