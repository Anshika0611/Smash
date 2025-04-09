import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LectureDetails = ({ match }) => {
    const [lecture, setLecture] = useState(null);

    useEffect(() => {
        const fetchLecture = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:5000/api/lectures/${match.params.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setLecture(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLecture();
    }, [match.params.id]);

    return (
        <div>
            <h1>{lecture?.title}</h1>
            <p>{lecture?.description}</p>
            <video controls>
                <source src={`http://localhost:5000${lecture?.videoUrl}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default LectureDetails;