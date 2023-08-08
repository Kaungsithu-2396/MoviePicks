import React from "react";
import Link from "next/link";
type Props = {
    keyOfMovie: string;
    detail: movieDetail;
};

export default function DetailSection({ keyOfMovie, detail }: Props) {
    return (
        <>
            <div className="h-screen h relative">
                {detail.backdrop_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
                        alt=""
                        className="h-full w-full object-cover  "
                    />
                ) : (
                    ""
                )}

                <div className="absolute   h-full lg:bg-black/60 bg-black/40  top-0 w-full  ">
                    <div className="flex md:justify-evenly justify-center  px-5  flex-col lg:flex-row lg:items-center h-full ">
                        <div className="lg:block hidden">
                            {detail.poster_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
                                    alt=""
                                    className=" lg:h-[30rem] h-auto w-[50%] lg:w-full m-auto object-cover rounded-lg"
                                />
                            ) : (
                                <h1 className="border-2 border-white px-6 py-52">
                                    No Image Available
                                </h1>
                            )}
                        </div>
                        <div className="w-[50%] flex flex-col md:gap-7  lg:gap-6 gap-2">
                            <h1 className="lg:text-4xl text-2xl uppercase">
                                {detail.original_title}
                            </h1>
                            <h1 className="lg:text-3xl text-red-700 text-2xl uppercase">
                                {detail.adult && "18+"}
                            </h1>

                            <h2 className="lg:text-2xl text-xl text-amber-500">
                                IMDB Voting {detail.vote_average.toFixed(2)}
                            </h2>
                            <div className="hidden lg:block">
                                <h3 className="text-3xl">The Genres</h3>
                                <div className="flex md:gap-6 gap-3 mt-4">
                                    {detail.genres.map((el) => {
                                        return (
                                            <h3
                                                key={el.id}
                                                className=" px-2 py-3 lg:px-4 lg:py-2 border-2 border-white rounded-md md:bg-amber-400 text-white md:text-black font-bold"
                                            >
                                                {el.name}
                                            </h3>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="">
                                <h4 className="text-3xl">Overview</h4>
                                <h4 className="text-white/80 mt-4 w-[20rem] lg:w-auto">
                                    {detail.overview}
                                </h4>
                            </div>

                            <div className="flex gap-5">
                                {keyOfMovie ? (
                                    <Link
                                        href={`https://www.youtube.com/watch?v=${keyOfMovie}`}
                                        className=""
                                        target="_blank"
                                    >
                                        <button className="px-10 py-2 border-2 border-neutral-200 hover:scale-105 bg-amber-500 text-black rounded-md duration-300 delay-200 ">
                                            Trailer
                                        </button>
                                    </Link>
                                ) : (
                                    <button className="px-10 py-2 border-2 border-neutral-200 hover:scale-105 bg-amber-500 text-black rounded-md duration-300 delay-200 ">
                                        No Trailer Available
                                    </button>
                                )}
                                {!!detail.homepage ? (
                                    <Link
                                        href={`${detail.homepage}`}
                                        className=""
                                        target="_blank"
                                    >
                                        <button className="px-10 py-2 border-2 border-neutral-200 hover:scale-105 hover:text-amber-400 rounded-md duration-300 delay-200 ">
                                            Website
                                        </button>
                                    </Link>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}