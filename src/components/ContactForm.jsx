import { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";

const ContactForm = () => {
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
        alert("Form is Submitted");
    }

    return(
        <div className='bg-zinc-900/50 border border-amber-800 backdrop-blur-2xl rounded-2xl py-10 px-10'>
            
            {/* Header Section */}
            <div className='mb-10'>
                <div className='flex items-center gap-4'>
                    <div className=" h-14 w-14 rounded-xl border border-amber-400/30 flex items-center justify-center text-amber-400">
                        <MdOutlineEmail size={28}/>
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold text-white">
                            Let's Work Together
                        </h2>

                        <p className="text-zinc-400 mt-2">
                            Have a project in mind or want to collaborate?
                        </p>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className='flex flex-col gap-1.5'>
                <label className='text-zinc-300 col-span-1 text-xl font-light mt-2'>Name</label>
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
                <label className='text-zinc-300 col-span-1 text-xl font-light mt-2'>Email</label>
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
                <label className='text-zinc-300 col-span-1 text-xl font-light mt-2'>Subject</label>
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
                <label className='text-zinc-300 col-span-1 text-xl font-light mt-2'>Message</label>
                <textarea 
                    name="message" 
                    value={form.note}
                    onChange={() => handleChange}
                    placeholder='Your Message'
                    className='border border-zinc-800 rounded-lg text-zinc-400 col-span-3 w-full p-2 mb-5'
                />
            </div>
            <button 
                className='bg-amber-500 text-zinc-700 font-semibold text-xl rounded-xl mt-2 px-12 py-2 cursor-pointer'
                onClick={() => handleClick}>
                {loading ? "Loading" : "Submit" }
            </button>
        </div>
    )
}

export default ContactForm;