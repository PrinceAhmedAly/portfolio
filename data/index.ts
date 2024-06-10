export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "absolute -left-32",
    titleClassName: "justify-start",
    img: "/footer-grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a text to voice generator",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-end lg:justify-end",
    img: "/b5.svg",
    spareImg: "/footer-grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const techStackIcons = [
  "/tech/html.svg",
  "/tech/css.svg",
  "/tech/js.svg",
  "/tech/bs.svg",
  "/tech/tail.svg",
  "/tech/ts.svg",
  "/tech/re.svg",
  "/tech/next.svg",
  "/tech/git.svg",
];

export const projects = [
  {
    id: 1,
    title: "Masar - web application",
    des: "Masar is a simple web app build for helping deaf people to reach their distinations in the university by scanning qr codes and exploring vidoes and texts.",
    img: "/projects/masar.png",
    iconLists: ["/tech/html.svg", "/tech/css.svg", "/tech/re.svg", "/tech/tail.svg",],
    link: "https://www.princeahmedaly.githubio.com/masar-latest",
  },
  {
    id: 2,
    title: "Noon.com website",
    des: "Cloning Noon.com website UI & Functionality using latest Next.js version and tailwind for styling.",
    img: "/projects/noon.png",
    iconLists: ["/tech/html.svg", "/tech/css.svg", "/tech/next.svg", "/tech/tail.svg",],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Galaxy Bike website",
    des: "Cloning Galaxy Bike website home page and product page with cart functionality & responsive using CSS Media Query..",
    img: "/projects/galaxy.png",
    iconLists: ["/tech/html.svg", "/tech/css.svg", "/tech/js.svg",],
    link: "https://www.galaxy-bike.vercel.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with him was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    image: "./profile.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    image: "./profile.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    image: "./profile.svg",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    image: "./profile.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/companies/cloud.svg",
    nameImg: "/companies/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/companies/app.svg",
    nameImg: "/companies/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/companies/host.svg",
    nameImg: "/companies/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/companies/s.svg",
    nameImg: "/companies/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/companies/dock.svg",
    nameImg: "/companies/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Intern at Barmaga Academy",
    desc: "Learned how to develop web pages from Figma/AdobeXD files and worked as a UI Developer",
    className: "md:col-span-2",
    thumbnail: "/b-ac.png",
  },
  {
    id: 2,
    title: "Frontend and cross platform track",
    desc: "Joined ITI frontend intern and studied modern web development skills like React/Next.js.",
    className: "md:col-span-2",
    thumbnail: "/iti.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/icons/git.svg",
    link: "https://github.com/PrinceAhmedAly",
  },
  {
    id: 2,
    img: "/icons/fb.png",
    link: "https://fb.com/ahmedhamdan.page",
  },
  {
    id: 3,
    img: "/icons/link.svg",
    link: "https://www.linkedin.com/in/ahmed-hamdan-cr7/",
  },
];
