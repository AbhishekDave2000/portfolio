import { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { useColor } from '../context/ThemeContext';
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz6lVg7KYu5rW-opK8KdDm5UFh6yoq6bBTei78cDri1_kVzkD5fhfZsu9KiZ2VhY8WZfQ/exec"
import { toast } from "react-hot-toast";

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

    const handleSubmit = async () => {
        if(!form.name || !form.email || !form.message) return;

        setLoading(true);

        try{
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // ← required for Google Scripts
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            setForm({name: "", email: "", subject: "", message: ""});
            toast.success("Message sent successfully.")
        } catch (err) {
            toast.error("Something went wrong, please try again.");
        } finally{
            setLoading(false);
        }
    }

    return(
        <div className={`bg-zinc-950 border border-${c(950)} md:col-span-1 backdrop-blur-2xl rounded-2xl pt-6 pb-2 px-6 lg:py-10 ld:px-10 my-5 md:my-0`}>
            
            {/* Header Section */}
            <div className='mb-10'>
                <div className='flex gap-4'>
                    <div className={`h-14 w-14 flex items-start justify-center text-${c(400)} font-light`}>
                        <MdOutlineMail className='text-3xl lg:text-5xl mt-1.5'/>
                    </div>

                    <div>
                        <h2 className="text-2xl lg:text-5xl font-light text-white">
                            Let's Work Together
                        </h2>
                        <div className="flex gap-2 items-center">
                            <div className={`h-0.5 w-20 bg-linear-to-r from-${c(500)} to-${c(900)}`}></div>
                            <div className={`h-1 w-1 rounded-full bg-${c(500)}`}></div>
                        </div>

                        <p className="text-zinc-400 mt-2 text-sm lg:text-lg">
                            Have a project in mind or want to collaborate?
                        </p>
                        <p className="text-zinc-400 mt-2 text-sm lg:text-lg">
                            I'd love to hear from you.
                        </p>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className='flex flex-col gap-1.5'>
                <label className='text-zinc-400 col-span-1 text-sm lg:text-lg font-light mt-2'>Name</label>
                <input 
                    type="text" 
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder='Your Name'
                    className='border border-zinc-800 rounded-lg text-zinc-400 text-xs lg:text-lg col-span-3 w-full p-2 mb-5'
                />
            </div>

            <div className='flex flex-col gap-1.5'>
                <label className='text-zinc-400 col-span-1 text-sm lg:text-lg font-light mt-2'>Email</label>
                <input 
                    type="email" 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder='Your Email'
                    className='border border-zinc-800 rounded-lg text-zinc-400 text-xs lg:text-lg col-span-3 w-full p-2 mb-5'
                />
            </div>

            <div className='flex flex-col gap-1.5'>
                <label className='text-zinc-400 col-span-1 text-sm lg:text-lg font-light mt-2'>Subject</label>
                <input 
                    type="text" 
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder='Subject' 
                    className='border border-zinc-800 rounded-lg text-zinc-400 text-xs lg:text-lg col-span-3 w-full p-2 mb-5'
                />
            </div>

            <div className='flex flex-col gap-1.5'>
                <label className='text-zinc-400 col-span-1 text-sm lg:text-lg font-light mt-2'>Message</label>
                <textarea 
                    name="message" 
                    value={form.message}
                    onChange={handleChange}
                    placeholder='Your Message'
                    className='border border-zinc-800 rounded-lg text-zinc-400 text-xs lg:text-lg col-span-3 w-full p-2 mb-5'
                />
            </div>
            <button 
                className={`border border-${c(700)} text-zinc-400 hover:bg-${c(600)} hover:text-zinc-200 font-semibold text-sm lg:text-xl rounded-xl mt-2 px-5 lg:px-12 py-1.5 lg:py-2 cursor-pointer`}
                onClick={handleSubmit}>
                {loading ? "Loading" : "Submit" }
            </button>
        </div>
    )
}

export default ContactForm;