import Image from 'next/image';

type CartProps = {
    src: string;
    name: string;
    age: number;
}

const Card = ({src, name, age} : CartProps) => {
    return (
        <div>
            <Image className="shrink" src={src} width="600" height="700" layout="responsive" />
            <div className="bg-white">
                <div className="shrink pl-2 pt-2">
                    <p>{name}, {age}</p>
                </div>
                <div className="text-center">
                    <button className="w-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    {' '}
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;
