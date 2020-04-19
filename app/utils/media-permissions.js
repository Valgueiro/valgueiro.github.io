export default async function getMediaDevicesPermissions() {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
  });
  const audio = new Audio();
  audio.srcObject = stream;
  return audio;
}
