export default function Contact(){
    return (
        <div class="h-full md:h-screen flex flex-col justify-center bg-blue-600 w-full ">
            <div class="flex flex-col md:w-1/2 w-[400px] justify-center mx-auto max-lg:my-20 ">
                <div className="flex flex-col [&>*]:mb-6 max-md:mx-auto max-md:items-center max-md:w-md items-center">
                    <h1 className="text-5xl text-white font-bold font-lexend-mega ">Contact Me!</h1>
                    <p className="text-xl text-white">Feel free to reach out regarding any questions, comments, or whatever else using the form below and I will do my best to respond!</p>
                </div>
                
                    <form
                    action="https://getform.io/f/32df356b-c596-43e3-89ef-ca34799750af"
                    method="POST"
                    encType="multipart/form-data"
                    className="flex flex-col justify-center w-full">
                    <label className="text-white text-xl font-bold">Name</label>
                    <input type="text" name="name" placeholder="Ali Usmani" className="my-4 p-2 border-2 rounded-md text-flint-500 focus:outline-none">

                    </input>
                    <label className="text-white text-xl font-bold">Email</label>
                    <input type="text" name="email" placeholder="ali.usmani@email.com" className="my-4 p-2 border-2 rounded-md text-flint-500 focus:outline-none">

                    </input>
                    <label className="text-white text-xl font-bold">Message</label>
                    <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 border-2 rounded-md text-flint-500 focus:outline-none">

                    </textarea>
                    <button className="mt-8 w-full bg-black text-white text-xl font-bold p-2 rounded-md">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}