import { Icon } from "@iconify/react";
import profileimg from '../../assets/profile_img.png';
import parrotimg from '../../assets/parrot_img.png';

function Dashbord(){
    return(
        <div className="bg-[#16191c] w-screen h-screen" >
            <nav className="fixed bottom-0 bg-[#16191c] flex lg:flex-col flex-grow gap-6 justify-between 
                            lg:justify-between items-center w-full py-4 lg:h-full lg:w-24">
                <img src={parrotimg} alt="logo"
                        className="h-6 w-6 rounded-full hidden lg:block mb-9" />
                        <Icon className="h-6 w-6 text-[#989799]" 
                                icon="iconamoon:edit-duotone" />

                        <Icon className="h-6 w-6 text-[#989799]" 
                                icon="lucide:users" />

                        <Icon className="h-6 w-6 text-[#989799]" 
                                icon="lucide:message-square" />

                        <Icon className="h-6 w-6 text-[#989799]" 
                                icon="mingcute:notification-line" />

                        <Icon className="h-6 w-6 text-[#989799] hidden lg:block"
                                icon="ph:layout" />

                        <Icon className="h-6 w-6 text-[#989799] hidden lg:block" 
                                icon="ic:outline-dark-mode" />

                        <Icon className="h-6 w-6 text-[#989799]" 
                                icon="ep:setting" />

                        <img className="h-11 w-11 rounded-full hidden lg:block"
                            src={profileimg} alt="profileimg"/>
            </nav>
        </div>
    )
}

export default Dashbord;