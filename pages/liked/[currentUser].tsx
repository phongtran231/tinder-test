import {getUsersLiked} from "../../services/userService";
import {UserType} from "../../types/UserType";
import Image from "next/image";
import styles from './style.module.css';
import ActionBar from "../../components/ActionBar";

type UserLikeProps = {
    usersLiked: UserType[],
    currentUser: string;
}

const UserLiked = ({ usersLiked, currentUser }: UserLikeProps) => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 text-white bg-white">
                {
                    usersLiked && usersLiked.length > 0 ? usersLiked.map(user => {
                        return (
                            <div key={user.uuid} className="relative">
                                <Image className="shrink" src={user.picture} width="600" height="700" layout="responsive" alt="" />
                                <p className={styles['user-name-age']}>{user.name}, {user.age}</p>
                            </div>
                        )
                    }) : <p className="text-black pl-5">Your heart is freezing ?</p>
                }
            </div>
            <ActionBar currentUser={currentUser} />
        </>
    )
}

export async function getStaticProps({params}: any) {
    const { currentUser } = params;
    const {data} = await getUsersLiked(currentUser);
    return {
        props: {
            usersLiked: data,
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

export default UserLiked;
