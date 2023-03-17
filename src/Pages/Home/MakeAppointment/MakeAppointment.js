import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt=""
                        className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appoinment</h4>
                        <h1 className="text-white text-4xl font-bold">Make an appointment Today</h1>
                        <p className="text-white py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;