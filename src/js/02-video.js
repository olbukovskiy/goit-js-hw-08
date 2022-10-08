
import vimeoPlayer from "@vimeo/player"

const iframeVideo = document.querySelector("#vimeo-player");
const player = new vimeoPlayer(iframeVideo);
console.log(player)