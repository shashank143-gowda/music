🎵 Shashank's Music Album Website
Welcome to Shashank's Music Album Website, a dynamic and visually engaging music player that lets users explore themed music albums, play songs, and manage favorites or playlists — all right in the browser!

🚀 Features
🔐 User Authentication

Simple login and signup system (using localStorage)

User access protection for key pages

🎧 Interactive Music Albums

Browse songs by mood (Sad, Love, Motivational, Romantic, Friendship, Rap)

Animated UI with hover effects and smooth transitions

❤️ Favorites & 🎶 Playlist Support

Add or remove songs to your personal favorites or playlist

Data saved using browser localStorage

▶️ Now Playing Player

Mini audio player with live updates and track titles

Playback from favorites and album pages

💅 Clean and Responsive Design

Styled with Tailwind CSS and Animate.css

Background video and aesthetic gradients for visual appeal

📁 Project Structure
bash
Copy
Edit
.
├── index.html         # Home page - album selection
├── login.html         # User login screen
├── signup.html        # New user registration
├── songs.html         # Song list for selected album
├── favorites.html     # View and manage favorites
├── auth.js            # Handles login/signup/auth check
├── main.js            # Song click events, playlist logic
├── styles.css         # Optional custom CSS
├── assets/            # Contains song files and images
│   ├── music/         # .mp3/.wav files for playback
│   └── images/        # Album cover art and thumbnails
└── README.md
🛠️ Technologies Used
Frontend: HTML, CSS (Tailwind), JavaScript

Animation: Animate.css

Storage: Web localStorage for data persistence

Media: Songs and images from the assets/ folder

▶️ Getting Started
Clone the repo

bash
Copy
Edit
git clone https://github.com/your-username/music-album-site.git
cd music-album-site
Make sure the assets/ folder is included with all music and image files.

Open index.html in a browser to start the app locally.

📝 No server is required — this is a static front-end project.

📸 Screenshots
Add UI snapshots here — homepage, song list, login, and favorites screen.

🧩 Future Enhancements
🔗 Backend integration (Node.js + MongoDB or Firebase)

🔍 Search bar and album filters

🎤 Add lyrics, genres, or song metadata

📱 Mobile app version using React Native

📬 Connect
Made with 💙 by Shashank.
If you enjoyed this project, feel free to star ⭐ the repo or reach out via LinkedIn!
