import {getMatchesUser} from "../../services/userService";
import {UserType} from "../../types/UserType";
import Image from "next/image";
import ActionBar from "../../components/ActionBar";

type MatchesProps = {
    matchesUser: UserType[],
    currentUser: string
}

const Matches = ({matchesUser, currentUser}: MatchesProps) => {
    return (
        <>
            <div className="bg-white h-96 mt-20 p-5">
                <p>Matches: </p>
                {
                    matchesUser && matchesUser.length > 0 ? matchesUser.map(user => {
                        return (
                            <div key={user.uuid} className="pt-5 flex border-b-2 pb-2">
                                <Image src={user.picture} width="50" height="50" layout="intrinsic" className="flex-auto rounded-full" />
                                <p className="block pt-4 pl-5">{user.name}</p>
                            </div>
                        )
                    }): "Someone will be in love with you, keep discovering !!!"
                }
            </div>
            <ActionBar currentUser={currentUser} />
        </>
    )
}

export async function getStaticProps({params}: any) {
    const { currentUser } = params;
    const { data } = await getMatchesUser(currentUser);
    return {
        props: {
            matchesUser: data,
            currentUser,
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    }
}

export default Matches;
