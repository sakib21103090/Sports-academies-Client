import React from 'react';
import { SiGoogleclassroom} from "react-icons/si";
import { MdOutlineSportsEsports,MdOutlineSportsKabaddi, MdEmojiEvents ,MdOutlinePersonalInjury } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";

const Things = () => {
    return (
        <div className='mb-12'>
        <div>
            <h2 className='text-primary-color  font-bold text-4xl text-center mb-6 mt-12'>Services You Get</h2>
        </div>

        <div className='grid max-w-screen-lg mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-10 '>
            <div>
                <div className='mt-4 text-4xl mx-36'>
                <MdOutlineSportsEsports />
                </div>
                <h2 className='mx-20 text-xl font-bold'>Training Programs</h2>
                <p className='mx-4 text-center' >Offering comprehensive training programs for various sports, catering to different age groups and skill levels</p>
                </div>
                <div>
                <div className='mt-4  text-4xl mx-36'>
                <SiGoogleclassroom ></SiGoogleclassroom>
                </div>
                <h2 className='mx-20 text-xl font-bold'>Personal Training </h2>
                <p className='mx-4 text-center' >Providing one-on-one coaching sessions tailored to individual needs and goals, focusing on skill development.</p>
                </div>
                <div>
                <div className='mt-4 text-4xl mx-36'>
                <MdOutlineSportsKabaddi ></MdOutlineSportsKabaddi>
                </div>
                <h2 className='mx-20 text-xl font-bold'>Fitness Assessment</h2>
                <p className='mx-4 text-center' >Offering nutritional counseling and meal planning services to support athletes</p>
                </div>
                <div>
                <div className='mt-4 text-4xl mx-36'>
                <MdOutlinePersonalInjury ></MdOutlinePersonalInjury>
                </div>
                <h2 className='mx-20 text-xl font-bold'>Injury Support</h2>
                <p className='mx-4 text-center' >Providing mental skills training, including visualization, goal-setting, and stress management </p>
                </div>
                <div>
                <div className='mt-4  text-4xl mx-36'>
                <GiCampingTent ></GiCampingTent>
                </div>
                <h2 className='mx-20 text-xl font-bold'>Sports Camps</h2>
                <p className='mx-4 text-center' >Organizing sports camps and clinics during school breaks or weekends to provide intensive training</p>
                </div>
                <div>
                <div className='mt-4  text-4xl mx-36'>
                <MdEmojiEvents ></MdEmojiEvents>
                </div>
                <h2 className='mx-20 text-xl font-bold'>Sports Events</h2>
                <p className='mx-4 text-center' >ganizing sports events, tournaments, and competitions for athletes</p>
                </div>

           

        </div>
        </div>
    );
};

export default Things;