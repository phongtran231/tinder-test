import type {GetServerSideProps, NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Card from "../components/Card";
import {UserType} from "../types/UserType";
import ActionBar from "../components/ActionBar";
import {useEffect, useState} from "react";

type HomeProps = {
  users: UserType[];
}

const Home: NextPage<HomeProps> = ({users}: HomeProps) => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const localAge = localStorage.getItem('age') || 0;
    if (localAge) {
      setAge(parseInt(localAge) || 0);
    } else {
      const randomAge = Math.floor(Math.random() * 11) + 20;
      localStorage.setItem('age', String(randomAge));
      setAge(randomAge);
    }
  }, []);

  return (
      <div className={styles.container}>
        <Card
            src={users[0].picture}
            name={users[0].firstName + ' ' + users[0].lastName}
            age={age}
        />
        <ActionBar/>
      </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://dummyapi.io/data/v1/user?limit=10", {
    headers: {
      "app-id": "623da72da20f9c28603028df"
    }
  })
  const response = await res.json();
  return {
    props: {
      users: response.data,
    }
  }
}

export default Home;
