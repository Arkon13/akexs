export const selectAlbum = (album) => {
    alert("Имя альбома" + album.title);
    return{
        type: "SELECT_ALBUM",
        payload: album
    }
};