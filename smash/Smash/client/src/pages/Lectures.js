import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Lectures = () => {
    const [lectures, setLectures] = useState([]);

    useEffect(() => {
        const fetchLectures = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/api/lectures', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setLectures(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLectures();
    }, []);

    return (
        <div>
            <h1>Lectures</h1>
            <ul>
                {lectures.map((lecture) => (
                    <li key={lecture._id}>
                        <a href={`/lectures/${lecture._id}`}>{lecture.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Lectures;