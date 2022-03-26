import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Card from "../components/Card";
import {UserType} from "../types/UserType";
import ActionBar from "../components/ActionBar";
import {useEffect, useState} from "react";
import {getRandomUser, getUserExceptLikedOrPassed} from "../services/userService";

const Home: NextPage = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [loginUser, setLoginUser] = useState<string | null>('');

    useEffect(() => {
        if (!localStorage.getItem('current_user')) {
            getRandomUser().then(({data}: any) => {
                localStorage.setItem('current_user', data.uuid);
                setLoginUser(data.uuid);
            })
        } else {
            setLoginUser(localStorage.getItem('current_user'));
        }
    }, []);

    useEffect(() => {
        if (loginUser) {
            getUserExceptLikedOrPassed(loginUser).then(res => {
                setUsers(res.data);
            })
        }
    }, [loginUser]);

    return (
        <div className={styles.container}>
            <Card
                users={users}
                currentUser={loginUser}
            />
            <ActionBar
                currentUser={loginUser}
            />
        </div>
    )
}

export default Home;
