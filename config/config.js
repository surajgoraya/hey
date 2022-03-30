import authorImage from '../public/profile.jpg';
const CONFIG = {
    site_title: "suraj goraya",
    site_description: "Links",
    meta_title: "@surajgoraya | Links",
    meta_description: "5th year computer science student, making music and coding things.",
    picture: {
        show_picture: true,
        author_image: authorImage,
        alt_text: "A black and white image of Suraj"
    },
    main_line: "suraj goraya",
    by_line: "5th year computer science student, making music and coding things.",
    links: [
        {text: 'music – spotify', ref: 'https://open.spotify.com/artist/6FWyVNtwkA0CeTM9I7Q4DI?si=T-ANCOxKQi2maKUlxBleAA'},
        {text: 'website – surajgoraya.ca', ref: 'https://surajgoraya.ca'},
        {text: 'github – @surajgoraya', ref: 'https://github.com/surajgoraya/'},
    ],
    copyright: "suraj goraya",
}

module.exports = {
    CONFIG
}