import Footer from '../../Components/Footer/Footer';

const Contact = () => {
    return (
        <div className=''>
    <h1 className='mt-9 text-7xl text-center text-amber-950 font-bold'>Contact Us</h1>

    <div className='flex flex-col md:flex-col lg:flex-row justify-center items-center my-12 mx-auto max-w-6xl'>
        <img src="https://i.ibb.co/yQVW8vW/image-3.png" alt="" />
            <div className="hero min-h-screen">
            <div className="hero-content ">
            <div className="text-center">
            </div>
            <div className="card w-96 shadow-2xl bg-base-100">
                <form className="card-body">
                <div className="">
                    <label className="label">
                    <span className="label-text">Name</span>
                    </label>
                    <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-80"
                    required
                    />
                </div>
                <div className="">
                    <label className="label">
                    <span className="label-text">Email</span>
                    </label>
                    <input
                    type="Email"
                    placeholder="Your Email"
                    className="input input-bordered w-80"
                    required
                    />
                </div>
                <div className="">
                    <label className="label">
                    <span className="label-text">Subject</span>
                    </label>
                    <input
                    type="text"
                    placeholder="Subjet"
                    className="input input-bordered w-80"
                    required
                    />
                </div>
                <div className="">
                    <label className="label">
                    <span className="label-text">Your Message</span>
                    </label>
                    <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-amber-900 text-white font-semibold">Send Message</button>
                </div>
                </form>
            </div>
            </div>
            </div>
    </div>

            <div className=''>
            <Footer></Footer>
            </div>
        </div>

           
     
    );
};

export default Contact;