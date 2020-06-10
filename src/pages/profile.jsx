import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../store/AuthProvider';
import { getUserProfile } from '../api';
import ProductCard from '../components/ProductCard/ProductCard';

const ProfileRow = ({ name, value }) => (
    <div className="row">
        <div className="row-name">{name}</div>
        <div className="row-value">{value}</div>
    </div>
);

export const ProfilePage = () => {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState({
        products: []
    });
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) loadUserProfile();
    }, [user]);

    const loadUserProfile = async () => {
        const profile = await getUserProfile({ id: user.id });
        setProfile(profile);
        setLoading(false);
    }

    return (
        <div className="container">
            {loading && <div className="loading">Loading...</div>}

            <h2>My Info</h2>
            <div className="table">
                <ProfileRow name="ID:" value={profile.id} />
                <ProfileRow name="Name:" value={`${profile.firstName} ${profile.lastName}`} />
                <ProfileRow name="Username:" value={profile.username} />
                <ProfileRow name="Email:" value={profile.email} />
                <ProfileRow name="Password:" value={profile.password} />
                <ProfileRow name="Age:" value={profile.age} />
                <ProfileRow name="Gender:" value={profile.sex} />
                <ProfileRow name="Role:" value={profile.role} />
            </div>

            <hr />

            <h2 className="stats-page-title">
                My Products
            </h2>
            <div className="products">
                <div className="products-list">
                    {profile.products.map(product => <ProductCard noForm={true} key={`product_${product.id}`} product={product} />)}
                </div>
            </div>

            <hr />

        </div>
    );
};

export default ProfilePage;