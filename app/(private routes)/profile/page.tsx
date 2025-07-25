import React from 'react';
import css from './ProfilePage.module.css';
import { Metadata } from 'next';
import { getServerMe } from '@/lib/api/serverApi';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Your Profile | NoteHub',
  description: 'View and update your user profile on NoteHub — your space for personal notes',
  openGraph: {
    title: 'Your Profile | NoteHub',
    description:
      'Manage your profile on NoteHub: change your avatar, name, and other account settings',
    url: 'https://09-auth-seven.vercel.app/profile',
    type: 'profile',
    siteName: 'NoteHub',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub logo',
      },
    ],
  },
};

const ProfilePage = async() => {
  const user = await getServerMe();
  
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href={`/profile/edit`} className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <Image src={user.avatar} alt="User Avatar" width={120} height={120} className={css.avatar} />
        </div>
        <div className={css.profileInfo}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
