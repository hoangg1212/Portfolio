import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
} from 'lucide-react';

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import project_img_1 from "../assets/images/image01.jpg";
import project_img_2 from "../assets/images/image01.jpg";
import project_img_3 from "../assets/images/image01.jpg";
import project_img_4 from "../assets/images/image01.jpg";
import project_img_5 from "../assets/images/image01.jpg";
import project_img_6 from "../assets/images/image01.jpg";
import project_img_7 from "../assets/images/image01.jpg";

export const skills_category = [
    {
        title: "Frontend",
        icon: Code2,
        description: "sbsvdfjbssjssss",
        skills: [
            { name: "React", level: 95, color: "bg-blue-500" },
            { name: "React", level: 90, color: "bg-blue-600" },
            { name: "React", level: 85, color: "bg-gray-800" },
            { name: "React", level: 55, color: "bg-cyan-500" },
            { name: "React", level: 75, color: "bg-pink-500" },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "sbsvdfjbssjssss",
        skills: [
            { name: "React", level: 95, color: "bg-blue-500" },
            { name: "React", level: 90, color: "bg-blue-600" },
            { name: "React", level: 85, color: "bg-gray-800" },
            { name: "React", level: 55, color: "bg-cyan-500" },
            { name: "React", level: 75, color: "bg-pink-500" },
        ],
    },
    {
        title: "Cloud",
        icon: Cloud,
        description: "sbsvdfjbssjssss",
        skills: [
            { name: "React", level: 95, color: "bg-green-600" },
            { name: "React", level: 90, color: "bg-blue-700" },
            { name: "React", level: 85, color: "bg-red-500" },
            { name: "React", level: 55, color: "bg-indigo-600" },
            { name: "React", level: 75, color: "bg-yellow-600" },
        ],
    },
    {
        title: "Database",
        icon: Database,
        description: "sbsvdfjbssjssss",
        skills: [
            { name: "React", level: 95, color: "bg-blue-600" },
            { name: "React", level: 90, color: "bg-orange-600" },
            { name: "React", level: 85, color: "bg-gray-900" },
            { name: "React", level: 55, color: "bg-orange-700" },
            { name: "React", level: 75, color: "bg-purple-600" },
        ],
    },
];

export const tech_stack = [
    "JavaScript",
    "HTML",
    "CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "JavaScript",
    "HTML",
    "CSS",
];

export const stats = [
    { number: "50", label: "abcahbdhsas" },
    { number: "3+", label: "abcahbdhsas" },
    { number: "20+", label: "abcahbdhsas" },
    { number: "100%", label: "abcahbdhsas" },
];

export const projects = [
    {
        id: 1,
        title: "Toeic",
        description: "hbshbsbsjs",
        image: project_img_1,
        tags: ["react", "tailwindcss"],
        liveUser: "#",
        githubUrl: "#",
        featured: false,
        category: "Full state",
    },
    {
        id: 2,
        title: "Toeic",
        description: "hbshbsbsjs",
        image: project_img_2,
        tags: ["react", "tailwindcss"],
        liveUser: "#",
        githubUrl: "#",
        featured: false,
        category: "Full state",
    },
    {
        id: 3,
        title: "Toeic",
        description: "hbshbsbsjs",
        image: project_img_3,
        tags: ["react", "tailwindcss"],
        liveUser: "#",
        githubUrl: "#",
        featured: false,
        category: "Full state",
    },
];

export const journey_steps = [
    {
        year: "2021",
        title: "haahaba",
        company: "ABC",
        description: "AVbvahvaa",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
        year: "2023",
        title: "haahaba",
        company: "ABC",
        description: "AVbvahvaa",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
        year: "2024",
        title: "haahaba",
        company: "ABC",
        description: "AVbvahvaa",
        icon: Code2,
        color: "bg-blue-500",
    },
];

export const passions = [
    {
        icon: Heart,
        title: "Faah",
        description: "hsghjsshjvshjs",
    },
    {
        icon: Phone,
        title: "Faah",
        description: "hsghjsshjvshjs",
    },
    {
        icon: Database,
        title: "Faah",
        description: "hsghjsshjvshjs",
    },
];

export const social_link = [
    {
        name: "Github",
        icon: FiGithub,
        url: "#",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "Linkedin",
        icon: FiLinkedin,
        url: "#",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "Twitter",
        icon: FiTwitter,
        url: "#",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
];

export const contact_info = [
    {
        icon: MapPin,
        label: "Location",
        value: "HCM",
    },
    {
        icon: Mail,
        label: "Email",
        value: "HCM@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "084874873",
    },
];