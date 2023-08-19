import students from '../assets/about/students.json'
import engagement from '../assets/about/engagement.json'
import stvr from '../assets/about/vr.json'
import hackathon from '../assets/about/hackathon.json'
import collab from '../assets/about/collab.json'
import animation from '../assets/bitcoin.json'

let about=[
    {
        id:1,
        title:"Educational Workshops and Seminars: ",
        animation:students,
        description:"Our society is dedicated to fostering a deep understanding of AR, VR, and blockchain technology. We host engaging workshops, seminars, and expert talks to introduce members to the fundamentals, applications, and future potential of these technologies. These sessions will range from beginner-friendly introductions to advanced discussions about the latest developments.",
    },
    {
        id:2,
        title:"Student Engagement and Awareness: ",
        animation:engagement,
        description:"Central to our mission is connecting with students and young minds. We collaborate with educational institutions to organize awareness campaigns, interactive sessions, and hands-on experiences that showcase the practical aspects of AR, VR, and blockchain. Through these initiatives, we aim to inspire the next generation of creators, developers, and innovators.",
    },
    {
        id:3,
        title:"Virtual World Building: ",
        animation:stvr,
        description:"As advocates of AR and VR, we encourage members to unleash their creativity by participating in collaborative virtual world-building projects. Imagine constructing entire landscapes, cities, or imaginative realms in virtual space, where you can create, share, and interact with others in ways previously unattainable.",
    },
    {
        id:4,
        title:"Blockchain Exploration: ",
        animation:animation,
        description:"Delve into the world of blockchain technology through interactive demonstrations and discussions. Learn about cryptocurrencies, smart contracts, decentralized applications (DApps), and their potential to revolutionize industries beyond finance. Members can explore blockchain's implications for transparency, security, and decentralized governance.",
    },
    {
        id:5,
        title:"Hackathons and Challenges: ",
        animation:hackathon,
        description:"Our society hosts hackathons and challenges to encourage innovation and problem-solving within the realms of AR, VR, and blockchain. These events provide opportunities for individuals to collaborate, experiment, and develop groundbreaking projects that merge technology and creativity.",
    },
    {
        id:6,
        title:"Networking and Collaboration:  ",
        animation:collab,
        description:"Join a diverse community of tech enthusiasts, creators, educators, and industry professionals who share a passion for the metaverse. Connect with like-minded individuals, foster partnerships, and explore potential collaborations to push the boundaries of what's possible.",
    },
]

export default about;