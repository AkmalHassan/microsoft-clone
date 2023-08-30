import Link from "next/link";
import { BsWindows } from 'react-icons/bs';
import { CiLaptop } from 'react-icons/ci';
import { BsXbox } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai';

import { data } from "./data";

export default function Main() {

    return (
        <div className="relative">
            <img
                src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Pro-9-M1-Family-02-1:VP5-1920x600"
                className=""
                alt="..." />
            <div className="absolute top-60 left-[74%] -translate-x-1/2 -translate-y-1/2">
                <h2 className="font-semibold text-4xl  " >Surface Pro 9 </h2>
                <p className="w-full my-6" >Tablet versatility and laptop power — all in one ultra-portable device</p>
                <Link href="#" className=" inline-block px-4 hover:bg-sky-700 bg-sky-600 rounded-sm py-2 font-semibold text-white">Learn More</Link>
            </div>



            <div div className="grid grid-cols-4 mx-32 scale-[.80]" >
                <div className=" my-14 flex flex-col items-center">
                    <BsWindows className="h-14 w-14 " />
                    <Link href="#" className="mt-2 underline font-semibold text-xl text-sky-700 ">Choose your Microsoft 365</Link>
                </div>
                <div className=" my-14 flex flex-col items-center">
                    <CiLaptop className="h-14 w-14 " />
                    <Link href="#" className="mt-2 underline font-semibold text-xl text-sky-700 ">Explore Surface devices</Link>
                </div>
                <div className=" my-14 flex flex-col items-center">
                    <BsXbox className="h-14 w-14 " />
                    <Link href="#" className="mt-2 underline font-semibold text-xl text-sky-700 ">Buy Xbox games and consoles</Link>
                </div>
                <div className=" my-14 flex flex-col items-center">
                    <BsWindows className="h-14 w-14 " />
                    <Link href="#" className="mt-2 underline font-semibold text-xl text-sky-700 ">Get Windows 11</Link>
                </div>
            </div>


            <div className="m-14">
                <div className="grid grid-cols-4 top-10 pb-10 gap-5">

                    {data.map((row, index) => (
                        <div key={index} className=" flex flex-col space-y-4">
                            <img src={row.img} className='w-full' alt="microsoft" />
                            <h1 className="font-semibold items-start text-3xl">{row.head}</h1>
                            <p>{row.body} </p>
                            <div className="flex items-center  text-sky-700 group">
                                <Link href="#" className="group-hover:pr-1 group-hover:underline font-semibold text-[16px] duration-300 ease-in-out">{row.button}</Link>
                                &nbsp;<IoIosArrowForward className="mt-1" />
                            </div>

                        </div>
                    ))}

                </div>


                <div className="relative">
                    <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XGP-Highlight-Ultimate-1PP-Evergreen-Keyart-FY22:VP5-1596x600" className="my-20 w-full " alt="microsoft"></img>
                    <div className="absolute top-64 left-[20%] -translate-x-1/2 -translate-y-1/2 justify-start text-white">
                        <h2 className=" font-semibold text-4xl  " >Join for $1</h2>
                        <p className=" w-80 mt-10" >Unlock hundreds of great games and more for just $1 when you join Xbox Game Pass Ultimate or PC Game Pass. Offer available to new subscribers only.</p>
                        <br></br>
                        <Link href="#" className=" inline-block px-4 hover:bg-sky-700 bg-sky-600 rounded-sm py-2 font-semibold">Join now</Link>
                        <br></br>
                    </div>
                </div>

                <div >
                    <h2 className="text-[37px] font-semibold border-1 border-blue-800 pb-3">For business
                    </h2></div>
                <div className="grid grid-cols-4 top-10 pb-10 gap-5">
                    <div className=" flex flex-col space-y-4">
                        <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Surf-CP-SurfaceFamilyForBusiness?wid=380&hei=213&fit=crop' className='to-inherit w-full' alt="microsoft" />
                        <h1 className="font-semibold items-start text-3xl">Surface for Business </h1>
                        <p className="mt-2"> No matter what you do, there’s a Surface to help you do it. </p>
                        <div className="flex items-center  text-sky-700 group mt-3">
                            <Link href="#" className="group-hover:pr-1 group-hover:underline font-semibold text-[16px] duration-300 ease-in-out">Shop now</Link>
                            &nbsp;<IoIosArrowForward className="mt-1" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=406&hei=230&fit=crop' className='w-full' alt="microsoft" />
                        <h1 className="font-semibold items-start text-3xl">Get Microsoft Teams for free</h1>
                        <p className="mt-2"> Online meetings, chat and shared cloud storage- all in one place. </p>
                        <div className="flex items-center  text-sky-700 group mt-3">
                            <Link href="#" className="group-hover:pr-1 group-hover:underline font-semibold text-[16px] duration-300 ease-in-out">Sign up for free  </Link>
                            &nbsp;<IoIosArrowForward className="mt-1" />
                        </div>
                    </div>
                    <div className=" flex flex-col space-y-4">
                        <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Brand-Hybrid-Work?wid=406&hei=230&fit=crop' className='w-full' alt="microsoft" />
                        <h1 className="font-semibold items-start text-3xl">Thrive in a hybrid world</h1>
                        <p className="mt-2"> Discover tools, resources and strategies to help your employees succeed in the new world of flexible work. </p>
                        <div className="flex items-center  text-sky-700 group mt-3">
                            <Link href="#" className="group-hover:pr-1 group-hover:underline font-semibold text-[16px] duration-300 ease-in-out">Learn More </Link>
                            &nbsp;<IoIosArrowForward className="mt-1" />
                        </div>
                    </div>
                    <div className=" flex flex-col space-y-4">
                        <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Azure-AI-Bloom?wid=380&hei=213&fit=crop' className='w-full' alt="microsoft" />

                        <h1 className="font-semibold items-start text-3xl">Join the era of AI</h1>
                        <p> Create, communicate, and code with the latest Microsoft AI solutions. </p>
                        <div className="flex items-center  text-sky-700 group">
                            <Link href="#" className="group-hover:pr-1 group-hover:underline font-semibold text-[16px] duration-300 ease-in-out">Explore AI solutions </Link>
                            &nbsp;<IoIosArrowForward className="mt-1" />
                        </div>

                    </div>
                </div>
                <div className="flex items-center">Follow Microsoft
                    <span className="px-5 py-1 flex gap-5">
                        <FaFacebookF className="h-8" />
                        <AiOutlineTwitter className="h-8 w-8" />
                        <AiFillYoutube className="h-8 w-8" />
                    </span>
                </div>

                <div className="flex absolute right-2">
                    <a href="#top" className="flex items-center gap-3 font-semibold bg-zinc-300 py-2 px-4 rounded-sm   ">
                        <AiOutlineArrowUp className="" />
                        Back to top
                    </a>
                </div>

            </div>

        </div >


    )
}