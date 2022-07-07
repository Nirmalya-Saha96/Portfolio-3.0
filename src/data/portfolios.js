import react1 from '../img/portImages/react_styled.png';

const portfolios = [
    {
        id: 1,
        category: 'BlockChain',
        image: 'https://cdn5.vectorstock.com/i/thumb-large/88/29/marriage-contract-signing-concept-happy-couple-vector-31298829.jpg',
        link1: 'https://friendly-liskov-084d03.netlify.app/',
        link2: 'https://github.com/Nirmalya-Saha96/PattiPatni',
        title: 'Patti-Patni',
        text: 'Web based Ethereum BlockChain Application, to reduce all Marriage & Childbirth FRAUDS using Solidity, IPFS-network Reactjs,Nodejs || This system reduces all types of frauds in MARRIAGE & generates unique token of certificates on Government approval. Maintains Child Birth control & public forum to track Marital & Parental status of any person handling divorce cases'
    },
    {
        id: 2,
        category: 'FullStack BlockChain',
        image: 'https://static.vecteezy.com/system/resources/previews/002/860/430/original/non-fungible-token-sell-and-buy-art-on-market-place-illustration-landing-page-for-websites-mobile-applications-vector.jpg',
        link1: 'https://ecstatic-curran-043ca0.netlify.app/',
        link2: 'https://github.com/Nirmalya-Saha96/CodeLinking',
        title: 'Smart Auction',
        text: 'FullStack Ethereum BlockChain prototype, for smooth secure auction using Solidity IPFS-network Reactjs Nodejs MongoDB Socket.io || RealTime Auction Hosting securing with Ethereum Payments, generating NFT tokens on sold items for tamperless records. || Creating a staging area for all nominated items by Node.js & MongoDB with Real-Time bidding using Socket.io || Finalist in Hack-a-Web hackathon'
    },
    {
        id: 3,
        category: 'BlockChain',
        image: 'https://media.istockphoto.com/vectors/crowdfunding-composition-concept-of-fundraising-us-coins-money-light-vector-id1221982950?k=20&m=1221982950&s=612x612&w=0&h=uvdzvz6hDwDPx5NGY3_21OGyV4MtNwT58xoWHzo4Brk=',
        link1: 'https://boring-pare-99ad4e.netlify.app/',
        link2: 'https://github.com/Nirmalya-Saha96/FundRaiser',
        title: 'FundRaiser',
        text: 'Web based Ethereum BlockChain application, to raise funds for your ideas & reduce frauds using Solidity IPFS-network Reactjs Nodejs || One solution to stop all FRAUDS in Fund generating campaigns with the help of BlockChains & Smart Contracts || Achieved by making all transactions transparent & non-finalized without prior approval of investors & admin manager. ||  Implemented Public choice VOTING system & Customer Care Services with BlockChain for non-tampered public views'
    },
    {
        id: 4,
        category: 'Android',
        image: 'https://cdn1.vectorstock.com/i/1000x1000/61/80/online-library-people-reading-books-vector-27466180.jpg',
        link1: 'https://www.linkedin.com/posts/nirmalya-saha-625993201_cryptography-machinelearnig-searchengine-activity-6861649646620618752-hr6C/',
        link2: 'https://github.com/Nirmalya-Saha96/College-Street',
        title: 'COLLEGE STREET APP',
        text: '01. A B-2-B market place for second hand books, with a library of book blogs, using kotlin, xml, firebase, Cryptography AES-technology  02. CRUD, operations of profiles, books, blogs(with like, unlike ,share), reviews, cart, address, placing order, delivery status | SQLite database for wishlist | users activity tracking & calling | Settings  03. End-To-End Encrypted Private Messaging using Cryptography AES technology with trained ChatBot & separate unread messages 04. Search Engine with filters & Image-To-Text Processing to search by snaps using Firebase ML Kit, QR Code generating and scanning at time of delivery for 2-way verification 05. Google Maps Apito show encrypted ADDRESS by AES technology'
    },
    {
        id: 5,
        category: 'MERN-stack',
        image: 'data:image/jpeg;base64,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',
        link1: 'https://nirmalyo-connectordevelopers.herokuapp.com/',
        link2: 'https://github.com/Nirmalya-Saha96/Connector3.0',
        title: 'Connector',
        text: 'Social Media for developers/HR’s to share github commit stories, blogs post, apply/post jobs to hire developers, using MERN-stack, Socket.io, JWT-token CRUD operations to Post stories(with like, unlike, comments), blogs, profile sections jobs and applying through submitting resume Like and unlike posts, blogs. Comments like and unlike comments Personalized dashboard to create, update & delete profile, experience, education, projects, awards & achievements, portfolio links, activity showing your posts and jobs posted. Resume builder - create, share resumes with real time edit access by providing unique access codes using Socket.io and Quill Api Private Messaging | One-To-One Video Conference interviews using WEBrtc Api | ChatBots using React ChatBot Kit Online code editor for HTML,CSS,JAVASCRIPT using Codemirror Api | Advance Alert System | Validation Checks | Encryptions | Private Routes'
    },
    {
        id: 6,
        category: 'MERN-stack',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPq0SrediVrq0zldhkAHyVVMjeg5hUP6bkcw&usqp=CAU',
        link1: 'https://nirmalyo-features.herokuapp.com/',
        link2: 'https://github.com/Nirmalya-Saha96/Features-2.0-Vedio-Chatbot',
        title: 'Features Website',
        text: 'FullStack Website which provides four features for registered users to access and keeps a track of times the users is using a feature.● FaceRecognition, points a face in any image using Clarifai API & face detection model. ● Video-Call, provides peer-to-peer calling feature through transferring video & audio using WEBrtc API & Socket.io ● Collaborate, use to create/edit and store documents and render by multiple users using Socket.io, Quill API, ● Technologies: React.JS | Node.JS | PostgreSQL | Socket.io | bcrypt'
    },
    {
        id: 7,
        category: 'MERN-stack',
        image: 'https://optinmonster.com/wp-content/uploads/2019/10/best-blog-sites-2.png',
        link1: 'https://gentle-beach-59251.herokuapp.com/',
        link2: 'https://github.com/Nirmalya-Saha96/Blog-Website',
        title: 'Blog Website',
        text: 'create your blogs and subscribe for latest content. using: MailChimp api for tracking all the subscribers and updating them. JASON back-end by nodeJS express ejs mongoDB mongoose . front-end by html5 css3 bootstrap 4 javascript jQuery.'
    },
    {
        id: 8,
        category: 'MERN-stack',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMN_i8Q2ZTwJONu6KNO2qJpUD4F6LH4kD8IQ&usqp=CAU',
        link1: 'https://morning-cliffs-64096.herokuapp.com/',
        link2: 'https://github.com/Nirmalya-Saha96/Secrets',
        title: 'Secrets Website',
        text: 'Post your secrets without worrying about your identity. and see others secrets. authenticated by data encryption hashing salting by handling cookies and session using passport and oauth. using: nodeJS, mongoDB, mongoose, express.'
    },
    {
        id: 9,
        category: 'Android',
        image: 'https://cdn.dribbble.com/users/16521/screenshots/7635773/media/85a48b6193b3fa3d824fc52943647c27.png?compress=1&resize=400x300',
        link1: 'https://www.linkedin.com/posts/nirmalya-saha-625993201_androiddevelopment-android-app-activity-6771681627237081088--evJ',
        link2: 'https://github.com/Nirmalya-Saha96/FoodRuunner-App',
        title: 'FoodRunner App',
        text: 'Zomato clone food ordering app make your first order with this with a list of 10 restaurants and their menu chart. using : Volley api calling, glide library, Intents(explicit and implicit), json and Gson parsing, Coroutines, SQLITE database,Room library, Live data,View Models. firebase and Firestone. using : kotlin and XML .'
    },
    {
        id: 10,
        category: 'Android',
        image: react1,
        link1: 'https://www.linkedin.com/posts/nirmalya-saha-625993201_androiddevelopment-activity-6763902711118270465-Phlm',
        link2: 'https://github.com/Nirmalya-Saha96/Bookhub-App-Final',
        title: 'BookHub App',
        text: 'To display top 10 best selling books of Amazon, and their description, to add them to favorites and to send and buy them. using Volley api calling, Glide library, Intent, SQLite Database, Room library, Gson. using kotlin and XML.'
    },
    {
        id: 11,
        category: 'Android',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOS3FMj_gXCEdSMRez0xKVaHypATkWGUSHw&usqp=CAU',
        link1: 'https://www.linkedin.com/posts/nirmalya-saha-625993201_androiddevelopment-activity-6764974726084382720-K9UM',
        link2: 'https://github.com/Nirmalya-Saha96/Notes-App',
        title: 'Notes App',
        text: 'Store notes and images and share it by Live data. through SQLITE database using Room library to store, delete and share notes in a View Model using Live data tech: Intents explicit and implicit, SQLite Room database, android architecture, View Model, Coroutines,Live data . using kotlin and XML.'
    },
    {
        id: 12,
        category: 'Game',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4w6KwXrxfpFnaygmKcRzpVvp7hiSxnwwdQ&usqp=CAU',
        link1: 'https://nirmalya-saha96.github.io/simon/',
        link2: 'https://github.com/Nirmalya-Saha96/simon',
        title: 'Simon Game',
        text: 'memory web game fully responsive, the user have to remember the right flow generated and respond. using html5 css3 bootstrap 4 javascript jQuery Dom mongoose'
    },
    {
        id: 13,
        category: 'Game',
        image: 'https://cdn-resources.ableton.com/resources/filer_thumbnails/2014/04/10/fistful-of-drumkits-preview.jpg__615x409_q85_crop_subsampling-2_upscale.jpg',
        link1: 'https://nirmalya-saha96.github.io/Drumkit/',
        link2: 'https://github.com/Nirmalya-Saha96/Drumkit',
        title: 'Drum Kit',
        text: 'Play music by just clicking the drum icons or only type out the respective keys using html5 css3 bootstrap 4 javascript dom'
    }
]

export default portfolios;
