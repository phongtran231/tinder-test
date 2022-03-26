import Link from 'next/link'

type ActionBarProps = {
    currentUser: string | null;
}

const ActionBar = ({currentUser}: ActionBarProps) => {
    return (
        <div className="bg-white flex border-t-2 pb-">
            <Link href={`/liked/${currentUser}`}>
                <a className="flex-1 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-600 inline-block" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    Liked
                </a>
            </Link>
            <Link href="/">
                <a className="flex-1 text-center border-l-2 border-r-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 inline-block" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg> Discover
                </a>
            </Link>
            <Link href={`/matches/${currentUser}`}>
                <a className="flex-1 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 inline-block" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                    Matches
                </a>
            </Link>
        </div>
    )
}

export default ActionBar;
