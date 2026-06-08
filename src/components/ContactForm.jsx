import { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { useColor } from '../context/ThemeContext';

const ContactForm = () => {
    const { c, color } = useColor();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm( {...form, [e.target.name]: e.target.value} );
    }

    const handleClick = () => {
        window.alert("Form is Submitted");
    }

    return(
        <div className={`bg-zinc-950 border border-${c(950)} backdrop-blur-2xl rounded-2xl py-10 px-10`}>
            
            {/* Header Section */}
            <div className='mb-10'>
                <div className='flex gap-4'>
                    <div className={`h-14 w-14 flex items-center justify-center text-${c(400)} font-light`}>
                        <MdOutlineMail size={50}/>
                    </div>

                    <div>
                        <h2 className="text-4xl font-light text-white">
                            Let's Work Together
                        </h2>
                        <div className="flex gap-2 items-center">
                            <div className={`h-0.5 w-20 bg-linear-to-r from-${c(500)} to-${c(900)}`}></div>
                            <div className={`h-1 w-1 rounded-full bg-${c(500)}`}></div>
                        </div>

                        <p className="text-zinc-400 mt-2">
                            Have a project in mind or want to collaborate?
                        </p>
                        <p className="text-zinc-400 mt-2">
                            I'd love to hear from you.
                        </p>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className='flex flex-col gap-1.5'>
                <label className='text-zinc-400 col-span-1 text-lg font-light mt-2'>Name</label>
                <input 
                    type="text" 
                    name="name"
                    value={form.name}
                    onChange={() => handleChange}
                    placeholder='Your Name'
                    className='border border-zinc-800 rounded-lg text-zinc-400 col-span-3 w-full p-2 mb-5'
                />
            </div>

            <div className='flex flex-col gap-1.5'>
                <label className='text-zinc-400 col-span-1 text-lg font-light mt-2'>Email</label>
                <input 
                    type="email" 
                    name="email"
                    value={form.email}
                    onChange={() => handleChange}
                    placeholder='Your Email'
                    className='border border-zinc-800 rounded-lg text-zinc-400 col-span-3 w-full p-2 mb-5'
                />
            </div>

            <div className='flex flex-col gap-1.5'>
                <label className='text-zinc-400 col-span-1 text-lg font-light mt-2'>Subject</label>
                <input 
                    type="text" 
                    name="subject"
                    value={form.subject}
                    onChange={() => handleChange}
                    placeholder='Subject' 
                    className='border border-zinc-800 rounded-lg text-zinc-400 col-span-3 w-full p-2 mb-5'
                />
            </div>

            <div className='flex flex-col gap-1.5'>
                <label className='text-zinc-400 col-span-1 text-lg font-light mt-2'>Message</label>
                <textarea 
                    name="message" 
                    value={form.note}
                    onChange={() => handleChange}
                    placeholder='Your Message'
                    className='border border-zinc-800 rounded-lg text-zinc-400 col-span-3 w-full p-2 mb-5'
                />
            </div>
            <button 
                className={`border border-${c(700)} text-zinc-400 hover:bg-${c(600)} hover:text-zinc-200 font-semibold text-xl rounded-xl mt-2 px-12 py-2 cursor-pointer`}
                onClick={() => handleClick}>
                {loading ? "Loading" : "Submit" }
            </button>
        </div>
    )
}

export default ContactForm;