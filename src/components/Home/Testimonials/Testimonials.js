import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";

// Stylesheets
import "pure-react-carousel/dist/react-carousel.es.css";

function Testimonials() {

    return (
        <div className="z-10">
            <div 
                className="flex items-center justify-between absolute z-0">
                    {/* w-full */}
                <div className="w-1/3 bg-white h-full" />
                <div className="w-4/6 ml-16 bg-gray-100 h-full" />
            </div>
            <div className="xl:pr-20 xl:pl-4 px-4 py-20 2xl:mx-auto 2xl:container relative z-10 font-[Inter]">
                <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={7}>
                    <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
                        What our customers are
                        <br />
                        saying
                    </h1>
                    <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">What our customers are saying</h1>
                    <Slider>

                        {/* Slide 1 */}
                        <Slide index={0} tabIndex="null">
                            <div className="flex">
                                <div className="mt-14 md:flex">
                                    {/*  */}
                                    <div className="md:mt-0 mt-4 flex flex-col justify-between pr-10">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">I absolutely loved this program!</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">Ms. H and all the instructors at MedCare are amazing. I joined the program in 2017 to get certified as a medical assistant and work while attending college and in the future professional school. This program is great for all students who are pursuing careers in the medical field and the best thing is that you can finish the program at your own pace and take as long as you need or your hectic school/life schedule permits.</p>
                                        </div>
                                        <div className="mt-8">
                                            <p className="text-base font-medium leading-4 text-gray-800">M. Gallego</p>
                                            <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>

                        {/* Slide 2 */}
                        <Slide index={1}>
                            <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                <div className="mt-14 md:flex">
                                    {/*  */}
                                    <div className="md:mt-0 mt-4 flex flex-col justify-between pr-10">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">MedCare is absolutely amazing.</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">Clinicals are always very hands on and informative, which helps you to retain the necessary material. I would 10/10 recommend this program to anyone looking to obtain a certification to get the necessary hours/experience they need to to go on to their professional schools and careers.</p>
                                        </div>
                                        <div className="mt-8">
                                            <p className="text-base font-medium leading-4 text-gray-800">B. Cunningham</p>
                                            <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>

                        {/* Slide 3 */}
                        <Slide index={2}>
                            <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                <div className="mt-14 md:flex">
                                    {/*  */}
                                    <div className="md:mt-0 mt-4 flex flex-col justify-between pr-10">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">Received my MA certificate from MedCare and I couldn’t have asked for a better experience.</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">Ms. H is so passionate about the medical field and it shows in her teaching. The program works with students schedules and Ms. H and her staff will do everything to make sure you feel prepared for the test. I learned so much while attending this program and can’t thank MedCare enough for everything!</p>
                                        </div>
                                        <div className="mt-8">
                                            <p className="text-base font-medium leading-4 text-gray-800">J. Pena</p>
                                            <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>

                        {/* Slide 4 */}
                        <Slide index={3}>
                            <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                <div className="mt-14 md:flex">
                                    {/*  */}
                                    <div className="md:mt-0 mt-4 flex flex-col justify-between pr-10">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">This is the best place to go to get your certification.</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">You learn important techniques in medicine extremely well from experienced health care professionals. It’s all hands on, using real patients and real medical equipment.</p>
                                        </div>
                                        <div className="mt-8">
                                            <p className="text-base font-medium leading-4 text-gray-800">M. Foltz</p>
                                            <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>

                        {/* Slide 5 */}
                        <Slide index={4}>
                            <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                <div className="mt-14 md:flex">
                                    {/*  */}
                                    <div className="md:mt-0 mt-4 flex flex-col justify-between pr-10">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">This is such an amazing program.</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">It’s an easy way for college students to receive their certifications with hands on experience.</p>
                                        </div>
                                        <div className="md:mt-0 mt-8">
                                            <p className="text-base font-medium leading-4 text-gray-800">A. Waris</p>
                                            <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>

                        {/* Slide 6 */}
                        <Slide index={5}>
                            <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                <div className="mt-14 md:flex">
                                    {/*  */}
                                    <div className="md:mt-0 mt-4 flex flex-col justify-between pr-10">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">Medcare is a great program!</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">Mrs. H. is an amazing instructor and wonderful person overall. She is very knowledgeable about the material she teaches. She makes sure that you are ready before taking the exam. This program was perfect for me while I was in undergrad.</p>
                                        </div>
                                        <div className="mt-8">
                                            <p className="text-base font-medium leading-4 text-gray-800">T. Nguyen</p>
                                            <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>

                        {/* Slide 7 */}
                        <Slide index={6}>
                            <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                <div className="mt-14 md:flex">
                                    {/*  */}
                                    <div className="md:mt-0 mt-4 flex flex-col justify-between pr-10">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">MedCare is a wonderful and affordable program led by the passionate and knowledgeable Ms. H.</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">Ms. H and the MedCare instructors truly care about their students and go above and beyond to make sure we leave the school with the tools and the confidence needed to safely and properly carry out the duties of a medical assistant.</p>
                                        </div>
                                        <div className="mt-8">
                                            <p className="text-base font-medium leading-4 text-gray-800">R. Cummings</p>
                                            <p className="text-base leading-4 mt-2 mb-4 text-gray-600">Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </Slider>
                    <div className="flex items-center mt-8">
                        <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
                        </ButtonBack>

                        <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-2">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg" alt="next" />
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}

export default Testimonials;