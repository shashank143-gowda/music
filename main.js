document.querySelectorAll('.album').forEach(album => {
    album.addEventListener('click', () => {
        const albumType = album.getAttribute('data-album');
        localStorage.setItem('selectedAlbum', albumType);
        window.location.href = 'songs.html';
    });
});

// Ensure the buttons exist before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('goToPlaylist')?.addEventListener('click', () => {
        window.location.href = 'playlist.html';
    });

    document.getElementById('goToFavorites')?.addEventListener('click', () => {
        window.location.href = 'favorites.html';
    });
});

// Playlist and Favorites functionality
let playlist = JSON.parse(localStorage.getItem('playlist')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function addToPlaylist(song) {
    if (!playlist.includes(song)) {
        playlist.push(song);
        localStorage.setItem('playlist', JSON.stringify(playlist));
        alert('Song added to playlist!');
    } else {
        alert('Song is already in the playlist!');
    }
}

function addToFavorites(song) {
    if (!favorites.includes(song)) {
        favorites.push(song);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Song added to favorites!');
    } else {
        alert('Song is already in favorites!');
    }
}

// Example event listeners for adding songs
document.querySelectorAll('.add-to-playlist').forEach(button => {
    button.addEventListener('click', (event) => {
        const song = event.target.getAttribute('data-song');
        addToPlaylist(song);
    });
});

document.querySelectorAll('.add-to-favorites').forEach(button => {
    button.addEventListener('click', (event) => {
        const song = event.target.getAttribute('data-song');
        addToFavorites(song);
    });
});
