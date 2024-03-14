import React from 'react';

const User = ({ user }) => {
    // Convert the object into an array of its entries ([key, value] pairs)
    const entries = Object.entries(user);

    return (
        <div>
            {entries.map((entry, index) => (
                <p key={index}>Key: {entry[0]}, Value: {entry[1]}</p>
            ))}
        </div>
    );
};

export default function App() {
    const user = {
        name: 'John',
        age: 36,
        email: 'john@example.com'
    };

    return <User user={user} />;
}