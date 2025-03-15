import { testimonials } from "../constants"

export const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl my-10 lg:my-20">What people are saying</h2>
        <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                <div className="bg-neutral-800 rounded-md p-6 text-md border border-neutral-800 font-thin">
                <p>{testimonial.text}</p>
                <div className="flex mt-8 items-center">
                    <img src={testimonial.image} alt={testimonial.user} className="rounded-full w-10 h-10"/>
                    <div className="ml-7">
                    <h6 className="">{testimonial.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-500">{testimonial.company}</span>
                    </div>
                </div>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}
