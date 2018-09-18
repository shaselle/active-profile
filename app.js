const Person  = {
    name: "",
    profile: "",
    age: "",
    gender:"",
    phone: "",
    email: "",
    achievements:[],
    socials:{},
    bio:""
};

const perssons = [
    {
        name: "Shadrack",
        profile: "images/shad.png",
        age: "25",
        gender:"M",
        phone: "6044463273",
        email: "shaselloiel@gmail.com",
        achievements:[],
        socials:{},
        bio:""
    },
    {
        name: "Jack",
        profile: "",
        age: "21",
        gender:"M",
        phone: "",
        email: "",
        achievements:[],
        socials:{},
        bio:""
    },
    {
        name: "James",
        profile: "",
        age: "19",
        gender:"M",
        phone: "",
        email: "",
        achievements:[],
        socials:{},
        bio:""
    }
];

/**
 * */
const idx = (x)=>{
    const el = document.getElementById(x);
    return {
        click: function () {
            
        }
    }
};

const p1 = idx("p1");
const p2 = idx("p2");
const p3 = idx("p3");