const videoState = new Map();
const compact = matchMedia('(max-width: 640px)');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const connection = navigator.connection;

function syncVideo(video, inView) {
  const limited = reducedMotion.matches || connection?.saveData ||
    ['slow-2g', '2g', '3g'].includes(connection?.effectiveType);
  if (!inView || limited || document.hidden) {
    video.pause();
    if (limited) video.classList.remove('video-playing');
    return;
  }

  if (!video.hasAttribute('src')) {
    const width = compact.matches ? 640 : 960;
    video.src = `${video.dataset.video}-${width}.mp4`;
  }
  if (video.paused) video.play().catch(() => {});
}

export function observeVideos() {
  const observer = new IntersectionObserver((entries) => {
    for (const { target, isIntersecting } of entries) {
      videoState.set(target, isIntersecting);
      syncVideo(target, isIntersecting);
    }
  }, { threshold: 0.08 });

  document.querySelectorAll('video[data-video]').forEach((video) => {
    video.addEventListener('playing', () => video.classList.add('video-playing'));
    video.addEventListener('error', () => video.classList.remove('video-playing'));
    observer.observe(video);
  });

  const sync = () => videoState.forEach((inView, video) => syncVideo(video, inView));
  reducedMotion.addEventListener('change', sync);
  connection?.addEventListener('change', sync);
  document.addEventListener('visibilitychange', sync);
}
