import { Container } from "@shared"
const ContactForm = () => {
    const sharedClasses = {
        input: 'border border-[#000] bg-[transparent] hover:bg-[#FCCA6D] transition duration-300 ease-out-in focus:outline-[#000] focus:outline-[2px] focus:outline-offset-[2px] py-2 px-4 w-full rounded-[30px] mt-2',
        checkbox: 'border-[#000] bg-[red] focus:rounded-full focus:ring-[#000] checked:bg-[#FCCA6D] checked:border-[#000] mr-2',
        button: 'bg-black text-white p-1 w-[160px] py-[15px] text-[20px] rounded-[100px] mb-2 ml-2 lg:static lg:ml-0 lg:mt-4',
    }
    return (
        <section>
            <div className="bg-gradient-to-b from-[#F2B9B4] to-[#FCCA6D] py-[100px]">
                <Container>
                    <div className="flex flex-col lg:flex-row items-start justify-between">
                        <div className="lg:w-1/2">
                            <h1 className="text-[60px] font-bold mb-6">Let’s connect.</h1>
                            <p>email@example.com</p>
                            <p className=" mb-4">(555) 555-5555</p>
                            <p>123 Demo Street</p>
                            <p className=" mb-6">New York, NY 12345</p>
                            <div className="flex space-x-4 mb-6">
                                <a href="#" className="hover:text-zinc-300">
                                    Instagram
                                </a>
                                <a href="#" className="hover:text-zinc-300">
                                    Twitter
                                </a>
                            </div>
                        </div>
                        <form className="lg:w-1/2 bg-[transparent] rounded-lg ">
                        <label className="block text-[#000] mb-4">
                                        Name <span>(required)</span>
                                    </label>
                            <div className="mb-4 flex flex-col lg:flex-row lg:items-start">
                                <div className="lg:w-full mb-4 lg:pr-2">
                                    <label className="block text-[#000]" htmlFor="first-name">
                                        First Name
                                    </label>
                                    <input className={sharedClasses.input} type="text" id="first-name" required />
                                </div>
                                <div className="lg:w-full mb-4 lg:pl-2">
                                    <label className="block text-[#000]" htmlFor="last-name">
                                        Last Name
                                    </label>
                                    <input className={sharedClasses.input} type="text" id="last-name" required />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#000]" htmlFor="email">
                                    Email <span>(required)</span>
                                </label>
                                <input className={sharedClasses.input} type="email" id="email" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#000]" htmlFor="message">
                                    Message <span>(required)</span>
                                </label>
                                <textarea className="border mt-2 border-[#000] hover:bg-[#FCCA6D] focus:outline-[#000] focus:outline-[2px] focus:outline-offset-[2px]  transition duration-300 ease-out-in p-2 w-full rounded-[20px] bg-[transparent]" id="message" rows={4} required></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#000] mb-2">How did you hear about us?</label>
                                <div className="flex flex-col">
                                    <div className="mb-2">
                                        <input type="checkbox" className={sharedClasses.checkbox} id="social-media" name="referral" value="social-media"/>
                                        <label htmlFor="social-media" className="mr-4">
                                            Social media
                                        </label>
                                    </div>
                                    <div>
                                        <input style={{backgroundColor:"red"}} type="checkbox" className={sharedClasses.checkbox} id="other" name="referral" value="other"/>
                                        <label htmlFor="other">Other</label>
                                    </div>
                                </div>
                            </div>
                            <button className={sharedClasses.button}>Send</button>
                        </form>
                    </div>
                </Container>
            </div>
        </section>
    )
}
export default ContactForm;