export default async function getMediaDevicesPermissions() {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false,
  });
  const audio = new Audio();
  audio.srcObject = stream;
  return audio;
}
