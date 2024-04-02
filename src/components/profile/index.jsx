import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NavColumn from "../common/NavColumn";
import ProfileCard from "./profileCard";


function ProfilePage() {
    const [user, setUser] = useState(null);

    const { userId } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`http://localhost:5050/users/${userId}`);
                const fetchedUser = await res.json();
                setUser(fetchedUser);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        console.log("This is userId", userId);
        fetchUser();
    }, []);

    return (
        <>
            <NavColumn user={user}></NavColumn>
            <ProfileCard user={user}></ProfileCard>
        </>
    );
}

export default ProfilePage;
