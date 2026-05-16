'use client'

import { UpdateUserModal } from '@/component/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    
    return (
        <div className='mt-10'>
            <div className='max-w-100 mx-auto shadow-sm border-2 rounded-2xl border-gray-200'>
                <div className="items-center gap-3 p-8 flex flex-col text-center">
                    {user?.image ? (
                        <Image
                            src={user.image}
                            alt="user"
                            width={100}
                            height={100}
                            className="rounded-full justify-center"
                        />
                    ) : (
                        <FaUserCircle size={40} />
                    )}

                    <div className='space-y-2'>
                        <p className='font-bold text-[#5a00ff] text-xl'>{user?.name || 'Guest User'}</p>
                        <p className="text-sm text-gray-500 mb-4">
                            {user?.email || 'No email'}
                        </p>
                        <UpdateUserModal />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;