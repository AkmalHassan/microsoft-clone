import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { PiUserCirclePlusBold } from 'react-icons/pi';
import { AiOutlineDown } from 'react-icons/ai';

export default function Navigation() {
    return (
        <main className="bg-white mx-10 flex">
            <div className="w-full  px-10 justify-start  flex">

                <img src='https://blogs.microsoft.com/wp-content/uploads/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg' className='h-12 pt-1 flex ' />

                <ul className="flex space-x-5  ">

                    <li className="cursor-pointer py-4 text-[13px] hover:underline">Microsoft 365</li>
                    <li className="cursor-pointer py-4 text-[13px] hover:underline">Teams</li>
                    <li className="cursor-pointer py-4 text-[13px] hover:underline">Windows</li>
                    <li className="cursor-pointer py-4 text-[13px] hover:underline">Surface</li>
                    <li className="cursor-pointer py-4 text-[13px] hover:underline">Xbox</li>
                    <li className="cursor-pointer py-4 text-[13px] hover:underline">Support</li>
                </ul>
            </div>
            <div className=' min-w-fit pr-8'>
                <ul className="flex space-x-5 py-4 justify-end gap-2">
                    <li className=" flex cursor-pointer text-[13px] items-center hover:underline gap-1">All Microsoft<div className=' h-3 w-3 '><AiOutlineDown /></div></li>
                    <li className=" flex cursor-pointer text-[13px] items-center hover:underline gap-1">Search<AiOutlineSearch className='rotate-90 h-5 w-5 ' /></li>
                    <li className=" flex cursor-pointer text-[13px] items-center hover:underline gap-1">Cart<AiOutlineShoppingCart className=' h-5 w-5' /></li>
                    <li className=" flex cursor-pointer text-[13px] items-center hover:underline gap-1">Sign in<PiUserCirclePlusBold className=" h-6 w-6" /></li>
                </ul>

            </div>
        </main >
    )
}