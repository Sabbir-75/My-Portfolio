import React from 'react';
import SpotlightCard from '../New/New';
import jhpi from "../../assets/ঝিনাইদহ_পলিটেকনিক_ইনস্টিটিউট.png"
import bhs from "../../assets/240737822_245434984252689_2092328138236027944_n.jpg"

const educationData = [
    {
    logo: "https://i.ibb.co.com/qL9Jd0vS/136055146-3678946925515129-5748721216260701055-n.png", // এখানে Northern University Bangladesh এর লোগো দিও
    degree: 'BSc in CSE',
    institute: 'Northern University Bangladesh',
    location: 'Dhaka, Bangladesh',
    duration: '2025 - Present',
    details: [
        { label: 'CGPA', value: 'Ongoing' },
        { label: 'Department', value: 'CSE' }
    ]
},
    {
        logo: jhpi,
        degree: 'Diploma in CSE',
        institute: 'Jhenaidah Polytechnic Institute',
        location: 'Dhaka, Road, Jhenaidah 7300',
        duration: '2019 - 2023',
        details: [
            { label: 'CGPA', value: '3.77 / 4.00' },
            { label: 'Department', value: 'CSE' }
        ]
    },
    {
        logo: bhs,
        degree: 'SSC',
        institute: 'Baragangdia Secondary School',
        location: 'Baragangdia, Daulatpur, Kushtia',
        duration: '2017 - 2018',
        details: [
            { label: 'GPA', value: '4.61 / 5.00' },
            { label: 'Group', value: 'SCIENCE' }
        ]
    },
];

const EducationCard = ({ edu }) => (
    <div className="text-white">
        <div className="flex items-start gap-4">
            <img src={edu.logo} alt={edu.institute} className="w-20 h-20 bg-white object-contain border border-pink-500 rounded-md" />
            <div className='text-start'>
                <h3 className="font-bold text-lg">{edu.degree}</h3>
                <p className="text-base font-medium text-white">{edu.institute}</p>
                <p className="text-sm mb-2 text-gray-200">{edu.location}</p>
            </div>
        </div>
        <div className='flex justify-start -mt-2'>
            <span className="inline-block mt-1 px-2 py-1  font-medium text-xs bg-purple-600 text-white rounded">{edu.duration}</span>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
            {edu.details.map((detail, idx) => (
                <div key={idx} className="flex items-center bg-primary px-2 py-2 rounded">
                    <span className="text-sm">{detail.label}: <strong>{detail.value}</strong></span>
                </div>
            ))}
        </div>
    </div>
);

const EducationQualification = () => (
    <section id='Education' className="text-white max-w-7xl mx-auto py-2 md:py-3 lg:py-6 xl:py-8">
        <SpotlightCard>
            <h2 className="text-3xl font-bold text-center mb-2">
                Education <span className="text-primary">Qualification</span>
            </h2>
            <p className="text-center text-gray-400 mb-8">
                Establishing a strong and enduring base in Computer Science and Engineering.
            </p>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                {educationData.map((edu, idx) => (

                    <SpotlightCard>
                        <EducationCard key={idx} edu={edu} />
                    </SpotlightCard>
                ))}
            </div>
        </SpotlightCard>
    </section>
);

export default EducationQualification;
