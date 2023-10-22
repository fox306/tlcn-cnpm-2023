'use client';
import { Rating } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Text from './Text';

const Reviews = () => {
    const [value, setValue] = useState<number | null | undefined>(0);
    return (
        <div className="flex items-center h-[140px] bg-[#E6F1FB] p-5 gap-5 rounded-lg">
            <div className="flex items-center gap-5">
                <div className="w-20 h-20 relative rounded-full">
                    <Image src="/avt.png" alt="Ảnh" fill />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-bold">Hiii</span>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(newValue: any) => {
                            setValue(newValue);
                        }}
                    />
                </div>
                <div className="self-start">
                    <FavoriteBorderOutlinedIcon className="text-blue" />
                    <span>12</span>
                </div>
            </div>
            <div>viền xanh</div>
            <div>
                <Text />
            </div>
        </div>
    );
};

export default Reviews;
