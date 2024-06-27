import React from 'react';
import './Visionmission.css'

function Visionmission() {
    return (
        <>
            <div className="2xl:container bg-white">
                <div className="s-container w-[90%]  m-10 col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 col-xxl-9">
                    <h2 className='vm_heading py-5'>VISION MISSION</h2>
                    <div className='py-5'>
                        <h2 className='vm_subheading'>VISION</h2>
                        <p className='vm_paragraph mt-5 mr-5'>
                            The Vision of Sri Sai Ram Alumni Association is to create a strong bond between the institute and its alumni through a mutually beneficial network.
                        </p>
                    </div>
                    <div className='py-5'>
                        <h2 className='vm_subheading'>MISSION</h2>
                        <ul className='vm_list list-disc '>
                            <li>To build a strong Alumni network to help more young minds.</li>
                            <li>To act as a hub between Alumni and the Institute.</li>
                            <li>To encourage Alumni to contribute to the Institution's development.</li>
                        </ul>
                    </div>
                    <div className='py-5'>
                        <h2 className='vm_subheading'>GOALS</h2>
                        <ul className='vm_list list-disc '>
                            <li>Identifying potential Alumni firms for current students training, internships and Placements.</li>
                            <li>Job offers through Alumni firms Increasing institution's values through better Alumni connect.
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Visionmission;