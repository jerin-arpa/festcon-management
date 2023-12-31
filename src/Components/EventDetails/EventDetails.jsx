import Rating from "react-rating";
import { Link, useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {

    const events = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const event = events.find(event => event.id === idInt);

    return (
        <div className=" bg-slate-900 py-10 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto px-5 my-10">
                <img className="rounded-xl" src={event.image} alt="" />


                <div className="flex items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-5 text-amber-600">{event.service_name}</h2>
                        <p>{event.details_description}</p>


                        <div className="mt-5">
                            <Rating
                                emptySymbol={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="orange"
                                        className="w-8 h-8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
                                }
                                fullSymbol={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="orange"
                                        className="w-8 h-8"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                }
                                initialRating={event.rating}
                                readonly
                            />
                        </div>

                        <div className="flex gap-10 mt-6">
                            <button className='btn btn-warning btn-outline'>Book Now</button>
                            <Link to='/'>
                                <button className='btn btn-warning btn-outline'>GO Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;